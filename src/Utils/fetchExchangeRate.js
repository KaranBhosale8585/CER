const BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies";

export const fetchExchangeRate = async (fromCurrency, toCurrency) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${fromCurrency.toLowerCase()}.json`
    );
    if (!response.ok) throw new Error("Failed to fetch exchange rate");

    const data = await response.json();
    return data[fromCurrency.toLowerCase()][toCurrency.toLowerCase()] || null;
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    return null;
  }
};
