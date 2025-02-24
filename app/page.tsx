'use client';

import { useState } from 'react';
import ToggleButton from '@/app/components/ui/ToggleButton';
import Sidebar from '@/app/components/ui/Sidebar';
import Content from '@/app/components/ui/Content';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [section, setSection] = useState('Overview');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main>
      <ToggleButton toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} setSection={setSection} toggleSidebar={toggleSidebar} />
      <Content section={section} isOpen={isSidebarOpen} />
    </main>
  );
}