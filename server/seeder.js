import mongoose from "mongoose";
import dotenv from "dotenv";
import products from "./data/products.js"
import Product from "./models/Item.js"
import connectDB from "./config/db.js"
dotenv.config();
connectDB();

const importData = async () => {
	try {
		await Product.deleteMany(); // clears old data 
		await Product.insertMany(products); // adds mock data
		console.log("Moch data Imported!");
		process.exit();
	} catch (error) {
		console.error(`${error}`);
		process.exit(1);
	}
};

importData();
