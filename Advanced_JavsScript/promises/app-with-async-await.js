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

async function processOrder() {
  try {
    const user = await getUser();
    console.log("User:", user);

    const orders = await getOrders(user.userId);
    console.log("Orders:", orders);

    const paymentStatus = await getPaymentStatus(orders[0].orderId);
    console.log("Payment Status:", paymentStatus);
  } catch (error) {
    console.error("Error processing order:", error);
  }
}
