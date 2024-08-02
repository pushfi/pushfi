import twilio from "twilio";

const sendFormSms = async (phone: any, id: any) => {
    const accountSid = process.env.ACCOUNT_S_ID;
    const authToken = process.env.TWILLIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);
    try {
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
        const message = await client.messages.create({
            body: `Click ${process.env.DOMAIN}/seek-funding/midas/${id} check the form`,
            from: process.env.SENDER, // Your Twilio phone number
            to: formatPhoneNumber(phone), // Recipient's phone number
        });
    } catch (error) {
        console.log(error);
    }
};

export default sendFormSms;
