const util = require('util');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const crypto = require('crypto');
var _ = require('lodash');

const Currency = require('../models/Currency');
const Coin = require('../models/Coin');
const Wallet = require('../models/Wallet');
const Blockchain = require('../models/Blockchain');
const Block = require('../models/Block');
const Transaction = require('../models/Transaction');
const User = require('../models/User');
const ExchangeTable = require('../models/ExchangeTable');

const walletUtils = require('./utils/wallet_utils');

/**
 * 
 * FOXTROT CONTROLLER
 *
 * This controller serves as the main app backend for Foxtrot. 
 *
 */
/*--------------------------------------------
/ GET TRANSACTIONS
/ GET query functions.
/-------------------------------------------*/
/**
 * GET WALLET
 * GET /api/:id/wallet/:coin
 * Load a specific users wallet by user Id and Coin type.
 */
exports.getWallet = (req, res, next) => {
  
  Wallet.findOne({ownerId: req.params.id, coin: req.params.coin}, function(err, wallet) {
      if (err) {
          console.log("getWallet  query error");
          res.status(500).send({status: 500, errors: err});
      } else {
        wallet = wallet || null;
        if (wallet != null) {
          if (typeof wallet.coinBalance === "undefined") {
            wallet.coinBalance = exports.convertValue(wallet.balance, wallet.baseCurrency, wallet.coin);
          }
          var message = req.params.message || "user wallet response";
          res.send({status:200, wallet: wallet, message: message});
        } else {
          var message = "No wallet found for " + req.params.coin + ", must create a wallet for this type";
          res.send({status:200, wallet: wallet, message: message});
        }
      }
  });
};

/**
 * GET CURRENCIES
 * GET /api/currencies
 * Load the list of available currencies (IRL currencies not digial coins).
 */
exports.getCurrencies = (req, res, next) => {
  
  Currency.find(function(err, currencies) {
    if (err) {
        res.status(500).send({status: 500, errors: err});
    } else {
        res.send({status:200, currencies: currencies});
    }
  });
};

/**
 * GET CURRENCY
 * GET /api/currency/:symbol
 * Load a specific currency by symbol
 */
exports.getCurrency = (req, res, next) => {
  
  Currency.find({ symbol: req.params.symbol}, function(err, currencies) {
    if (err) {
        res.status(500).send({status: 500, errors: err});
    } else {
        res.send({status:200, currencies: currencies[0]});
    }
  });
};

/**
 * GET EXCHANGE TABLE
 * GET /api/exchange/:symbol/:from
 * Load a specific currency by symbol
 */
exports.getExchangeTable = (req, res, next) => {
  
  ExchangeTable.findOne({ symbol: req.params.symbol, from: req.params.from }, function(err, xchange) {
    if (err) {
        res.status(500).send({status: 500, errors: err});
    } else {
        res.send({status:200, xchange: xchange});
    }
  });
};

/**
 * GET ALL EXCHANGE RATES
 * GET /api/exchangerates
 * Load all exchange rates
 */
exports.getAllExchangeRates = (req, res, next) => {
  
  var ratesList = require('../data/current_rates.json');
  res.send({status:200, rates: ratesList});

};
/**
 * GET EXCHANGE RATES
 * GET /api/exchangerates/:symbol
 * Load a specific currency by symbol
 */
exports.getExchangeRates = (req, res, next) => {
  
  var ratesList = require('../data/current_rates.json');
  var returnObj = {};
  //console.log(ratesList);
  for(var idx in ratesList) {
    var item = ratesList[idx];
    for(var key in item) {
      if (key === req.params.symbol) {
          returnObj = item[key];
          break;
      }
    }
  }
  res.send({status:200, rates: returnObj});

};

/**
 * GET EXCHANGE RATE FOR TARGET
 * GET /api/exchangerate/:symbol/:from
 * Loadd a specific exchange rate by from symbol and target currency/coin
 */
exports.getExchangeRate = (req, res, next) => {
  
  var ratesList = require('../data/current_rates.json');
  var returnObj = {};
  //console.log(ratesList);
  for(var idx in ratesList) {
    var item = ratesList[idx];
    for(var key in item) {
      if (key === req.params.symbol) {
        var rates = item[key];
        returnObj = rates[req.params.from];
          break;
      }
    }
  }
  res.send({status:200, rates: ratesList});

};

/**
 * GET COINS
 * GET /api/coins
 * Load list of digital coins
 */
exports.getCoins = (req, res, next) => {
  
  Coin.find(function(err, coins) {
    if (err) {
        res.status(500).send({status: 500, errors: err});
    } else {
        res.send({status:200, coins: coins});
    }
  });
};

