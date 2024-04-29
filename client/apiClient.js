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
      console.log(response);
      throw new Error(
        `Error occurred while fetching currency-converter page data`,
      );
    }

    const payload = await response.json();
    return payload;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
