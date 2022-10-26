const transactions = require("./transaction");

class TransactionFactory {
  constructor() {}

  static creating(provider, args) {
    let transaction = transactions[provider];
    if (!transaction) throw new Error("" + provider);
    return new transaction(args);
  }
}

module.exports = TransactionFactory;