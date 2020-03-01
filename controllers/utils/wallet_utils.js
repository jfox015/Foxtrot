const Wallet = require('../../models/Wallet');
const util = require('util');
/**
/	FOXTROT UTILS
*/
exports.walletTransaction = (type, address, coin, cost, amount, modStamp, _convertValue) => {
	
	return new Promise(function (fulfilled, rejected) {
		//console.log("***------------------------------------------****");
		//console.log("walletTransaction for " + address);
		if (amount <= 0) {
			rejected({error: "Transaction Rejected: Amount to be sent is 0 or less than 0" });
		} else{ 
			//console.log("Amount greater than 0");
			Wallet.findOne({ address: address }, function(err, wallet) {
		      if (err) {
		          //console.log("Wallet lookup error, err = ");
		          //console.log(err);
		          rejected({error: err });
		      } else {
				/*console.log("Wallet found, address = " + address);
				console.log(wallet._id.toHexString());
				console.log("Transaction Type = " + type);
				console.log("Pre-Transaction Balance = " + wallet.coinBalance);
				console.log("Amount for change = " + amount);
				console.log("cost = " + cost);*/

				var coinBalance = 0;
				if (type == "add") {
					coinBalance = (parseFloat(wallet.coinBalance) + parseFloat(amount));
				} else {
					coinBalance = (parseFloat(wallet.coinBalance) - (parseFloat(amount) + parseFloat(cost)));
					if (coinBalance < 0) 
						rejected({error: "Transaction Rejected: Amount being sent would result in a negative account balance." });
				}
	          	//console.log("Post-Modification coinBalance = " + coinBalance);
	          	var that = this;
	          	//console.log(_convertValue);
	          	_convertValue(coinBalance, wallet.coin, wallet.baseCurrency).then(
	          		function(convBalance) {
	          			//console.log("Converted Post-Transaction Currency Value = " + convBalance);
	          			Wallet.update({ _id: wallet._id }, { $set: { coinBalance: coinBalance, 
	          				balance: convBalance, lastModified: modStamp }}, function(err) {
	          				if (err) {
						        //console.log("Wallet update error, err = ");
						        //console.log(err);
						        that.rejected({error: err });
						    } else {
						        //console.log("Wallet Updated");
						        fulfilled();
						    }
	          			});
	          		}
				).catch(
				    function(err) {
				      
				      if (err) {
				      	//console.log("Wallet update error, err = ");
					 	//console.log(err);
				        that.rejected({error: err });
				      } else that.fulfilled();
				    }
				);
		      }
		    });
		}
	});
}