/**
 * GET TRANSACTIONS
 * GET /api/:id/transactions/:currency
 * Load list of transaction by user and coin type
 */
exports.getTransactions = (req, res, next) => {

  Transaction.find({ownerAddress: req.params.address}, function(err, transactions) {
      if (err) {
          res.status(500).send({status: 500, errors: err});
      } else {
          res.send({status:200, transactions: transactions});
      }
  });
}

/**
 * GET BLOCKCHAIN
 * GET /api/blockchain
 * Load the current blockchain
 */
exports.getBlockChain = (req, res, next) => {
  Blockchain.find(function(err, chain) {
      if (err) {
          res.status(500).send({status: 500, errors: err});
      } else {
          res.send({status:200, chain: chain});
      }
  });
}

/**
 * GET BALANCE
 * GET /api/:id/wallet/balance/:coin
 * Load the current balnace of a specific users wallet by userId and coin
 */
exports.getBalance = (req, res, next) => {
  Wallet.findOne({ownerId: req.params.id, coin: req.params.coin}, function(err, wallet) {
      if (err) {
          res.status(500).send({status: 500, errors: err});
      } else {
        wallet = wallet || null;
        //console.log("wallet = ");
        //console.log(wallet);
        if (wallet != null) {
          if (typeof wallet.coinBalance === "undefined") {
            wallet.coinBalance = exports.convertValue(wallet.balance, wallet.baseCurrency, wallet.coin);
          }
          var message = req.params.message || "user balance response";
          res.send({status:200, balance: wallet.coinBalance, message: message});
        } else {
          res.status(500).send({status: 500, errors: "No wallet was found"});
        }
      }
  });
}
/**
 * GET PORTFOLIO
 * GET /api/:id/portfolio
 * Returns a snapshot of all the users current wallets
 *
 */
exports.getPortfolio = (req, res, next) => {
  Wallet.find({ownerId: req.params.id}, function(err, wallets) {
      if (err) {
          res.status(500).send({status: 500, errors: err});
      } else {
        wallets = wallets || null;
        if (wallets != null) {
          var sum = 0, walletsArr = [];
          _.each(wallets, function(wallet) {
            if (typeof wallet.coinBalance === "undefined") {
              wallet.coinBalance = exports.convertValue(wallet.balance, wallet.baseCurrency, wallet.coin);
            }
            sum = parseFloat(sum) + parseFloat(wallet.balance);
            walletsArr.push({ value: wallet.balance, baseCurrency: wallet.baseCurrency, name: wallet.coin, 
                              balance: wallet.coinBalance, address: wallet.address 
            });
          }, this);
          var message = req.params.message || "User portfolio response";
          res.send({status:200, portfolio: {wallets: walletsArr, sum: sum }, message: message});
        } else {
          res.status(500).send({status: 500, errors: "No wallets were found"});
        }
      }
  });


}

/*--------------------------------------------
/ POST TRANSACTIONS
/ POST based function that accept data input,
/ perform a function and return data to the 
/ UI app.
/-------------------------------------------*/
/**
 * GET /api/create
 * Creates a new wallet for the passed user id for the selected currency type
 *
 */
exports.createWallet = (req, res, next) => {
  
  req.assert('amount', 'Inital wallet amount cannot be blank').notEmpty();
  req.assert('source', 'Funding source cannot be blank').notEmpty();
  const errors = req.validationErrors();

  if (errors) {
    res.status(500).send({status: 500, errors: errors});
  } else {
    Wallet.findOne({ ownerId: req.params.id, coin: req.params.coin }, (err, existingWallet) => {
      if (err) { 
        res.status(301).send({ errors: err}); 
      } else if (existingWallet) {
        res.status(301).send({ errors: "A wallet for this coin already exists for this account."});
      } else {
        
        User.findOne({ _id: req.params.id }, (err, user) => {
          if (err) {
            res.status(500).send({status: 500, errors: err});
          } else {
            var now = new Date();
            console.log("createWallet, req.body.amount = " + req.body.amount);
            
            exports._convertValue(req.body.amount, user.baseCurrency, req.params.coin).then(
              function(coinBalance){ 
                if (typeof coinBalance == 'Object') {
                  res.status(500).send({status: 500, errors: coinBalance});
                } else {
                  var hash = crypto.randomBytes(16).toString('hex').substr(0,24);
                  var wal = new Wallet({
                    ownerId: req.params.id,
                    baseCurrency: user.baseCurrency,
                    balance: req.body.amount,
                    coin: req.params.coin,
                    coinBalance: coinBalance,
                    status: "active",
                    address: hash,
                    dateCreated: now.toUTCString(),
                    lastModified: now.toUTCString(),
                    lastModifiedBy: req.params.id
                  });
                  wal.save((err) => {
                    if (err) { 
                      res.status(301).send({ errors: err}); 
                    } else {
                      req.params.message = "Wallet created successfully";
                      return exports.getWallet(req, res, next);
                    }
                  });
                }
            });
          }
        });  
      }
    });
  }
}
/**
 * POST /api/transactions/post
 * Executes a transfer of coin between two types and the users seperate wallets
 *
 */
