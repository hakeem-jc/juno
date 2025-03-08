import CurrencyConverter from '@/app/components/ui/CurrencyConverter';  

const Overview = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="max-w-sm min-h-48 p-6 rounded-lg shadow-sm bg-[#212121] flex flex-col justify-between">
        <div className="flex items-center justify-between mb-4">
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
          <p className="text-sm">9:04 PM 23 Feb</p>
        </div>
        <div>
          <p className="font-normal text-sm text-gray-400">Balance</p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            $10,000
          </h5>
        </div>
      </div>

      <div className="max-w-sm min-h-48 p-6 rounded-lg shadow-sm bg-[#212121] flex flex-col justify-between">
        <div className="flex items-center justify-between mb-4">
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
          <p className="text-sm">9:04 PM 23 Feb</p>
        </div>
        <div>
          <p className="font-normal text-sm text-gray-400">
            Recent Transactions
          </p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            $5,500
          </h5>
        </div>
      </div>

      <CurrencyConverter />
    </section>
  );
};

export default Overview;
