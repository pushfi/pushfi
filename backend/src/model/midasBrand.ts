import mongoose, { Document, Schema, Model } from "mongoose";

// Define the user schema
const midasBrandSchema = new Schema(
    {
        brandId: { type: String },
        email: { type: String },
        phone: { type: String },
        fName: { type: String },
        lName: { type: String },
        cName: { type: String },
        wUrl: { type: String },
        accountInfo: { type: String },
        brandingType: { type: String },
        fullName: { type: String },
        terms: { type: String },
        logoimage: { type: String },
        w9image: { type: String },
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

// Define the interface for the User document
interface IMidasBrand extends Document {
    brandId: string;
    email: string;
    phone: string;
    fName: string;
    lName: string;
    cName: string;
    wUrl: string;
    accountInfo: string;
    brandingType: string;
    fullName: string;
    terms: string;
    logoimage: string;
    w9image: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// Export the Mongoose model using both export default and module.exports
const midasBrand: Model<IMidasBrand> =
    mongoose.models.user ||
    mongoose.model<IMidasBrand>("midasBrand", midasBrandSchema);
export default midasBrand;
module.exports = midasBrand;
