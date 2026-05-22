'use server'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function submitApplication(formData: FormData) {
  const supabase = await createClient()

  const file = formData.get('resume') as File
  let resumePath = null
  let resumeFilename = null

  if (file && file.size > 0) {
    const ext = file.name.split('.').pop()
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('resumes')
      .upload(filename, file, { contentType: file.type })

    if (uploadError) throw new Error(uploadError.message)
    resumePath = uploadData.path
    resumeFilename = file.name
  }

  const { error } = await supabase.from('applications').insert({
    job_id: (formData.get('job_id') as string) || null,
    job_title: formData.get('job_title') as string,
    full_name: formData.get('full_name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    location: formData.get('location') as string,
    years_experience: formData.get('years_experience') as string,
    current_role: formData.get('current_role') as string,
    linkedin_url: formData.get('linkedin_url') as string,
    portfolio_url: formData.get('portfolio_url') as string,
    cover_note: formData.get('cover_note') as string,
    resume_path: resumePath,
    resume_filename: resumeFilename,
  })

  if (error) throw new Error(error.message)
  redirect('/careers/success')
}
