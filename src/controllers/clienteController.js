const clientes = require ("../../data/clientes");

const listarClientes = async (req, res) => {
try{
    return res.status(200).json({
    sucesso: true,
    total: clientes.length,
    dados: clientes,
    });
} catch (error) {
    return res.status(500).json({
    sucesso: false,
    mensagem: "Erro ao listar clientes",
    erro: error.message,
        });
    }
});

const obterClientePorId = async (req, res) => {
try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) 
        
}catch(error) {

    }
}   