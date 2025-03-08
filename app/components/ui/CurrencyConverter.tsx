const CurrencyConverter = () => {
  return (
    <div className="max-w-sm md:w-96 min-h-48 p-6 rounded-lg shadowm-sm bg-[#212121] flex flex-col justify-between items-center gap-8">
      <div className="flex gap-3 w-full">
        <p className="block">Currency Converter</p>
        <p className="block text-gray-400">Fiat</p>
        <p className="block text-gray-400">Crypto</p>
      </div>

      <div className="flex w-full justify-between">
        <div>
          <p className="text-sm text-gray-400 mb-2">Quote Currency</p>
          <input type="number" className="bg-[#181818] text-white" />
        </div>

        <div className="bg-[#181818] p-2 rounded-lg">
          <select className="bg-[#181818] text-white">
            <option>JMD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>

      <div className="flex w-full justify-between">
        <div>
          <p className="text-sm text-gray-400 mb-2">Base Currency</p>
          <input type="number" className="bg-[#181818] text-white" />
        </div>

        <div className="bg-[#181818] p-2 rounded-lg">
          <select className="bg-[#181818] text-white">
            <option>EUR</option>
            <option>JMD</option>
          </select>
        </div>
      </div>

      <p className="text-gray-400 text-sm">1 JMD = 0.005 EUR</p>
    </div>
  );
};

export default CurrencyConverter;
