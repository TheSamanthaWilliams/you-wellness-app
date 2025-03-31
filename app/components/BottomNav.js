// app/components/BottomNav.js
import Link from 'next/link';
import { Home, Heart, Calendar, Clock, Image } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();
  
  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-2">
      <div className="flex justify-around items-center">
        <Link 
          href="/dashboard" 
          className={`flex flex-col items-center p-2 ${isActive('/dashboard') ? 'text-green-600' : 'text-gray-600'}`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">YOU</span>
        </Link>
        
        <Link 
          href="/feed" 
          className={`flex flex-col items-center p-2 ${isActive('/feed') ? 'text-green-600' : 'text-gray-600'}`}
        >
          <Calendar className="w-6 h-6" />
          <span className="text-xs mt-1">FEED</span>
        </Link>
        
        <Link 
          href="/health-log" 
          className={`flex flex-col items-center p-2 ${isActive('/health-log') ? 'text-green-600' : 'text-gray-600'}`}
        >
          <Clock className="w-6 h-6" />
          <span className="text-xs mt-1">HEALTH LOG</span>
        </Link>
        
        <Link 
          href="/donate" 
          className={`flex flex-col items-center p-2 ${isActive('/donate') ? 'text-green-600' : 'text-gray-600'}`}
        >
          <Heart className="w-6 h-6" />
          <span className="text-xs mt-1">GIVING</span>
        </Link>
        
        <Link 
          href="/time-capsule" 
          className={`flex flex-col items-center p-2 ${isActive('/time-capsule') ? 'text-green-600' : 'text-gray-600'}`}
        >
          <Image className="w-6 h-6" />
          <span className="text-xs mt-1">TIME CAPSULE</span>
        </Link>
      </div>
    </div>
  );
}
