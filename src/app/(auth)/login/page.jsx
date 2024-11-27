'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    const session = useSession();
    const router = useRouter();
    
    useEffect(() => {
        if(session.data?.user) {
            router.push('/')
        }
    },[session,router])

    return (
        <div className='min-h-screen w-full bg-[#0F172A] flex justify-center items-center p-4 md:p-6'>
            <div className='max-w-md w-full space-y-12 p-8 md:p-10 bg-[#1E293B]/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/30'>
               
                <div className='flex justify-center'>
                    <div className='w-16 h-16 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                    </div>
                </div>

              
                <div className='space-y-6'>
                    <h1 className='text-4xl md:text-5xl font-bold text-center'>
                        <span className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>
                            Join Threads
                        </span>
                    </h1>
                    <div className='space-y-2'>
                        <p className='text-gray-300 text-center text-lg'>
                            Connect. Share. Engage.
                        </p>
                        <p className='text-gray-400 text-center text-sm'>
                            Join our community of creators and thinkers
                        </p>
                    </div>
                </div>

               
                <div className='space-y-6'>
                    <div className='flex items-center justify-between'>
                        <span className='border-b border-gray-600 w-full'></span>
                        <span className='px-4 text-gray-400 text-sm'>login with</span>
                        <span className='border-b border-gray-600 w-full'></span>
                    </div>

                    <button 
                        onClick={() => signIn('google')}
                        className='w-full group relative flex items-center justify-center gap-3 bg-white text-black py-3 px-4 rounded-xl hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl'
                    >
                        <img 
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png' 
                            alt="google-image" 
                            className='w-6 h-6'
                        />
                        <span className='font-medium'>Login with Google</span>
                    </button>
                </div>

              
                <p className='text-gray-400 text-xs text-center'>
                    By continuing, you agree to our Terms of Service and Privacy Policy
                </p>
            </div>
        </div>
    )
}

export default page