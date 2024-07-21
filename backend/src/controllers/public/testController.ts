import { RequestHandler } from "express";
import twilio from "twilio";
const testController: RequestHandler = async (req, res) => {
    const accountSid = process.env.ACCOUNT_S_ID;
    const authToken = process.env.TWILLIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);
    try {
        const message = await client.messages.create({
            body: "Hi there",
            from: process.env.SENDER, // Your Twilio phone number
            to: "+254769301113", // Recipient's phone number
        });
        console.log(`Message sent with SID: ${message.sid}`);

        res.status(200).json({ message: message.sid });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};

export default testController;
