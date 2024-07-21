import mongoose from "mongoose";
import colors from "colors"; // Import colors library

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI as string);
        console.log(`mongodb connected :${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
export default connectDB;
