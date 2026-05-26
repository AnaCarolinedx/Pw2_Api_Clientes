CREATE DATABASE pw2_api_clientes;
USE pw2_api_clientes;

CREATE TABLE clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    endereco VARCHAR(255) NOT NULL
);

INSERT INTO clientes (nome, telefone, endereco)
VALUES
('Ana Paula Souza', '(11) 91234-5678', 'Rua das Flores, 123 - São Paulo/SP'),
('Bruno Costa', '(21) 99876-5432', 'Av. Atlântica, 456 - Rio de Janeiro/RJ'),
('Carla Mendes', '(31) 98765-4321', 'Rua Ouro Preto, 789 - Belo Horizonte/MG'),
('Diego Alves', '(41) 97654-3210', 'Rua XV de Novembro, 101 - Curitiba/PR'),
('Elisa Ferreira', '(51) 96543-2109', 'Av. Borges de Medeiros, 202 - Porto Alegre/RS'),
('Thais Obana', '(11) 96543-2109', 'Av. XV de Novembro, 11 - São Paulo/SP');

SELECT * FROM clientes;