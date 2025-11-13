import mongoose from "mongoose"
const products = [
	{
		title: "Korth DBMS Book",
		description: "DBMS book by korth",
		price: 1200,
		type: 'sale',
		category: 'textbook',
		department: "CSED",
		semester: "2nd sem",
		courseCode: "",
		condition: 'good',
		images: "./images/korth_dbms.jpg",
		location: "MBH Hostel",
	}
];

export default products;
