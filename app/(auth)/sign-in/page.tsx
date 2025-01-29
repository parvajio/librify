"use client";
import AuthForm from '@/components/AuthForm'
import { signInWithCredentials } from '@/lib/actions/auth';
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
    onSubmit={signInWithCredentials}
    >

    </AuthForm>
  )
}

export default page