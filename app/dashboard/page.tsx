'use client';

import { useState } from 'react';
import ToggleButton from '@/app/components/ui/ToggleButton';
import Sidebar from '@/app/components/ui/Sidebar';
import Content from '@/app/components/ui/Content';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <ToggleButton toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <Content />
    </div>
  );
}