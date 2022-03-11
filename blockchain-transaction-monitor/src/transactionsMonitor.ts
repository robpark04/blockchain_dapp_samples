import { EventEmitter } from "events";
import { Logger } from "./utils";
import { ethers } from "ethers";

export class TransactionsMonitor extends EventEmitter {
  logger: Logger;
  rpcURL: string;
  provider: ethers.providers.JsonRpcProvider;
  accounts: string[];   // accounts to monitor

  constructor() {
    super();
    this.setMaxListeners(0);
    this.logger = new Logger();

    this.rpcURL = process.env.RPC_URL;
    // this.rpcURL = "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
  }

  async init() {
    this.provider = new ethers.providers.JsonRpcProvider(this.rpcURL);
  }

  async start() {
    await this.init();
    this.logger.log("info", "", "---TransactionMonitor start---")

    this.listen();
  }

  setAccounts(accounts: string[]) {
    this.accounts = accounts;
  }

  private async listen() {
    this.provider.on("block", async (blockNumber) => {
      console.log('----blockNumber:', blockNumber);
      const blockTransactions = await this.provider.getBlockWithTransactions(blockNumber);
      for (const transaction of blockTransactions.transactions) {
        if (this.accounts.includes(transaction.from)) {
          const balance = await this.provider.getBalance(transaction.from);
          this.emit("updatedAccount", transaction.from, balance);
        } else if (this.accounts.includes(transaction.to)) {
          const balance = await this.provider.getBalance(transaction.to);
          this.emit("updatedAccount", transaction.to, balance);
        }
      }
  })
  
  }
}
