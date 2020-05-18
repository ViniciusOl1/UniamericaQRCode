const connection = require('../database/connection');
const multer = require("multer");
const upImage = multer({ dest:'./tmp/uploads'})

module.exports = {
    async index(req, res) {
        const { id } = req.params;
        if (id) {
            const alunos = await connection('students').select('*')
                .where('id', id).first();
            return res.json(alunos);
        } else {
            const alunos = await connection('students').select('*');
            return res.json(alunos);
        }
    },
    async create(req, res) {
        const { fullname, ra, email, password } = req.body;

        const student = await connection('students')
            .where('ra', ra)
            .select('*')
            .first();
        if (!student) {
            await connection('students').insert({
                fullname,
                ra,
                email,
                password
            });
            return res.json({ fullname, ra, email, password });
        } else {
            return res.status(400).json({ error: 'Aluno com RA já cadastrado' });
        }

    },
    async update(req, res) {
        upImage.single('pictures'), (req, res) =>{
            const {pictures} = req.body//Se não der certo tentar tirar o .body 
            if (pictures){
                return res.json({filename});
            }else {
                error:"erro";
            }
        }
        const { id } = req.params;
        const { fullname, ra, email, password } = req.body;
        const alunos = await connection('students')
            .where('id', id)
            .first();

        const update = await connection('students').update({
            fullname,
            ra,
            email,
            password
        }).where('id', id);
        return res.json({ fullname, ra, email, password });
    },
    async delete(req, res) {
        const { id } = req.params;
        const alunos = await connection('students')
            .where('id', id)
            .first();

        await connection('students').where('id', id).delete();

        return res.status(204).send();
    },
    async uploadimage(req, res) {
        const upload = upImage.single('pictures');
        if (upload) {
            return res.send("Deu certo");
        }else {
            return res.send("Error uploading file.");
        }
    }
   
    
}