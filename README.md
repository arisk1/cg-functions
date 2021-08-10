# cg-functions
This npm package cointains functions that were created on top of coingecko api!

# installation 
$ npm i @arisk1/cg-functions

# available functions
## pingApi() 
  checks if the API is live.
  in success it returns "gecko_says": "(V3) To the Moon!"
  
## coinInfo(coinId)
return all available info for one coin

## exchangeRates()
return exchange rates for btc

-coinId: the Id of coin

## coinListMarkets(currency,coins,order,pageIndex,sparkline,perPage)
returns 100 coins per page, no pagination required.

-currency : results will be displayed in the currency of your choice ex.USD,EUR etc

-coins : an array of coins we want to get information for.In case we provide an empty array 
	 it returns every coin.

-order : market_cap_desc for desceding order regarding the coin's marketcap, market_cap_asc  for ascending order regarding the coin's marketcap 

-pageIndex : the number of the page you wish to recieve. 

-sparkline : boolean , return the sparkline in case you want to draw a chart.

-perPage : number of items you get back per page.

  
## coinList() 
List all supported coins' - id, name and symbol (no pagination required)

## priceOfCoins(coins,currency)

return a list of coins and their prices in the preffered currency.

The two arguments coins and currency must be of array type.
Meaning you can request multiple coins and their price in different currencies.

## supportedCurrencies()

List the all the currencies coinngeckoAPI v3 supports.
