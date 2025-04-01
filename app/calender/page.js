import React, { useState } from 'react';
import Link from 'next/link';

export default function CalendarPage() {
  const [activeDay, setActiveDay] = useState('today');

  return (
    <div>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="none">
          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                stroke="#9a2 2 0 012-2h.93a2 2 0 001.664-3.11l-.33-.66a2 2 0 01.32-2.39l.56-.56a2 2 0 012.74 0l.56.56a2 2 0 01.32 2.39l-.36.66a2 2 0 001.67 3.11h.93a2 2 0 012 2v.8a2 2 0 01-2 2h-.93a2 2 0 00-1.67 3.11l.36.66a2 2 0 01-.32 2.39l-.56.56a2 2 0 01-2.74 0l-.56-.56a2 2 0 01-.32-2.39l.36-.66a2 2 0 00-1.67-3.11H5a2 2 0 01-2-2v-.8a2 2 0 012-2h.93a2 2 0 001.67-3.11l-.36-.66a2 2 0 01.32-2.39l.56-.56a2 2 0 012.74 0l.56.56a2 2 0 01.32 2.39l-.36.66A2 2 0 0014.07 7H15z" />
        </svg>
      </button>
    </div>
  );
}
