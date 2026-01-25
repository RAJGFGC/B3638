function getUser() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ userId: 1, username: "john_doe" });
    }, 5000);
  });
}

function getOrders(userId) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve([{ orderId: 101, item: "Laptop" }]);
    }, 1000);
  });
}

function getPaymentStatus(orderId) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ status: "Paid" });
    }, 1000);
  });
}

console.log("=== PROMISE .then() VERSION ===");

getUser()
  .then(function (user) {
    console.log("User:", user);
    return getOrders(user.userId);
  })
  .then(function (orders) {
    console.log("Orders:", orders);
    return getPaymentStatus(orders[0].orderId);
  })
  .then(function (paymentStatus) {
    console.log("Payment Status:", paymentStatus);
  })
  .catch(function (error) {
    console.error("Error:", error);
  });
