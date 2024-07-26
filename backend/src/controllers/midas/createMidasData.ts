import { RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";
import twilio from "twilio";
import midasData from "../../model/midas";

const createMidasData: RequestHandler = async (req, res) => {
    console.log(req.body);
    const accountSid = process.env.ACCOUNT_S_ID;
    const authToken = process.env.TWILLIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);
    try {
        const requiredFields = [
            "name",
            "tMinRange",
            "tMaxRange",
            "tInterest",
            "cMinRange",
            "cMaxRange",
            "cInterest",
            "UnsecuredDebtBalance",
            "revolvingDebtBalance",
            "revolvingAccounts",
            "totalMonthlyPayments",
            "phone",
        ];
        for (const field of requiredFields) {
            if (!req.body[field]) {
                return res.status(400).json({
                    message: `${field} is a required field.`,
                });
            }
        }
        const uniqueID = uuidv4();
        const formatPhoneNumber = (phoneNumber: string): string => {
            const cleanedNumber = phoneNumber.replace(/\D/g, "");

            if (cleanedNumber.startsWith("1")) {
                return `+${cleanedNumber}`;
            }

            if (cleanedNumber.length === 10) {
                return `+1${cleanedNumber}`;
            }

            return phoneNumber; // Return original if not a valid US format
        };

        const response = await midasData.create({
            ...req.body,
            number: formatPhoneNumber(req.body.phone),
            fundindDataId: uniqueID,
        });

        const message = await client.messages.create({
            body: `Dear ${req.body.name}, Your results from Burns Funding are now available. Please visit ${process.env.DOMAIN}/midas-funding/${response.fundindDataId} for details. Reply STOP to end`,
            from: process.env.SENDER, // Your Twilio phone number
            to: formatPhoneNumber(req.body.phone), // Recipient's phone number
        });

        res.status(200).json(response);
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "internal error occured, please try again later",
        });
    }
};

export default createMidasData;
