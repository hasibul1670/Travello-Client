'use client'
import React, { useState } from 'react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null); // Initialize state for selected item

  const handleItemClick = (itemName: string) => {
    setSelectedItem(itemName === selectedItem ? null : itemName); // Toggle selected item
  };

  return (
    <section>
      <div className='flex justify-between'>
        <div className="w-1/5 bg-gray-800 text-white h-screen  flex flex-col">
          <div className="p-4 border-b border-gray-700">
            Travello
          </div>
      <ul className="flex-1">
            <Link href="/dashboard/tour">
              <li className={`p-4 cursor-pointer ${selectedItem === "tour" ? 'bg-cyan-700' : 'hover:bg-gray-600'}`} onClick={() => handleItemClick("tour")}>Tour</li>
            </Link>
            <Link href="/dashboard/visa">
              <li className={`p-4 cursor-pointer ${selectedItem === "visa" ? 'bg-cyan-700' : 'hover:bg-gray-600'}`} onClick={() => handleItemClick("visa")}>Visa</li>
            </Link>
            <Link href="/dashboard/bus">
              <li className={`p-4 cursor-pointer ${selectedItem === "bus" ? 'bg-cyan-700' : 'hover:bg-gray-600'}`} onClick={() => handleItemClick("bus")}>Bus</li>
            </Link>
          </ul>
        </div>

        <div className='w-4/5 bg-red-400'>
          {children}
        </div>
      </div>
    </section>
  );
}
