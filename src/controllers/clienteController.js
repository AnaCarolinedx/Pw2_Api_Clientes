const Cliente = require("../model/Cliente");
const prisma = require("../config/prisma");

const listarClientes = async (req, res) => {
try{
    const resultado = await prisma.cliente.findMany({
        where: { ativo: true }
    });
    return res.status(200).json({
    sucesso: true,
    total: resultado.length,
    dados: resultado.map((c) => ({ id: c.id, nome: c.nome, telefone: c.telefone, endereco: c.endereco}))
    });
} catch (error) {
    return res.status(500).json({
    sucesso: false,
    mensagem: "Erro ao listar clientes",
    erro: error.message,
        });
    }
};

const obterClientePorId = async (req, res) => {
try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "ID inválido. O ID deve ser um número inteiro.",
        });
    }

const cliente = await prisma.cliente.findUnique({
    where: { id: id}
});

    if (!cliente) {
        return res.status(404).json({
            sucesso: false,
            mensagem: `Cliente com id ${id} não encontrado`,
        });
    }

    return res.status(200).json({
        sucesso: true,
        dados: cliente,
    });

}catch(error) {
    return res.status(500).json({
        sucesso: false,
        mensagem: "Erro ao obter cliente por ID",
        erro: error.message,
        });
    }
}

const adicionarCliente = async(req, res) => {
    try{
        const { nome, telefone, endereco } = req.body;
        const novo_cliente = await prisma.cliente.create({
            data: {
                nome: nome,
                telefone: telefone,
                endereco: endereco
            }
        });
        return res.status(201).json({
            sucesso: true,
            mensagem: "Usuario adicionado com sucesso"
        });
    }catch(error){
        return res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao adicionar cliente",
            erro: error.message
        });
    }
}

const atualizarCliente = async (req, res) => {
    try{
        const { id } = req.params;
        const { nome, telefone, endereco } = req.body;

        const cliente = await prisma.cliente.findUnique({
            where: { id: parseInt(Id)}
        })

            if(!cliente){
                return res.status(404).json({
            sucesso: false,
            mensagem:`Cliente de id ${id} não encontrado`
            });
        }else{
         await prisma.cliente.update({
            where: { id: parseInt(Id) },
            data: { nome, telefone, endereco },
         });

            return res.status(200).json({
                sucesso: true,
                mensagem: "Cliente atualizado com sucesso"
            })
        }

    }catch(error){
        return res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao atualizar cliente",
            erro: error.message
        })
    }
}

const deletarCliente = async(req, res) => {
    try{
        const { id } = req.params;
        const cliente = await prisma.cliente.findUnique({
            where: { id: parseInt(Id) }
        });

        if(index === -1) {
            return res.status(404).json({
                sucesso: false,
                mensagem: `Cliente de ${id} não encontrado`
            })
        }else {
            await prisma.cliente.update({
                where: { id: parseInt(Id) },
                data: { ativo: false },
            })
            return res.status(200).json({
                sucesso: true,
                mensagem: `Cliente com ${id} removido com sucesso`
            });
        }

    }catch(error){
        return res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao remover cliente",
            erro: error.message
        })
    }
}

module.exports = {
    listarClientes,
    obterClientePorId,
    adicionarCliente,
    atualizarCliente,
    deletarCliente,
};