import React from 'react'
import { Heart, MessageCircle, Repeat2, Share } from 'lucide-react'

const ThreadCard = ({ thread }) => {
  return (
    <div className="border border-gray-800 rounded-lg p-4 hover:bg-gray-900/50 transition-colors">
      <div className="flex gap-3">
        <img 
          src={thread.user.avatar} 
          alt={thread.user.name}
          className="w-10 h-10 rounded-full"
        />
        
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-white font-semibold">{thread.user.name}</h3>
            <span className="text-gray-500">{thread.user.username}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{thread.timestamp}</span>
          </div>
          
          <p className="text-white mt-2">{thread.content}</p>
          
          <div className="flex gap-4 mt-4">
            <button className="text-gray-500 hover:text-red-500 transition-colors flex items-center gap-1">
              <Heart size={20} />
              <span className="text-sm">{thread.likes}</span>
            </button>
            <button className="text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-1">
              <MessageCircle size={20} />
              <span className="text-sm">{thread.replies}</span>
            </button>
            <button className="text-gray-500 hover:text-green-500 transition-colors flex items-center gap-1">
              <Repeat2 size={20} />
              <span className="text-sm">{thread.retweets}</span>
            </button>
            <button className="text-gray-500 hover:text-white transition-colors">
              <Share size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreadCard