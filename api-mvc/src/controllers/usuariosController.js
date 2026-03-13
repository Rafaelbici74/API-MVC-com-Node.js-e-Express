
const express = require('express');
const router = express.Router();

const usuarios = [{
    "mensagem": " API Usuarios iniciada com sucesso!"
  }];

exports.listar = (req, res) => {
        return res.json(usuarios);
};

exports.criar = (req, res) => {
    const novoUsuarios = req.body;
    usuarios.push(novoUsuarios);
    return res.status(201).json(novoUsuarios);
};
