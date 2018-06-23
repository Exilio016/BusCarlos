CREATE TABLE linha (
    numero TINYINT NOT NULL,
    nome VARCHAR(64) NOT NULL,
    CONSTRAINT pk_linha PRIMARY KEY (numero)
);

CREATE TABLE rua (
    nome VARCHAR(128) NOT NULL,
    CONSTRAINT pk_rua PRIMARY KEY (nome)
);

CREATE TABLE ponto_ref (
    nome VARCHAR(128) NOT NULL,
    foto VARCHAR(256) NOT NULL,
    CONSTRAINT pk_ponto_ref PRIMARY KEY (nome)
);

CREATE TABLE ref_rua (
    nome_ref VARCHAR(128) NOT NULL,
    nome_rua VARCHAR(128) NOT NULL,
    CONSTRAINT pk_ref_linha PRIMARY KEY (nome_ref, nome_rua),
    CONSTRAINT fk_nome_ref FOREIGN KEY (nome_ref) REFERENCES ponto_ref(nome)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_nome_rua FOREIGN KEY (nome_rua) REFERENCES rua(nome)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE linha_rua (
    nro_linha TINYINT NOT NULL,
    nome_rua VARCHAR(128) NOT NULL,
    ordem_rua TINYINT NOT NULL,
    CONSTRAINT pk_linha_rua PRIMARY KEY (nro_linha, nome_rua, ordem_rua),
    CONSTRAINT fk_rua FOREIGN KEY (nome_rua) REFERENCES rua(nome)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_linha FOREIGN KEY (nro_linha) REFERENCES linha(numero)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE horario (
    hora VARCHAR(6) NOT NULL,
    dias_semana VARCHAR(64) NOT NULL,
    nro_linha TINYINT NOT NULL,
    nome_rua VARCHAR(128) NOT NULL,
    CONSTRAINT pk_horario PRIMARY KEY (hora, dias_semana, nro_linha, nome_rua),
    CONSTRAINT fk_horario_rua FOREIGN KEY (nome_rua) REFERENCES rua(nome)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_horario_linha FOREIGN KEY (nro_linha) REFERENCES linha(numero)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE usuario (
    nome VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    foto VARCHAR(256),
    CONSTRAINT pk_usuario PRIMARY KEY (email)
);

CREATE TABLE favorito (
    nro_linha TINYINT NOT NULL,
    email VARCHAR(64) NOT NULL,
    CONSTRAINT pk_favorito PRIMARY KEY (nro_linha, email),
    CONSTRAINT fk_favorito_linha FOREIGN KEY (nro_linha) REFERENCES linha(numero)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_favorito_email FOREIGN KEY (email) REFERENCES usuario(email)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE comentario (
    data_hora TIMESTAMP NOT NULL,
    nro_linha TINYINT,
    email VARCHAR(64) NOT NULL,
    tema VARCHAR(32),
    texto VARCHAR(1024),
    CONSTRAINT pk_comentario PRIMARY KEY (email, data_hora),
    CONSTRAINT fk_comentario_linha FOREIGN KEY (nro_linha) REFERENCES linha(numero)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_comentario_email FOREIGN KEY (email) REFERENCES usuario(email)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
