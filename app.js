import input from "analiza-sync";
import searchStock from "./utils/searchStock.js";
import filterStocksByPrice from "./utils/filterStocksByPrice.js";
import operateOnStock from "./marketLogic/OperateOnStock.js";
import { stockMarket } from "./data/dataStocks.js";
function app() {
  let flag = true;
  while (flag) {
    let userInput = input(`
1.) search for a stock by name or id

2.) Show all stocks above or below a given price

3.) Buy or sell a stock

exit to exit

enter your choice:`);
    if (userInput === "1") {
      let choice = input("enter name or id stock:");
      console.log(searchStock(choice));
      continue;
    } else if (userInput === "2") {
      let price = input("what price u want to filter by:");
      let choiceUser = input("choice above or below the price:");
      console.log(filterStocksByPrice(price, choiceUser));
      continue;
    } else if (userInput === "3") {
      let search = input("enter name or id stock u want to buy or sell:");
      let stock = searchStock(search);
      let buyOrSell = input("do u want buy or sell:");
      operateOnStock(buyOrSell, stock);
      for (let i = 0; i < stockMarket.stocks.length; i++) {
        if (stockMarket.stocks[i].id === stock[0].id) {
          console.log(`the change u made on the stock!`);
          console.log(stockMarket.stocks[i]);
          console.log(`---------------`);
        }
        if (stockMarket.stocks[i].category === stock[0].category) {
          console.log(stockMarket.stocks[i]);
        }
      }
    } else if (userInput === "exit") {
      flag = false;
    }
  }
}
app();
