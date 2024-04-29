const API_BASE_URL = process.env.API_BASE_URL;

export const getCurrencyConverterPageData = async (
  currencyCode,
  type,
  bankCode,
  lastNDates = 7,
) => {
  try {
    const url =
      `${API_BASE_URL}/currency-converter?` +
      new URLSearchParams({
        currencyCode,
        numberOfDays: lastNDates,
        type,
        bankCode,
      });
    console.log(`Requesting data from [${url}]`);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const text = await response.text();
      console.log(text);
      throw new Error(
        `Error occurred while fetching currency-converter page data - ${text}`,
      );
    }

    const payload = await response.json();
    return payload;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
