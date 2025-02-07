export default function Home() {
  return (
    <main>
      <nav className="bg-[#181818] w-full border-b border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              juno
            </span>
          </a>
        </div>
      </nav>
      <section className="p-4 sm:ml-64">
        <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
          <h1 className="text-4xl font-semibold text-center text-gray-800 dark:text-gray-100">
            Welcome to Juno
          </h1>
        </div>
      </section>
    </main>
  );
}
