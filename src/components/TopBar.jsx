import React from 'react'
import { useSession , signOut} from 'next-auth/react'
const TopBar = () => {
    const session = useSession();
  return (
    <header className="sticky top-0 z-50 bg-black border-b-2 border-gray-800">
      <div className="w-full px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div>
           <h1 className='text-purple-600 text-2xl'>Threads</h1>
        </div>

        {/* User Account */}
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm hidden sm:inline">
            Welcome back,
          </span>
          <button className="flex items-center gap-2">
            <img 
              src={session.data?.user.image ||"https://api.dicebear.com/6.x/avataaars/svg?seed=Guest" }
              alt="User Avatar"
              className="w-8 h-8 rounded-full bg-white"
            />
            <span className="text-white font-medium hidden sm:inline">
              {session.data?.user.name}
            </span>
          </button>
          {/* {Logout button} */}
          <button 
            onClick={() => signOut()} 
            className="text-red-500 hover:text-red-400 text-sm font-medium ml-4"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default TopBar