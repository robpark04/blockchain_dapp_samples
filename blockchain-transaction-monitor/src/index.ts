import { TransactionsMonitor } from "./transactionsMonitor";

const transactionsMonitor = new TransactionsMonitor();

async function startMonitor() {
  const accounts = [""];
  transactionsMonitor.setAccounts(accounts);
  transactionsMonitor.start();
 
  transactionsMonitor.on("updatedAccount", (account, balance) => {
    console.log('-----updatedAccount:', account, balance);
  })
}

startMonitor();
