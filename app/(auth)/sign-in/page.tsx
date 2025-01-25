"use client";
import AuthForm from '@/components/AuthForm'
import { signInSchema } from '@/lib/validation'
import React from 'react'

const page = () => {
  return (
    <AuthForm 
    type="SIGN_IN"
    schema={signInSchema}
    defaultvalue={
        {
            email: '',
            password: ""
        }
    }
    onSubmit={()=>{}}
    >

    </AuthForm>
  )
}

export default page