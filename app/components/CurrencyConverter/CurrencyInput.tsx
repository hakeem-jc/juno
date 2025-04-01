"use client";
import { useState } from "react";

const CurrencyInput: React.FC = () => {
  const [amount, setAmount] = useState<number | "">("");
  const [currency, setCurrency] = useState<string>("USD");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAmount(value === "" ? "" : parseFloat(value));
  };

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
    setShowDropdown(false);
  };

  return (
    <form className="max-w-[18rem] mx-auto flex">
      <label htmlFor="currency-input" className="sr-only">
        Enter Amount
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            />
          </svg>
        </div>
        <input
          type="number"
          id="currency-input"
          value={amount}
          onChange={handleAmountChange}
          className="block p-2.5 w-full ps-10 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Enter amount"
          required
        />
      </div>
      <div className="relative">
        <button
          id="dropdown-currency-button"
          className="flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {currency} 
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {showDropdown && (
          <div className="absolute mt-2 w-36 bg-[#181818] divide-y divide-gray-100 rounded-lg shadow z-10">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              {["USD", "EUR", "GBP"].map((curr) => (
                <li key={curr}>
                  <button
                    type="button"
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => handleCurrencyChange(curr)}
                  >
                    {curr}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </form>
  );
};

export default CurrencyInput;