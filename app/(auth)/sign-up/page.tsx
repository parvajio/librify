import AuthForm from '@/components/AuthForm'
import { signUpSchema } from '@/lib/validation'
import React from 'react'

const page = () => {
  return (
    <AuthForm
        type="SIGN_UP"
        schema={signUpSchema}
        defaultvalue={{
            fullname: '',
            email: '',
            universityId: 0,
            universityCard: '',
            password: ''
        }}
        onSubmit={()=>{}}
    ></AuthForm>
  )
}

export default page