import { RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";
import burnsData from "../../model/burns";
import twilio from "twilio";

const createData: RequestHandler = async (req, res) => {
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
        const response = await burnsData.create({
            ...req.body,
            fundindDataId: uniqueID,
        });

        const message = await client.messages.create({
            body: `${process.env.DOMAIN}/burn-funding-request/${response.fundindDataId}`,
            from: process.env.SENDER, // Your Twilio phone number
            to: req.body.phone, // Recipient's phone number
        });

        console.log(
            `${process.env.DOMAIN}/burn-funding-request/${response.fundindDataId}`
        );

        res.status(200).json(response);
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "internal error occured, please try again later",
        });
    }
};

export default createData;
