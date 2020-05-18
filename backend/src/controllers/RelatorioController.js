const connection = require('../database/connection');
const moment = require('moment-timezone');

module.exports = {
    async diario(req, res) {
        const data  = moment.tz("America/Sao_Paulo").format("DD-MM-YYYY");
        const alunos = await connection('frequency').orderBy('fullname', "DESC")
            .join('students', 'students.id', '=', 'frequency.student_id')
            .join('class', 'class.id', '=', 'frequency.class_id')
            .select([
                'frequency.student_id',
                'frequency.class_id',
                'students.fullname',
                'class.data'
            ])
            .where('data', data);
        return res.json(alunos);
    },
    async mensal(req, res) {
        const data  = moment.tz("America/Sao_Paulo").format("DD-MM-YYYY");
        const alunos = await connection('frequency').orderBy('fullname', "DESC")
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