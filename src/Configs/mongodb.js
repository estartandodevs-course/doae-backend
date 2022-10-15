import mongoose from "mongoose";

const connectDatabase = async () => {
	await mongoose
		.connect(process.env.MONGO_URL + "retryWrites=true&w=majority", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log("MongoDB diz: o pai ta on"))
		.catch((error) => console.log(error));
};

export default connectDatabase;
