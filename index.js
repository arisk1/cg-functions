const axios = require('axios');

const apiUrl = "https://api.coingecko.com/api/v3";

const coinList =async () => {
    const url = apiUrl + "/coins/list";
    try {
        return await axios.get(url)
    } catch (error) {
        console.error(error)
    }
}

const coinInfo = async(coinId) => {
    const url = apiUrl + "/coins/" + coinId;
    try {
        return await axios.get(url);
    } catch (error) {
        console.error(error);
    }
	
}

const coinListMarkets = async (currency, coins, order , pageIndex , sparkline , perPage) => {

    if(coins.length === 0){
    	 const url = apiUrl + "/coins/markets?vs_currency=" + (currency) + "&order=" + (order) + "market_cap_desc&per_page="+(perPage)+"&page="+(pageIndex ? pageIndex.toString() : "1")+"&sparkline="+ (sparkline) +"&price_change_percentage=24h%2C7d%2C14d";
    try {
        return await axios.get(url);
        
    } catch (error) {
        console.error(error);
    }
    }else{
    	 const url = apiUrl + "/coins/markets?vs_currency=" + (currency) + "&ids=" + coins.join('%2C') + "&order=" + (order) + "market_cap_desc&per_page="+(perPage)+"&page="+(pageIndex ? pageIndex.toString() : "1")+"&sparkline="+ (sparkline) +"&price_change_percentage=24h%2C7d%2C14d";
    try {
        return await axios.get(url);
        
    } catch (error) {
        console.error(error)
    }
    }
   
}
const pingApi = async () => {
    const url = apiUrl + "/ping";
    try {
        return await axios.get(url);
    } catch (error) {
        console.error(error);
    }
}
const priceOfCoins = async (coins, currency) => {
    const url = apiUrl + "/simple/price?ids=" + coins.join('%2C') + "&vs_currencies=" + currency.join('%2C') + "&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true";
    try {
        return await axios.get(url);
    } catch (error) {
        console.error(error);
    }
}

const supportedCurrencies = async() => {
	const url = apiUrl + "/simple/supported_vs_currencies"
	 try {
        return await axios.get(url);
    } catch (error) {
        console.error(error);
    }

}

const exchangeRates = async() => {
	const url = apiUrl + '/exchange_rates';
	try  {
		const res = await axios.get(url);
		return res.rates;
	}catch(error){
		console.log(erorr);
	}
}

module.exports = {
    coinList,
    coinInfo,
    exchangeRates,
    coinListMarkets,
    pingApi,
    priceOfCoins,
    supportedCurrencies
}
