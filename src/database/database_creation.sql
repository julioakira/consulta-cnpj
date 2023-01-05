-- Credits to: https://github.com/mtrentz/dados-cnpj/blob/master/database/create.sql
DROP DATABASE IF EXISTS consulta_cnpj;

CREATE DATABASE IF NOT EXISTS consulta_cnpj CHARACTER SET latin2 COLLATE latin2_general_ci;

USE consulta_cnpj;

CREATE TABLE IF NOT EXISTS empresas (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_cnpj INT NOT NULL,
  cnpj VARCHAR(8) NOT NULL,
  razao_social TEXT NULL,
  id_natureza_juridica TEXT NULL,
  id_qualificacao INT NULL,
  capital_social BIGINT NULL,
  id_porte INT NULL,
  ente_federativo_responsavel TEXT NULL
);

CREATE TABLE IF NOT EXISTS estabelecimentos (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_cnpj INT NOT NULL,
  cnpj VARCHAR(8) NOT NULL,
  cnpj_ordem VARCHAR(4) NOT NULL,
  cnpj_digito_verificador VARCHAR(2) NOT NULL,
  id_matriz_filial INT NULL,
  nome_fantasia TEXT NULL,
  id_situacao_cadastral INT NULL,
  data_situacao_cadastral DATE NULL,
  id_motivo_situacao_cadastral TEXT NULL,
  nome_cidade_exterior TEXT NULL,
  id_pais TEXT NULL,
  data_inicio_atividade DATE NULL,
  id_cnae_principal VARCHAR(7) NULL,
  lista_cnaes_secundarias TEXT NULL,
  tipo_logradouro TEXT NULL,
  logradouro TEXT NULL,
  numero TEXT NULL,
  complemento TEXT NULL,
  bairro TEXT NULL,
  cep TEXT NULL,
  uf TEXT NULL,
  id_municipio TEXT NULL,
  ddd1 TEXT NULL,
  telefone1 TEXT NULL,
  ddd2 TEXT NULL,
  telefone2 TEXT NULL,
  ddd_fax TEXT NULL,
  fax TEXT NULL,
  email TEXT NULL,
  situacao_especial TEXT NULL,
  data_situacao_especial DATE NULL
);

CREATE TABLE IF NOT EXISTS simples (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_cnpj INT NOT NULL,
  cnpj VARCHAR(8) NOT NULL,
  opcao_pelo_simples VARCHAR(1) NULL,
  data_opcao_pelo_simples DATE NULL,
  data_exclusao_do_simples DATE NULL,
  opcao_pelo_mei VARCHAR(1) NULL,
  data_opcao_pelo_mei DATE NULL,
  data_entrada_do_mei DATE NULL
);

CREATE TABLE IF NOT EXISTS socios (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_cnpj INT NOT NULL,
  cnpj VARCHAR(8) NOT NULL,
  id_tipo_socio INT NULL,
  nome_razao_social TEXT NULL,
  cpf_cnpj TEXT NULL,
  id_qualificacao TEXT NULL,
  data_entrada DATE NULL,
  id_pais TEXT NULL,
  cpf_representante_legal TEXT NULL,
  nome_representante_legal TEXT NULL,
  id_qualificacao_representante_legal TEXT NULL,
  id_faixa_etaria INT NULL
);

CREATE TABLE IF NOT EXISTS paises (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_pais TEXT NOT NULL,
  pais TEXT NOT NULL
  );

CREATE TABLE IF NOT EXISTS qualificacoes_de_socios (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_qualificacao TEXT NOT NULL,
  qualificacao_de_socio TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS naturezas_juridicas (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_natureza TEXT NOT NULL,
  natureza_juridica TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS cnaes (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  cnae VARCHAR(7) NOT NULL,
  cnae_descricao TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS motivos (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_motivo TEXT NOT NULL,
  motivo_situacao_cadastral TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS municipios (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_municipio TEXT NOT NULL,
  municipio TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS portes (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_porte INT NOT NULL,
  porte TEXT NOT NULL
  );

INSERT INTO
  portes (id_porte, porte)
VALUES
  (1, 'N/I'),
  (2, 'Micro Empresa'),
  (3, 'Pequeno Porte'),
  (5, 'Outros');

CREATE TABLE matriz_filiais (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_matriz INT NOT NULL,
  matriz_filial TEXT NOT NULL
);

INSERT INTO
  matriz_filiais (id_matriz, matriz_filial)
VALUES
  (1, 'Matriz'),
  (2, 'Filial');

CREATE TABLE situacoes_cadastrais (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_situacao INT NOT NULL,
  situacao_cadastral TEXT NOT NULL
);

INSERT INTO
  situacoes_cadastrais (id_situacao, situacao_cadastral)
VALUES
  (1, 'Nula'),
  (2, 'Ativa'),
  (3, 'Suspensa'),
  (4, 'Inapta'),
  (8, 'Baixada');

CREATE TABLE tipos_socios (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_socio INT NOT NULL,
  tipo_socio TEXT NOT NULL
);

INSERT INTO
  tipos_socios (id_socio, tipo_socio)
VALUES
  (1, 'Pessoa Juridica'),
  (2, 'Pessoa Fisica'),
  (3, 'Estrangeiro');

CREATE TABLE faixas_etarias (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_faixa_etaria INT NOT NULL,
  faixa_etaria TEXT NOT NULL
);

INSERT INTO
  faixas_etarias (id_faixa_etaria, faixa_etaria)
VALUES
  (1, '0 a 12 anos'),
  (2, '13 a 20 anos'),
  (3, '21 a 30 anos'),
  (4, '31 a 40 anos'),
  (5, '41 a 50 anos'),
  (6, '51 a 60 anos'),
  (7, '61 a 70 anos'),
  (8, '71 a 80 anos'),
  (9, 'Maiores de 80'),
  (0, 'Nao se aplica');