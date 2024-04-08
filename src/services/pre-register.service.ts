import { mande } from 'mande'
import type { PreregisterData } from '@/schemas/forms/pre-register.schema'

export type PreRegisterResponse =
  | {
      success: true
      message: string
    }
  | {
      success: false
      error: string
      kind?: string
      formErrors?: Record<string, string>
    }

export const preRegister = async (userData: PreregisterData) => {
  const response = await fetch(`${process.env.PUBLIC_PREREGISTER_API_ENDPOINT}/pre-register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })

  return response
}
