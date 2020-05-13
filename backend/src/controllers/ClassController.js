const connection = require('../database/connection');
const moment = require('moment-timezone');
const cod = require('qr-image');
const fs = require('fs');
module.exports = {
    async index(req, res){
        const qrcode = await connection('class').select('*');
        return res.json(qrcode);
    },
    async create(req, res){
        const data  = moment.tz("America/Sao_Paulo").format("DD-MM-YYYY");
        const qr = cod.image(data, { type: 'svg' });
        qrcode = `./src/assets/qrcode/${data}.svg`;
        if (fs.existsSync(qrcode)){
            res.type('svg');
            qr.pipe(res);
        }else {
            await connection('class').insert({
                data,
                qrcode
            });
            qr.pipe(fs.createWriteStream(`./src/assets/qrcode/${data}.svg`));
            res.type('svg');
            qr.pipe(res);
        }   
    },
}