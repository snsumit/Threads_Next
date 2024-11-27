import { 
    HomeIcon, 
    UserIcon, 
    BellIcon, 
    BookmarkIcon,
    HashtagIcon,
    UserGroupIcon,
    Cog8ToothIcon
  } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'  
import { useState,useEffect } from 'react'
import { generateUsername } from '@/utils/usernameGenrator'
  const sidebarItems = [
    { icon: HomeIcon, text: 'Home', href: '/' },
    { icon: HashtagIcon, text: 'Explore', href: '/explore' },
    { icon: BellIcon, text: 'Notifications', href: '/notifications' },
    { icon: BookmarkIcon, text: 'Bookmarks', href: '/bookmarks' },
    { icon: UserGroupIcon, text: 'Communities', href: '/communities' },
    { icon: UserIcon, text: 'Profile', href: '/profile' },
    { icon: Cog8ToothIcon, text: 'Settings', href: '/settings' },
  ]
  
  const Sidebar = () => {
    const session = useSession();
    const [username, setUsername] = useState('');
  
    useEffect(() => {
      // Generate username when component mounts
      setUsername(generateUsername());
    }, []);
  
    return (
      <aside className="fixed left-0 h-screen w-[70px] xl:w-[250px] flex flex-col gap-2 border-r border-gray-800">
      <div className="p-4 m-2 hover:bg-gray-900 rounded-full cursor-pointer">
        <div className="flex items-center gap-3">
          <img
            src={session.data?.user.image || "https://api.dicebear.com/6.x/avataaars/svg?seed=Guest"}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="hidden xl:block">
            <p className="text-white font-semibold">{session.data?.user.name}</p>
            <p className="text-gray-500 text-sm">@{username}</p>
          </div>
        </div>
      </div>
        <nav className="flex-1">
          {sidebarItems.map((item) => (
            <a
              key={item.text}
              href={item.href}
              className="flex items-center gap-4 px-2 xl:px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-900 transition-colors rounded-lg mx-2"
            >
              <item.icon className="w-7 h-7" />
              <span className="hidden xl:block text-lg">{item.text}</span>
            </a>
          ))}
        </nav>
  
        {/* User Profile Section */}
        
      </aside>
    )
  }
  
  export default Sidebar