exports.sendCoin = (req, res, next) => {

  /* 
      STEPS:
      [Assumptions] - Front End has verified user has amount being sent in wallet account
      1. Verify recipient and account active
      2. Deduct sent amount from senders wallet
      3. [FUTURE] Post to blockchain network (Foxex)
      4. [FUTURE] Post to user account with Pending status
      5. Post final amount to recipient wallet with blockhain trans ID
        5a. [Current State] - Post to recipent account with made up trans ID hash
      6. Post to Transaction Log
        6a.  Log sender sent tranaction
        6b.  Log recipient receive transaction
  */
  var transStack = []; // Stack for rollback proceedure
  exports._verifyRecipient(req.body.to).then(
    function(recipientOwnerId) {
      
      var date = new Date();
      var hash = crypto.randomBytes(16).toString('hex').substr(0,24);
                 
      walletUtils.walletTransaction("remove", req.body.from, req.params.coin, req.body.coinCost, req.body.coinAmount, date.toUTCString(), exports._convertValue).then(
        function() {
          //transStack.push({ model: "wallet", field: "ownerId", id: req.params.id, type: "add", amount: (parseFloat(req.body.coinAmount) + parseFloat(req.body.coinCost))});
           walletUtils.walletTransaction("add", req.body.to, req.params.coin, 0, req.body.coinAmount, date.toUTCString(), exports._convertValue).then(
            function() {
              //transStack.push({ model: "wallet", field: "ownerId", id: recipientOwnerId, type: "remove", amount: (parseFloatreq.body.coinAmount)});
              var transObj = {
                type: 'send',
                timestamp: date.toUTCString(),
                date: date.toUTCString(),
                ownerAddress: req.body.from,
                thirdPartyAddress: req.body.to,
                signature: req.body.signature,
                coin: req.params.symbol,
                amount: req.body.coinAmount,
                hash: hash,
                status: 'pending',
                cost: req.body.cost, 
                coinCost: req.body.coinCost
              }

              exports._postTransaction(transObj).then(
                function(trans) {
                  //transStack.push({ model: "transaction", field: "_id", id: trans._id, type: "new"});
                  hash = crypto.randomBytes(16).toString('hex').substr(0,24);
                  var transObj2 = {
                    type: 'receive',
                    timestamp: date.toUTCString(),
                    date: date.toUTCString(),
                    ownerAddress: req.body.to,
                    thirdPartyAddress: req.body.from,
                    signature: req.body.signature,
                    coin: req.params.symbol,
                    amount: req.body.coinAmount,
                    hash: hash,
                    status: 'pending',
                    cost: 0,
                    coinCost: 0
                  }
                  exports._postTransaction(transObj2).then(
                    function(trans) {
                       //transStack.push({ model: "transaction", field: "_id", id: trans._id, type: "new"});
                       res.send({status:200, message: "Transaction completed successfully"});
                    }
                  ).catch(
                    function(err) {
                      res.status(500).send({ errors: err});
                    }
                  );
                }
              ).catch(
                function(err) {
                  res.status(500).send({ errors: err});
                }
              );
            }
          ).catch(
            function(err) {
              res.status(500).send({ errors: err});
            }
          );
        }
      ).catch(
        function(err) {
          res.status(500).send({ errors: err});
        }
      );
    }
  ).catch(
    function(err) {
      res.status(500).send({ errors: err});
    }
  );
}
/**
 *    EXCHANGE COIN 
 *    POST /api/exchange/post/
 *    Executes a transfer of coin between two types and the users seperate wallets
 *
 */
