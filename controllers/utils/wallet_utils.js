const Wallet = require('../../models/Wallet');
const util = require('util');
/**
/	FOXTROT UTILS
*/
exports.walletTransaction = (type, address, coin, cost, amount, modStamp, _convertValue) => {
	
	return new Promise(function (fulfilled, rejected) {
		if (amount <= 0) {
			rejected({error: "Transaction Rejected: Amount to be sent is 0 or less than 0" });
		} else{ 
			Wallet.findOne({ address: address }, function(err, wallet) {
		      if (err) {
		          rejected({error: err });
		      } else {
				var coinBalance = 0;
				if (type == "add") {
					coinBalance = (parseFloat(wallet.coinBalance) + parseFloat(amount));
				} else {
					coinBalance = (parseFloat(wallet.coinBalance) - (parseFloat(amount) + parseFloat(cost)));
					if (coinBalance < 0) 
						rejected({error: "Transaction Rejected: Amount being sent would result in a negative account balance." });
				}
	          	var that = this;

	          	_convertValue(coinBalance, wallet.coin, wallet.baseCurrency).then(
	          		function(convBalance) {

	          			Wallet.update({ _id: wallet._id }, { $set: { coinBalance: coinBalance, 
	          				balance: convBalance, lastModified: modStamp }}, function(err) {
	          				if (err) {
						        that.rejected({error: err });
						    } else {
						        fulfilled();
						    }
	          			});
	          		}
				).catch(
				    function(err) {
				      if (err) {
				        that.rejected({error: err });
				      } else that.fulfilled();
				    }
				);
		      }
		    });
		}
	});
}