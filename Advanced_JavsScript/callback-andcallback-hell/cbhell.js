// Create the Callback Hell
// 1. Get User
// 2. Get user orders
// 3. Get payment status

function getUser(callback) {
  setTimeout(function () {
    callback({ userId: 1, username: "john_doe" });
  }, 5000);
}

function getOrders(userId, callback) {
  setTimeout(function () {
    callback([{ orderId: 101, item: "Laptop" }]);
  }, 1000);
}

function getPaymentStatus(orderId, callback) {
  setTimeout(function () {
    callback({ status: "Paid" });
  }, 1000);
}

getUser(function (user) {
  getOrders(user.userId, function (orders) {
    getPaymentStatus(orders[0].orderId, function (paymentStatus) {
      console.log("User:", user);
      console.log("Orders:", orders);
      console.log("Payment Status:", paymentStatus);
    });
  });
});
