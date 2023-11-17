const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'michele.schultz@ethereal.email',
        pass: 'XvEHSvSHDhaAr1YPXB'
    }
});

const sendemail = async (req, res) => {
    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <michele.schultz@ethereal.email>', // sender address
        to: "jarviz3333@gmail.com.com",// list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);
    res.json(info)
}
sendemail().catch(console.error);
module.exports = sendemail;