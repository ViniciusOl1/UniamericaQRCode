const connection = require('../database/connection');
const moment = require('moment-timezone');

module.exports = {
    async index(req, res) {
        const data  = moment.tz("America/Sao_Paulo").format("DD-MM-YYYY");
        const alunos = await connection('frequency')
            .join('students', 'students.id', '=', 'frequency.student_id')
            .join('class', 'class.id', '=', 'frequency.class_id')
            .select([
                'frequency.student_id',
                'frequency.class_id',
                'students.fullname',
                'class.data'
            ]);
        return res.json(alunos);
    }
}