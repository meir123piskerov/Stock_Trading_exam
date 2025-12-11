import searchStock from "../utils/searchStock.js";
import input from "analiza-sync";

import { stockMarket } from "../data/dataStocks.js";
let stock = searchStock("BrightFuture");

export default function operateOnStock(operation, identifier) {
  if (operation === "buy" && identifier.length > 0) {
    let userChoice = input("how many stocks u want to buy");
    for (let i = 0; i < stockMarket.stocks.length; i++) {
      if (stockMarket.stocks[i].id === identifier[0].id) {
        stockMarket.stocks[i].previousPrices.push(
          stockMarket.stocks[i].currentPrice
        );
        stockMarket.stocks[i].currentPrice =
          stockMarket.stocks[i].currentPrice +
          stockMarket.stocks[i].currentPrice * 0.05;
        stockMarket.stocks[i].availableStocks -= Number(userChoice);
      }
    }
    for (let i = 0; i < stockMarket.stocks.length; i++) {
      if (
        stockMarket.stocks[i].category === identifier[0].category &&
        stockMarket.stocks[i] !== identifier[0]
      ) {
        stockMarket.stocks[i].previousPrices.push(
          stockMarket.stocks[i].currentPrice
        );
        stockMarket.stocks[i].currentPrice =
          stockMarket.stocks[i].currentPrice +
          stockMarket.stocks[i].currentPrice * 0.01;
      }
    }
  } else if (operation === "sell" && identifier.length > 0) {
    let userChoice = input("how many stocks u want to sell");
    for (let i = 0; i < stockMarket.stocks.length; i++) {
      if (stockMarket.stocks[i].id === identifier[0].id) {
        stockMarket.stocks[i].previousPrices.push(
          stockMarket.stocks[i].currentPrice
        );
        stockMarket.stocks[i].currentPrice =
          stockMarket.stocks[i].currentPrice -
          stockMarket.stocks[i].currentPrice * 0.05;
        stockMarket.stocks[i].availableStocks -= Number(userChoice);
      }
    }
    for (let i = 0; i < stockMarket.stocks.length; i++) {
      if (
        stockMarket.stocks[i].category === identifier[0].category &&
        stockMarket.stocks[i] !== identifier[0]
      ) {
        stockMarket.stocks[i].previousPrices.push(
          stockMarket.stocks[i].currentPrice
        );
        stockMarket.stocks[i].currentPrice =
          stockMarket.stocks[i].currentPrice -
          stockMarket.stocks[i].currentPrice * 0.01;
      }
    }
  } else if (identifier.length === 0) {
    console.log(`unknown identifiers`);
  } else {
    console.log(`invalid operations`);
  }
}
