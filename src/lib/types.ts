export interface Job {
  id: string
  slug: string
  title: string
  department: string
  location: string
  country: 'India' | 'UAE' | 'USA'
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Executive'
  status?: 'active' | 'inactive'
  refId: string
  description: string
  responsibilities: string[]
  qualifications: string[]
  whatWeOffer: string
}

export interface Application {
  id: string
  job_id: string | null
  job_title: string
  full_name: string
  email: string
  phone: string
  location: string
  years_experience: string
  current_role: string
  linkedin_url: string
  portfolio_url: string
  cover_note: string
  resume_path: string | null
  resume_filename: string | null
  status: 'new' | 'reviewing' | 'shortlisted' | 'rejected'
  admin_notes: string
  created_at: string
}
