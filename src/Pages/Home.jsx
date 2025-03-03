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
    <div className="container">
      <h2>Currency Converter</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="amount">
          <p>Enter Amount</p>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
          />
        </div>

        <div className="dropdown">
          <Dropdown
            label="From"
            currency={fromCurrency}
            setCurrency={setFromCurrency}
          />
          <FontAwesomeIcon
            icon={faRightLeft}
            className="swap-icon"
            onClick={swapCurrencies}
          />
          <Dropdown
            label="To"
            currency={toCurrency}
            setCurrency={setToCurrency}
          />
        </div>

        <div className="msg">
          {loading
            ? "Loading..."
            : exchangeRate
            ? `${amount} ${fromCurrency} = ${(amount * exchangeRate).toFixed(
                2
              )} ${toCurrency}`
            : "Exchange rate unavailable"}
        </div>

        <button type="button" onClick={getExchangeRate}>
          Get Exchange Rate
        </button>
      </form>
    </div>
  );
};

export default Home;
