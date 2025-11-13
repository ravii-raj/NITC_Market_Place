import mongoose from "mongoose"

 function connectDB() {
	mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nitc-marketplace', {
	  useNewUrlParser: true,
	  useUnifiedTopology: true,
	})
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.error('MongoDB connection error:', err));
}

export default connectDB;

