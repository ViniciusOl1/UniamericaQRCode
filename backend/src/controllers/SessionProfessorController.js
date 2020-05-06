const connection = require('../database/connection');
module.exports = {
    async create(req, res){
        const { email, password } = req.body;
        const professores = await connection('teachers')
            .where('email', email)
            .where('password', password)
            .select('fullname')
            .first();
            if(!professores){
                return res.status(400).json({error: 'Nenhum professor encontrado'});
            }
            return res.json(professores);
    }
}