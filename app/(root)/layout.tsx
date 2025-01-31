import { auth } from '@/auth'
import Header from '@/components/Header'
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

const layout = ({children }: {children : ReactNode}) => {

  const session  =  auth();
  if(!session){
    redirect("/sign-in")
  }

  return (
    <main className='root-container'>
        <div className='mx-auto max-w-7xl'>
            <Header session = {session}>
                
            </Header>

            <div className='mt-20 pb-20'>
                {children}
            </div>
        </div>
    </main>
  )
}

export default layout