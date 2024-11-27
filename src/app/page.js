'use client'

import React from 'react'
import ThreadCard from '@/components/ThreadCard'
import TopBar from '@/components/TopBar'
import Sidebar from '@/components/Sidebar'
import RightSidebar from '@/components/RightSidebar'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
const Home = () => {
  // Placeholder data for threads
  const {data:session, status } = useSession()
  const router = useRouter()

  React.useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!session?.user) {
    return null
  }
  const threads = [
    {
      id: 1,
      user: {
        name: 'John Doe',
        username: '@johndoe',
        avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=John'
      },
      content: 'Just launched my new project! 🚀 #coding #development',
      timestamp: '2h ago',
      likes: 42,
      replies: 12,
      retweets: 8
    },
    {
      id: 2,
      user: {
        name: 'Sarah Wilson',
        username: '@sarahw',
        avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Sarah'
      },
      content: 'Learning Next.js has been an amazing journey! Building my first full-stack app 💻 #webdev #javascript',
      timestamp: '4h ago',
      likes: 128,
      replies: 24,
      retweets: 16
    },
    {
      id: 3,
      user: {
        name: 'Alex Chen',
        username: '@achen',
        avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Alex'
      },
      content: 'Who else is excited about the new AI developments? 🤖 The future is now! #AI #technology',
      timestamp: '6h ago',
      likes: 89,
      replies: 32,
      retweets: 14
    },
    {
      id: 4,
      user: {
        name: 'Emma Davis',
        username: '@emmad',
        avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Emma'
      },
      content: 'Just deployed my portfolio using Vercel. Check it out! 🌐 #portfolio #webdesign',
      timestamp: '12h ago',
      likes: 156,
      replies: 18,
      retweets: 22
    },
    {
      id: 5,
      user: {
        name: 'Mike Brown',
        username: '@mikeb',
        avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Mike'
      },
      content: 'TailwindCSS is a game changer for styling. Never going back! 🎨 #css #tailwind #frontend',
      timestamp: '1d ago',
      likes: 234,
      replies: 45,
      retweets: 28
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <TopBar />
      
      
      <div className="flex">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 ml-[70px] xl:ml-[250px] max-w-2xl px-4 pt-4">
          <h1 className="text-white text-2xl font-bold py-4">Home</h1>
          
          <div className="space-y-4">
            {threads.map((thread) => (
              <ThreadCard key={thread.id} thread={thread} />
            ))}
          </div>
        </main>
        <RightSidebar />
      </div>
    </div>
  )
}

export default Home