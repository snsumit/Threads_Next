const suggestedCommunities = [
    {
      id: 1,
      name: 'JavaScript Developers',
      members: '125K',
      image: 'https://api.dicebear.com/6.x/identicon/svg?seed=js'
    },
    {
      id: 2,
      name: 'React Enthusiasts',
      members: '82K',
      image: 'https://api.dicebear.com/6.x/identicon/svg?seed=react'
    },
    {
      id: 3,
      name: 'UI/UX Design',
      members: '95K',
      image: 'https://api.dicebear.com/6.x/identicon/svg?seed=uiux'
    },
    {
      id: 4,
      name: 'Web Development',
      members: '200K',
      image: 'https://api.dicebear.com/6.x/identicon/svg?seed=webdev'
    },
    {
      id: 5,
      name: 'Tech Startups',
      members: '45K',
      image: 'https://api.dicebear.com/6.x/identicon/svg?seed=startup'
    }
  ]
  
  const RightSidebar = () => {
    return (
      <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-[350px] fixed right-0 h-screen p-6">
        {/* Desktop Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-900 text-white rounded-full py-2 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        {/* Suggested Communities */}
        <div className="mt-6 bg-gray-900 rounded-xl p-4">
          <h2 className="text-xl font-bold text-white mb-4">Suggested Communities</h2>
          <div className="space-y-4">
            {suggestedCommunities.map((community) => (
              <div key={community.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={community.image}
                    alt={community.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-white font-semibold">{community.name}</h3>
                    <p className="text-gray-400 text-sm">{community.members} members</p>
                  </div>
                </div>
                <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
                  Follow
                </button>
              </div>
            ))}
          </div>
          <button className="text-blue-400 text-sm mt-4 hover:text-blue-300 transition-colors">
            Show more
          </button>
        </div>
  
        {/* Footer Links */}
        <div className="mt-6 text-gray-400 text-sm">
          <div className="flex flex-wrap gap-2">
            <a href="#" className="hover:underline">Terms of Service</a>
            <span>·</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:underline">Cookie Policy</a>
          </div>
          <p className="mt-2">© 2024 Your Company, Inc.</p>
        </div>
      </aside>
      </>
    )
  }
  
  export default RightSidebar