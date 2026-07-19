export type ContactFormData = {
  name: string
  company?: string
  email: string
  phone: string
  service: string
  budget?: string
  message: string
}

export type ApiResponse<T = void> = {
  success: boolean
  message: string
  data?: T
}
