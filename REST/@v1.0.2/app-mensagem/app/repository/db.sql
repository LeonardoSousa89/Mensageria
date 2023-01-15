CREATE DATABASE mensageria;
DROP DATABASE mensageria;

\c mensageria

CREATE TABLE IF NOT EXISTS mensagem(
    id SERIAL PRIMARY KEY,
    msg VARCHAR(250) NOT NULL
);


DROP TABLE mensagem;

INSERT INTO mensagem VALUES(1, 'Sistema de Mensageria OK');

DELETE FROM mensagem;
DELETE FROM mensagem WHERE id = 1;


SELECT * FROM mensagem;
