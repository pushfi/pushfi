import mongoose, { Document, Schema, Model } from "mongoose";

// Define the user schema
const userDataSchema = new Schema(
    {
        userDataId: { type: String },
        fundingRequest: { type: String },
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

// Define the interface for the User document
interface IUserData extends Document {
    userDataId: string;
    fundingRequest: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// Export the Mongoose model using both export default and module.exports
const userData: Model<IUserData> =
    mongoose.models.user ||
    mongoose.model<IUserData>("userData", userDataSchema);
export default userData;
module.exports = userData;
