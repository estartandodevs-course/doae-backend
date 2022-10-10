import mongoose from "mongoose";

const connectDatabase = () => {
	mongoose
		.connect(process.env.MONGO_URL + "retryWrites=true&w=majority", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log("MongoDB Atlas Connected"))
		.catch((error) => console.log(error));
};

export default connectDatabase;
