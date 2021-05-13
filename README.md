# cg-functions
This npm package cointains functions that were created on top of coingecko api.

# installation 
$ npm i @arisk1/cg-functions

# available functions
## pingApi() 
  checks if the API is live.
  in success it returns "gecko_says": "(V3) To the Moon!"

## coinListMarkets(currency,order,pageIndex)
returns 100 coins per page, no pagination required.

-currency : results will be displayed in the currency of your choice ex.USD,EUR etc

-order : market_cap_desc for desceding order regarding the coin's marketcap, market_cap_asc  for ascending order regarding the coin's marketcap 

-pageIndex : the number of the page you wish to recieve. 

if you do not provide non of the three arguments there is a set of default values assinged to them : currency: USD , order : market_cap_desc , pageIndex : 1
  
## coinList() 
List all supported coins id, name and symbol (no pagination required)

## priceOfCoins(coins,currency)

return a list of coins and their prices in the preffered currency.

The two arguments coins and currency must be of array type.
Meaning you can request multiple coins and their price in different currencies.

## supportedCurrencies()

List the all the currencies coinngeckoAPI v3 supports.
