import { stockMarket } from "../data/dataStocks.js";

export default function searchStock(userStockChoice) {
  let stockList = [];
  for (let i = 0; i < stockMarket.stocks.length; i++) {
    if (stockMarket.stocks[i].name === userStockChoice) {
      stockList.push(stockMarket.stocks[i]);
    } else if (stockMarket.stocks[i].id === userStockChoice) {
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
console.log(searchStock(`BrightFuture`));
