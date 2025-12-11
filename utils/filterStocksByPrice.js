import { stockMarket } from "../data/dataStocks.js";
export default function filterStocksByPrice(givenPrice, above) {
  let price = Number(givenPrice);
  let listOfPriceStocks = [];
  if (typeof price !== NaN) {
    for (let i = 0; i < stockMarket.stocks.length; i++) {
      if (above === "above") {
        if (stockMarket.stocks[i].currentPrice > givenPrice) {
          listOfPriceStocks.push(stockMarket.stocks[i]);
        }
      } else if (above === "below") {
        if (stockMarket.stocks[i].currentPrice < givenPrice) {
          listOfPriceStocks.push(stockMarket.stocks[i]);
        }
      } else {
        console.log("pls enter only above or below");
        break;
      }
    }
    return listOfPriceStocks;
  } else {
    console.log("pls enter price whit number only!");
  }
}
