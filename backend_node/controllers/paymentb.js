const braintree = require("braintree");

const gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "spb93pmq25dnh8mj",
  publicKey: "2pgpbkmz497z759p",
  privateKey: "69aa3ae1271916dfbfc44f2a2b84cbd3",
});

// Generate a gateway token for payment
exports.getToken = (req, res) => {
  gateway.clientToken.generate({}, function (err, response) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(response);
    }
  });
};

// Process payment on receiving payment method details and amount
exports.processPayment = (req, res) => {
  const nonceFromTheClient = req.body.paymentMethodNonce;

  const amountFromTheClient = req.body.amount;
  gateway.transaction.sale(
    {
      amount: amountFromTheClient,
      paymentMethodNonce: nonceFromTheClient,

      options: {
        submitForSettlement: true,
      },
    },
    function (err, result) {
      if (err) {
        res.status(500).json(error);
      } else {
        res.json(result);
      }
    }
  );
};
