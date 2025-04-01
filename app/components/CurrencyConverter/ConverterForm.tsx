import { useEffect, useState } from "react";
import CurrencySelect from "./CurrencySelect";

const ConverterForm: React.FC = () => {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("JMD");
  const [result, setResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const getExchangeRate = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await fetch("/api/exchange", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fromCurrency, toCurrency }),
      });

      if (!response.ok) throw new Error("Something went wrong!");
      const data = await response.json();
      const rate = (data.conversion_rate * amount).toFixed(2);
      setResult(`${amount} ${fromCurrency} = ${rate} ${toCurrency}`);
    } catch (error) {
      setResult("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getExchangeRate();
  };

  useEffect(() => {
    getExchangeRate();
  }, []);

  return (
    <form
      className="max-w-sm md:w-96 min-h-48 p-6 rounded-lg shadow-sm bg-[#212121] flex flex-col justify-between"
      onSubmit={handleFormSubmit}
    >
      <div className="mb-6">
        <label className="block text-white font-medium mb-2">
          Enter Amount
        </label>
        <input
          type="number"
          className="w-full p-3 text-white font-medium bg-[#212121] border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <label className="block text-white font-medium mb-2">From</label>
          <CurrencySelect
            selectedCurrency={fromCurrency}
            handleCurrency={(e: any) => setFromCurrency(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={handleSwapCurrencies}
          className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-700 border border-gray-600 transition hover:bg-gray-600 mt-7"
        >
          <svg
            width="16"
            viewBox="0 0 20 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z"
              fill="#fff"
            />
          </svg>
        </button>
        <div>
          <label className="block text-white font-medium mb-2">To</label>
          <CurrencySelect
            selectedCurrency={toCurrency}
            handleCurrency={(e: any) => setToCurrency(e.target.value)}
          />
        </div>
      </div>
      <button
        type="submit"
        className={`w-full py-3 rounded-md text-white font-semibold transition ${
          isLoading
            ? "opacity-70 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
        disabled={isLoading}
      >
        {isLoading ? "Getting exchange rate..." : "Get Exchange Rate"}
      </button>
      <p className="text-white text-center font-semibold py-4 mt-4 rounded-md bg-[#181818]">
        {result}
      </p>
    </form>
  );
};

export default ConverterForm;
