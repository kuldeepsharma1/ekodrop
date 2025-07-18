'use client';


import { BottomNav } from '@/components/layout/BottomNav';

import { Search, TrendingUp, MapPin, Clock } from 'lucide-react';

export default function SearchPage() {
  const trendingTopics = [
    { topic: 'campus life', posts: 234 },
    { topic: 'study tips', posts: 156 },
    { topic: 'food reviews', posts: 89 },
    { topic: 'late night thoughts', posts: 67 },
    { topic: 'weekend plans', posts: 45 }
  ];

  const nearbyPosts = [
    { id: 1, snippet: 'Amazing coffee at the new...' },
    { id: 2, snippet: 'Does anyone know when...' },
    { id: 3, snippet: 'Just finished my final...' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5FAFF] to-[#E8F4FD] ">
      
      <main className="pt-6 pb-20 px-4">
        <div className="max-w-md mx-auto">
          {/* Search Bar */}
          <div
            
            className="relative mb-6"
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search drops, topics, or locations..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00C4CC] focus:border-transparent shadow-sm"
            />
          </div>

          {/* Trending Topics */}
          <div
            
            className="mb-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="text-[#00C4CC]" size={20} />
              <h2 className="text-lg font-semibold text-gray-800">Trending</h2>
            </div>
            <div className="space-y-2">
              {trendingTopics.map((item) => (
                <button
                  key={item.topic}
                  
                  className="w-full p-3 bg-white rounded-lg border border-gray-200 hover:border-[#00C4CC] transition-colors text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 font-medium">#{item.topic}</span>
                    <span className="text-gray-500 text-sm">{item.posts} drops</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Nearby Posts */}
          <div
            
          >
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="text-[#8E44AD]" size={20} />
              <h2 className="text-lg font-semibold text-gray-800">Nearby</h2>
            </div>
            <div className="space-y-2">
              {nearbyPosts.map((post) => (
                <div
                  key={post.id}
                  
                  className="p-3 bg-white rounded-lg border border-gray-200 hover:border-[#8E44AD] transition-colors cursor-pointer"
                >
                  <p className="text-gray-700 text-sm">{post.snippet}</p>
                  <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                    <Clock size={12} />
                    <span>2h ago</span>
                    <span>•</span>
                    <span>0.5km away</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}