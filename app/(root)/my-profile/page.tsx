import { signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <form action={async () => {
        "use server"

        await signOut();
    }} className='mb-10'>
        <Button>Log Out</Button>
    </form>
  )
}

export default page