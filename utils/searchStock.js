import { stockMarket } from "../data/dataStocks.js";

export default function searchStock(identifier) {
  let stockList = [];
  for (let i = 0; i < stockMarket.stocks.length; i++) {
    if (stockMarket.stocks[i].name === identifier) {
      stockList.push(stockMarket.stocks[i]);
    } else if (stockMarket.stocks[i].id === identifier) {
      stockList.push(stockMarket.stocks[i]);
    }
  }
  if (stockList.length > 0) {
    return stockList;
  } else {
    console.log("not such name or id stock");

    return stockList;
  }
}
