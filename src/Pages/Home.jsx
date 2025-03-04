import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../Components/Dropdown";
import { fetchExchangeRate } from "../Utils/fetchExchangeRate";

const Home = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getExchangeRate();
  }, [fromCurrency, toCurrency]);

  const getExchangeRate = async () => {
    setLoading(true);
    const rate = await fetchExchangeRate(fromCurrency, toCurrency);
    setExchangeRate(rate);
    setLoading(false);
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
      <div className="bg-white mt-8 p-6 sm:p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          Currency Converter
        </h2>
        <form onSubmit={(e) => e.preventDefault()} className="mt-6">
          {/* Amount Input */}
          <div className="mb-4">
            <p className="mb-2 font-medium">Enter Amount</p>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="1"
              className="w-full border border-gray-300 p-3 rounded-lg text-lg"
            />
          </div>

          {/* Currency Selection */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 my-4">
            <Dropdown
              label="From"
              currency={fromCurrency}
              setCurrency={setFromCurrency}
            />
            <button
              type="button"
              className="text-2xl p-2 mt-8 bg-gray-200 rounded-full hover:bg-gray-300 transition"
              onClick={swapCurrencies}
            >
              <FontAwesomeIcon icon={faRightLeft} />
            </button>
            <Dropdown
              label="To"
              currency={toCurrency}
              setCurrency={setToCurrency}
            />
          </div>

          {/* Exchange Rate Display */}
          <div className="text-center font-semibold text-lg my-4">
            {loading
              ? "Loading..."
              : exchangeRate
              ? `${amount} ${fromCurrency} = ${(amount * exchangeRate).toFixed(
                  2
                )} ${toCurrency}`
              : "Exchange rate unavailable"}
          </div>

          {/* Get Exchange Rate Button */}
          <button
            type="button"
            onClick={getExchangeRate}
            className="w-full bg-[#af4d98] text-white text-lg p-3 rounded-lg mt-4 hover:bg-[#9a3e85] transition"
          >
            Get Exchange Rate
          </button>
        </form>
      </div>
  );
};

export default Home;
