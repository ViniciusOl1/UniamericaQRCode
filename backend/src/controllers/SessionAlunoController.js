const connection = require('../database/connection');
module.exports = {
    async create(req, res){
        const { ra, password } = req.body;
        const alunos = await connection('students')
            .where('ra', ra)
            .where('password', password)
            .select('*')
            .first();
            if(!alunos){
                return res.status(400).json({error: 'Nenhum aluno encontrado'});
            }
            return res.json(alunos);
    }
}