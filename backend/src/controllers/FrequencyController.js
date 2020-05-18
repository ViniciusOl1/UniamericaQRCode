const connection = require('../database/connection');
const moment = require('moment-timezone');

module.exports = {
    async index(req, res) {
        const data = moment.tz("America/Sao_Paulo").format("DD-MM-YYYY");
        const alunos = await connection('frequency')
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
    async create(req, res) {
        const { data, studentId } = req.body;
        const resp = await connection('class')
            .select('id')
            .where('data', data)
            .first();
        const exists = await connection('frequency')
            .where("student_id", studentId)
            .where("class_id", resp.id)
            .select('*')
            .first();
        if (!exists) {
            const frequency = await connection('frequency').insert({
                "student_id": studentId,
                "class_id": resp.id
            });
            return res.json(frequency);
        } else {
            return res.status(400).json({ error: 'Presença já realizada' });
        }

    },
}