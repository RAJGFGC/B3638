const fs = require("fs/promises");

async function createFile() {
  try {
    await fs.writeFile(
      "orders.txt",
      "Order 1: Chicken Biryani\nOrder 2: Mutton Biryani\nOrder 3: Veg Biryani",
    );
    console.log("File created successfully.");
  } catch (error) {
    console.error("Error creating file:", error);
  }
}

async function appendToFile() {
  try {
    await fs.appendFile(
      "orders.txt",
      "\nOrder 4: Fish Biryani\nOrder 5: Prawn Biryani",
    );
    console.log("Data appended successfully.");
  } catch (error) {
    console.error("Error appending to file:", error);
  }
}

// createFile();

async function readFile() {
  try {
    const data = await fs.readFile("orders.txt", "utf-8");
    console.log("File content:\n", data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}
appendToFile();
readFile();
checkFileInfo();

async function checkFileInfo() {
  try {
    const stats = await fs.stat("orders.txt");
    console.log("File Information:");
    console.log("Size:", stats.size, "bytes");
    console.log("Created At:", stats.birthtime);
    console.log("Last Modified At:", stats.mtime);
  } catch (error) {
    console.error("Error checking file information:", error);
  }
}
