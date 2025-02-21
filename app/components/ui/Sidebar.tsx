"use client";
import ToggleButton from '@/app/components/ui/ToggleButton';

interface SidebarProps {
  isOpen: boolean;
  setSection: (section: string) => void;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, setSection, toggleSidebar }: SidebarProps) {
  return (
    <aside
      id="default-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-[#212121]">
        <div className="flex items-center justify-between sm:justify-center mb-4 px-3 ">
          <h1 className="text-2xl font-semibold text-white">juno</h1>
          <ToggleButton toggleSidebar={toggleSidebar} />
        </div>

        <ul className="space-y-2 font-medium">
          <li
            className="flex items-center p-2  rounded-lg text-white hover:bg-[#181818] cursor-pointer"
            onClick={() => setSection("Loan Calculator")}
          >
            <svg
              className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21"
            >
              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
            </svg>
            <span className="ms-3">Loan Calculator</span>
          </li>

          <li
            className="flex items-center p-2  rounded-lg text-white hover:bg-[#181818] cursor-pointer"
            onClick={() => setSection("TBD")}
          >
            <svg
              className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21"
            >
              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
            </svg>
            <span className="ms-3">TBD</span>
          </li>

          <li
            className="flex items-center p-2  rounded-lg text-white hover:bg-[#181818] cursor-pointer"
            onClick={() => setSection("TBD")}
          >
            <svg
              className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21"
            >
              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
            </svg>
            <span className="ms-3">TBD</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
