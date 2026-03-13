
const express = require('express');
const router = express.Router();

const hello = [{
    "mensagem": "TESTE"
  }];

exports.listar = (req, res) => {
        return res.json(hello);
};

exports.criar = (req, res) => {
    const novoHello = req.body;
    hello.push(novoHello);
    return res.status(201).json(novoHello);
};
