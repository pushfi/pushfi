import nodemailer from "nodemailer";
const sendFormEmail = async (email: any, id: any) => {
    try {
        // sendemail
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            service: "Gmail",
            port: 465,
            secure: true, // Use SSL/TLS
            auth: {
                user: "foreveraluku@gmail.com",
                pass: "qmcg wpbn pbxf bwij", // Use your email account's password
            },
        });
        const mailOptions = {
            from: "foreveraluku@gmail.com",
            to: email,
            subject: "pushfi form request",
            html: `
            <!DOCTYPE html>
            <html>
                <head>
                    <title>pushfi form request</title>
                </head>
                <body style="font-family: sans-serif">
                <a href="${process.env.DOMAIN}/seek-funding/midas/${id}">please click to check the form</a>
                </body>
            </html>
            
            `,
        };
        await new Promise((resolve, reject) => {
            transporter.sendMail(
                mailOptions,
                function (error: any, info: unknown) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(info);
                    }
                }
            );
        });
    } catch (error) {
        return error;
    }
};

export default sendFormEmail;
