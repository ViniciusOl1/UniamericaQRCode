const connection = require('../database/connection');
module.exports = {
    async index(req, res) {
        const { id } = req.params;
        if (id) {
            const professor = await connection('teachers').select('*')
                .where('id', id).first();
            return res.json(professor);
        } else {
            const professores = await connection('teachers').select('*');
            return res.json(professores);
        }
    },
    async create(req, res) {
        const { fullname, email, password } = req.body;
        await connection('teachers').insert({
            fullname,
            email,
            password
        });
        return res.json({ fullname, email, password });
    },
    async update(req, res) {
        const { id } = req.params;
        const { fullname, email, password } = req.body;
        const professores = await connection('teachers')
            .where('id', id)
            .first();

        const update = await connection('teachers').update({
            fullname,
            email,
            password
        }).where('id', id);
        return res.json({ fullname, email, password });
    },
    async delete(req, res) {
        const { id } = req.params;
        const professores = await connection('teachers')
            .where('id', id)
            .first();

        await connection('teachers').where('id', id).delete();

        return res.status(204).send();
    }
}