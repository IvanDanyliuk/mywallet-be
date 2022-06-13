import fetch from 'node-fetch';

export const getExchangeRate = async (req, res) => {
  const { exchangeData } = req.query;
  const exchangeParams = JSON.parse(exchangeData);
  try {
    const response = await fetch(`https://fcsapi.com/api-v3/forex/latest?symbol=${exchangeParams.from}/${exchangeParams.to}&access_key=dHHeQmYDhbEYF2jHfrgE`, { method: 'GET' });
    const rates = await response.json();
    
    const rate = +rates.response[0].c;
    const convertedAmount = (exchangeParams.amount * rate.toFixed(2));
    const resultRate = rate.toFixed(4);
    const reversedRate = (1 / rate).toFixed(4)

    res.status(200).json({ convertedAmount, resultRate, reversedRate });
  } catch (error) {
    res.status(500).json({ message: 'Rate could not be found' });
  }
};