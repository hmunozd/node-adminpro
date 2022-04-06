const Usuario = require('../models/usuario.model');

const  getUsers = (req, res) => {
    res.json({
        ok: true,
        usuarios: []
    })
}

const  createUser = async (req, res) => {
    const { email, password, nombre } = req.body;

    const usuario = new Usuario( req.body );

    await usuario.save();

    res.json({
        ok: true,
        usuario
    })
}


module.exports = {
    getUsers,
    createUser
}

