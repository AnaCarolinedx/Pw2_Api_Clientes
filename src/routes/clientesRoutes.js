const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");

router.get("/", clienteController.listarClientes);
router.get("/:id", clienteController.buscarClientePortId);

router.post("/:id", clienteController.adicionarCliente);
router.put("/:id", clienteController.atualizarCliente);
router.delete("/:id", clienteController.deletarCliente);

module.exports = router;