exports.exchangeCoin = (req, res, next) => {
/* 
      STEPS:
      [Assumptions] - Front End has verified user has amount being sent in wallet account
      1. Deduct sent amount from senders wallet
      2. [FUTURE] Post to blockchain network (Foxex)
      3. [FUTURE] Post to user account with Pending status
      4. Post final amount to recipient wallet with blockhain trans ID
        54a. [Current State] - Post to recipent account with made up trans ID hash
      5. Post to Transaction Log
        5a.  Log removed tranaction
        5b.  Log new coin added transaction
  */
  var transStack = []; // Stack for rollback proceedure

  var date = new Date();
  var hash = crypto.randomBytes(16).toString('hex').substr(0,24);
  var that = this;
  console.log("Beginning exchangeCoin operations.");

  exports._convertValue(req.body.coinAmount, req.body.coinFrom, req.body.coinTo).then(
    function(convAmount) {
      
      walletUtils.walletTransaction("remove", req.body.addressFrom, req.params.coinFrom, req.body.coinCost, req.body.coinAmount, date.toUTCString(), exports._convertValue).then(
      function() {
        //transStack.push({ model: "wallet", field: "ownerId", id: req.params.id, type: "add", amount: (parseFloat(req.body.coinAmount) + parseFloat(req.body.coinCost))});
         walletUtils.walletTransaction("add", req.body.addressTo, req.params.coinTo, 0, convAmount, date.toUTCString(), exports._convertValue).then(
          function() {
            //transStack.push({ model: "wallet", field: "ownerId", id: recipientOwnerId, type: "remove", amount: (parseFloatreq.body.coinAmount)});
            var transObj = {
              type: 'exchngeOut',
              timestamp: date.toUTCString(),
              date: date.toUTCString(),
              ownerAddress: req.body.addressFrom,
              thirdPartyAddress: req.body.addressTo,
              signature: req.body.signature,
              coin: req.params.coinFrom,
              amount: (parseFloat(req.body.coinAmount) + parseFloat(req.body.coinCost)),
              hash: hash,
              status: 'pending',
              cost: req.body.cost, 
              coinCost: req.body.coinCost
            }

            exports._postTransaction(transObj).then(
              function(trans) {
                //transStack.push({ model: "transaction", field: "_id", id: trans._id, type: "new"});
                hash = crypto.randomBytes(16).toString('hex').substr(0,24);
                var transObj2 = {
                  type: 'exchngeIn',
                  timestamp: date.toUTCString(),
                  date: date.toUTCString(),
                  ownerAddress: req.body.addressTo,
                  thirdPartyAddress: req.body.addressFrom,
                  signature: req.body.signature,
                  coin: req.params.coinTo,
                  amount: convAmount,
                  hash: hash,
                  status: 'pending',
                  cost: 0,
                  coinCost: 0
                }
                exports._postTransaction(transObj2).then(
                  function(trans) {
                     //transStack.push({ model: "transaction", field: "_id", id: trans._id, type: "new"});
                     res.send({status:200, message: "Transaction completed successfully"});
                  }
                ).catch(
                  function(err) {
                    res.status(500).send({ errors: err});
                  }
                );
              }
            ).catch(
              function(err) {
                res.status(500).send({ errors: err});
              }
            );
          }
        ).catch(
          function(err) {
            res.status(500).send({ errors: err});
          }
        );
      }
      ).catch(
        function(err) {
          res.status(500).send({ errors: err});
        }
      );
    } 
  ).catch(
    function(err) {
      res.status(500).send({ errors: err});
    }
  );
}

exports.verifyTransaction = (req, res, next) => {

}

/*--------------------------------------------
/ UNTILITY FUNCTIONS
/ Functions that perform a specific function
/ within the app
/-------------------------------------------*/
exports._verifyRecipient = (address) => {

  return new Promise(function (fulfilled, rejected) {
    Wallet.findOne({ address: address }, (err, wallet) => {
      if (err) {
        rejected({error: "Recipient not found!" });
      } else {
        if (wallet === null || (wallet !== null && wallet.status !== "active")) {
          rejected({error: "Recipient account is not currently active and available to receive coins!" });
        } else {
          fulfilled(wallet.ownerId);
        }
      }
    });
  });
}


exports._postTransaction = (transObj) => {

  return new Promise(function (fulfilled, rejected) {
    var trans = new Transaction(transObj);
    trans.save((err, trans) => {
      if (err) { 
        rejected({error: err });
      } else {
        fulfilled(trans);
      }
    });
  });
}

exports._convertValue = (balance, cFrom, cTo, parfulfilled = null, parrejected = null) => {

  return new Promise(function (fulfilled, rejected) {
    
    var ratesList = require('../data/current_rates.json');
    var convrate = null;
    for(var idx in ratesList) {
      var item = ratesList[idx];
      for(var key in item) {
        if (key === cTo) {
          var rates = item[key];
          convrate = rates[cFrom];
            break;
        }
      }
    }
    
    var conversion = (balance / parseFloat(convrate));
    if (isNaN(conversion)) conversion = 0;
    fulfilled(conversion, parfulfilled, parrejected );
  });
}
/**
 * GET /api/seed
 * A call to populate the database with a base amount of info
 *
 */
