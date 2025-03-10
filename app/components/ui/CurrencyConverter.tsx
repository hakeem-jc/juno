"use client";
import { useForm } from "react-hook-form";
import Input from "@/app/components/ui/Input";

type FormData = {
  quoteCurrency: string;
  baseCurrency: string;
};

const CurrencyConverter = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useForm<FormData>();
  return (
    <div className="max-w-sm md:w-96 min-h-48 p-6 rounded-lg shadowm-sm bg-[#212121] flex flex-col justify-between items-center gap-8">
      <div className="flex gap-3 w-full">
        <p className="block">Currency Converter</p>
        <p className="block text-gray-400">Fiat</p>
        <p className="block text-gray-400">Crypto</p>
      </div>

      <form className="flex w-full justify-between items-center">
        <div>
          <Input
            id="quoteCurrency"
            label="Quote Currency"
            type="number"
            // @ts-ignore
            register={register}
            placeholder="0.00"
          />
        </div>

        <div>
          <select
            id="quoteCurrencyOptions"
            className="text-sm rounded-lg block w-full p-2.5 bg-[#181818] placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          >
            <option selected value="JMD">
              JMD
            </option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </form>

      <form className="flex w-full justify-between items-center">
        <div>
          <Input
            id="baseCurrency"
            label="Base Currency"
            type="number"
            // @ts-ignore
            register={register}
            placeholder="0.00"
          />
        </div>

        <div>
          <select
            id="baseCurrencyOptions"
            className="text-sm rounded-lg block w-full p-2.5 bg-[#181818] placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          >
            <option selected value="USD">
              USD
            </option>
            <option value="JMD">JMD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </form>

      <p className="text-gray-400 text-sm">1 JMD = 0.005 EUR</p>
    </div>
  );
};

export default CurrencyConverter;
