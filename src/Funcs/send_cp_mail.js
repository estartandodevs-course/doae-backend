import { generate_coupon } from "./integration_coupon.js"
import { mailto } from "../Libs/mailto.js";

export async function sendCPmail(mail, value){
    const coupon = await generate_coupon(mail, value);
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
            <h1>Seu cupom chegou!!</h1>
            <p>Como promeitdo, aqui está seu cupom, para usar nas lojas parceiras.</p>
            <p>${coupon.name}</p>
            <p>Use esse mesmo email no momento da compra para validar o cupom =)</p>
        </body>
        </html>`;
    const text =` Seu cupom chegou!! Como promeitdo, aqui está seu cupom, para usar nas lojas parceiras. ${coupon.name}. Use esse mesmo email no momento da compra para validar o cupom =)`;
    try {
        const mailSend = await mailto('', mail, html, text);
        return mailSend;
    } catch (e) {
        console.log(e);
        throw new Error('Não foi possível enviar o cupom;')
    }
}