exports.seed = (req, res, next) => {

  // CURRENCIES
  // Test if current user has a wallet. if not, create one
  Currency.find(function(err, currencies) {
      if (err) {
          res.status(500).send({status: 500, errors: err});
      } else {
          if (!currencies || currencies.length == 0) {
            var now = new Date();
            Currency.create({
              _id: new mongoose.Types.ObjectId(),
              name: 'US Dollar',
              symbol: 'usd',
              char: '$',
              charCode: '$',
              lastModified: now.toUTCString(),
              dateCreated: now.toUTCString()
            },{
              _id: new mongoose.Types.ObjectId(),
              name: 'Euro',
              symbol: 'eur',
              char: '€',
              charCode: '&euro;',
              lastModified: now.toUTCString(),
              dateCreated: now.toUTCString()
            },function (err) {
              if (err) {
                  res.status(500).send({status: 500, errors: err});
              } else {
                  exports.addCoins(req, res, next);
              }
            });
          } else {
            exports.addCoins(req, res, next);
          }
      }
  });
}
// COINS
  // Test if current user has a wallet. if not, create one.
exports.addCoins = (req, res, next) => {
  var now = new Date();
  Coin.create({
    _id: new mongoose.Types.ObjectId(),
    name: 'fcs',
    symbol: 'fcs',
    coinName: 'FoxyCash',
    fullName: "FoxyCash (FCS)",
    algorithm: 'SHA-256',
    proofType: 'Proof-of-work',
    lastModified: now.toUTCString(),
    dateCreated: now.toUTCString()
  },{
    _id: new mongoose.Types.ObjectId(),
    name: 'btc',
    symbol: 'btc',
    coinName: 'Bitcoin',
    fullName: "Bitcoin (BTC)",
    algorithm: 'SHA-256d',
    proofType: 'Proof-of-work',
    lastModified: now.toUTCString(),
    dateCreated: now.toUTCString()
  },{
    _id: new mongoose.Types.ObjectId(),
    name: 'eth',
    symbol: 'eth',
    coinName: 'Ethereum',
    fullName: "Ethereum (ETH)",
    algorithm: 'Ethash',
    proofType: 'Proof-of-work',
    lastModified: now.toUTCString(),
    dateCreated: now.toUTCString()
  },{
    _id: new mongoose.Types.ObjectId(),
    name: 'xrp',
    symbol: 'xrp',
    coinName: 'Ripple',
    fullName: "Ripple (XRP)",
    algorithm: 'ECDSA',
    proofType: 'Consensus',
    lastModified: now.toUTCString(),
    dateCreated: now.toUTCString()
  },{
    _id: new mongoose.Types.ObjectId(),
    name: 'ltc',
    symbol: 'ltc',
    coinName: 'Litecoin',
    fullName: "Litecoin (LTC)",
    algorithm: 'Scrypt',
    proofType: 'Proof-of-work',
    lastModified: now.toUTCString(),
    dateCreated: now.toUTCString()
  }/*,{
    _id: new mongoose.Types.ObjectId(),
    name: 'bch',
    symbol: 'bch',
    coinName: 'Bitcoin Cash',
    fullName: "Bitcoin Cash (BCH)",
    algorithm: 'SHA-256d',
    proofType: 'Proof-of-work',
    lastModified: now.toUTCString(),
    dateCreated: now.toUTCString()
  },{
    _id: new mongoose.Types.ObjectId(),
    name: 'eos',
    symbol: 'eos',
    coinName: 'EOS.IO',
    fullName: "EOS.IO (EOS)",
    algorithm: 'Scrypt',
    proofType: 'Proof-of-stake',
    lastModified: now.toUTCString(),
    dateCreated: now.toUTCString()
  },{
    _id: new mongoose.Types.ObjectId(),
    name: 'dash',
    symbol: 'dash',
    coinName: 'Dash',
    fullName: "Dash (DASH)",
    algorithm: 'X11',
    proofType: 'Proof-of-work',
    lastModified: now.toUTCString(),
    dateCreated: now.toUTCString()
  }*/, function (err) {
    if (err) {
        res.status(500).send({status: 500, errors: err});
    } else {
        //exports.addExchangeTable(req, res, next);
        res.send({status:200, message: 'All seed values added successfully.'});
    }
  });
}

// TRANSACTIONS
// Test if theere are any transactions yet. If not, create a set

// BLOCKCHAIN
// Test if the blockchain has data stored. if not, create some