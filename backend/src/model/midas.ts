import mongoose, { Document, Schema, Model } from "mongoose";

// Define the user schema
const midasDataSchema = new Schema(
    {
        email: { type: String },
        name: { type: String },
        fundindDataId: { type: String },
        tMinRange: { type: String },
        tMaxRange: { type: String },
        tInterest: { type: String },
        cMinRange: { type: String },
        cMaxRange: { type: String },
        cInterest: { type: String },
        transUnion: { type: String },
        UnsecuredDebtBalance: { type: String },
        revolvingDebtBalance: { type: String },
        revolvingAccounts: { type: String },
        totalMonthlyPayments: { type: String },
        phone: { type: String },
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

// Define the interface for the User document
interface IMidasData extends Document {
    fundindDataId: string;
    email: string;
    name: string;
    tMinRange: string;
    tMaxRange: string;
    tInterest: string;
    cMinRange: string;
    cMaxRange: string;
    cInterest: string;
    transUnion: string;
    UnsecuredDebtBalance: string;
    revolvingDebtBalance: string;
    revolvingAccounts: string;
    totalMonthlyPayments: string;
    phone: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// Export the Mongoose model using both export default and module.exports
const midasData: Model<IMidasData> =
    mongoose.models.user ||
    mongoose.model<IMidasData>("midasData", midasDataSchema);
export default midasData;
module.exports = midasData;
