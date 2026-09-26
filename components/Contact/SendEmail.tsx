import type { SyntheticEvent } from 'react'

const sendEmail = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const title = formData.get("title");
    const message = formData.get("message");

    const phoneNumber = "201024400646";

    const whatsappMessage = `*رسالة جديدة من الموقع الشخصي*\n\n*الاسم:* ${name}\n*البريد:* ${email}\n*الموضوع:* ${title}\n*الرسالة:* ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
};

export default sendEmail;