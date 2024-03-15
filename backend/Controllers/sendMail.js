import nodemailer from 'nodemailer'; 

const senderMail = "riyaarora202003@gmail.com"; 

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: senderMail,
        pass: "vjdk nkfi hnbv ouxi"
    }
})

export default function sendMail(req, res) {
    const { receiverMail } = req.body; 

    const mail = {
        from: senderMail,
        to: receiverMail,
        subject: "Marks updated",
        html: `
            <h1>EVALUATION UPDATE</h1>
            <br />
            <p>Dear student, your marks have been updated</p>
        `
    }
    transport.sendMail(mail); 
    res.send("MAIL SENT"); 
}