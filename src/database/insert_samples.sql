-- Learn how to make nullables
SET GLOBAL local_infile=1;
LOAD DATA LOCAL INFILE '/home/akira/databases/csv/samples/sample_empresas.csv' INTO table empresas FIELDS TERMINATED BY ';' LINES TERMINATED BY '\n' IGNORE 1 LINES (
  @cnpj_basico,
  @razao_social,
  @natureza_juridica,
  @qualificacao_responsavel,
  @porte_empresa,
  @ente_federativo_responsavel,
  @capital_social
)
SET
  empresas.id_cnpj = @cnpj_basico,
  empresas.cnpj = @cnpj_basico,
  empresas.razao_social = @razao_social,
  empresas.id_natureza_juridica = @natureza_juridica,
  empresas.id_qualificacao = @qualificacao_responsavel,
  empresas.id_porte = @porte_empresa,
  empresas.ente_federativo_responsavel = @ente_federativo_responsavel,
  empresas.capital_social = @capital_social;

LOAD DATA LOCAL INFILE '/home/akira/databases/csv/samples/sample_socios.csv' INTO TABLE socios FIELDS TERMINATED BY ';' LINES TERMINATED BY '\n' IGNORE 1 LINES (
  @cnpj,
  @cnpj_basico,
  @identificador_de_socio,
  @nome_socio,
  @cnpj_cpf_socio,
  @qualificacao_socio,
  @data_entrada_sociedade,
  @pais,
  @representante_legal,
  @nome_representante,
  @qualificacao_representante_legal,
  @faixa_etaria
)
SET
  socios.id_cnpj = @cnpj_basico,
  socios.cnpj = @cnpj_basico,
  socios.id_tipo_socio = @identificador_de_socio,
  socios.nome_razao_social = @nome_socio,
  socios.cpf_cnpj = @cnpj_cpf_socio,
  socios.id_qualificacao = @qualificacao_socio,
  socios.data_entrada = @data_entrada_sociedade,
  socios.id_pais = @pais,
  socios.cpf_representante_legal = @representante_legal,
  socios.nome_representante_legal = @nome_representante,
  socios.id_qualificacao_representante_legal = @qualificacao_representante_legal,
  socios.id_faixa_etaria = @faixa_etaria;

LOAD DATA LOCAL INFILE '/home/akira/databases/csv/samples/sample_estabelecimento.csv' INTO TABLE estabelecimentos FIELDS TERMINATED BY ';' LINES TERMINATED BY '\n' IGNORE 1 LINES (
  @cnpj_basico,
  @cnpj_ordem,
  @cnpj_dv,
  @matriz_filial,
  @nome_fantasia,
  @situacao_cadastral,
  @data_situacao_cadastral,
  @motivo_situacao_cadastral,
  @nome_cidade_exterior,
  @pais,
  @data_inicio_atividades,
  @cnae_fiscal,
  @cnae_fiscal_secundaria,
  @tipo_logradouro,
  @logradouro,
  @numero,
  @complemento,
  @bairro,
  @cep,
  @uf,
  @municipio,
  @ddd1,
  @telefone1,
  @ddd2,
  @telefone2,
  @ddd_fax,
  @fax,
  @correio_eletronico,
  @situacao_especial,
  @data_situacao_especial,
  @cnpj
)
SET
  estabelecimentos.id_cnpj = @cnpj_basico,
  estabelecimentos.cnpj = @cnpj_basico,
  estabelecimentos.cnpj_ordem = @cnpj_ordem,
  estabelecimentos.cnpj_digito_verificador = @cnpj_dv,
  estabelecimentos.id_matriz_filial = @matriz_filial,
  estabelecimentos.nome_fantasia = @nome_fantasia,
  estabelecimentos.id_situacao_cadastral = @situacao_cadastral,
  estabelecimentos.data_situacao_cadastral = @data_situacao_cadastral,
  estabelecimentos.id_motivo_situacao_cadastral = @motivo_situacao_cadastral,
  estabelecimentos.nome_cidade_exterior = @nome_cidade_exterior,
  estabelecimentos.id_pais = @pais,
  estabelecimentos.data_inicio_atividade = @data_inicio_atividades,
  estabelecimentos.id_cnae_principal = @cnae_fiscal,
  estabelecimentos.lista_cnaes_secundarias = @cnae_fiscal_secundaria,
  estabelecimentos.tipo_logradouro = @tipo_logradouro,
  estabelecimentos.logradouro = @logradouro,
  estabelecimentos.numero = @numero,
  estabelecimentos.complemento = @complemento,
  estabelecimentos.bairro = @bairro,
  estabelecimentos.cep = @cep,
  estabelecimentos.uf = @uf,
  estabelecimentos.id_municipio = @municipio,
  estabelecimentos.ddd1 = @ddd1,
  estabelecimentos.telefone1 = @telefone1,
  estabelecimentos.ddd2 = @ddd2,
  estabelecimentos.telefone2 = @telefone2,
  estabelecimentos.ddd_fax = @ddd_fax,
  estabelecimentos.fax = @fax,
  estabelecimentos.email = @correio_eletronico,
  estabelecimentos.situacao_especial = @situacao_especial,
  estabelecimentos.data_situacao_especial = @data_situacao_especial;

LOAD DATA LOCAL INFILE '/home/akira/databases/csv/samples/sample_cnae.csv' INTO TABLE cnaes FIELDS TERMINATED BY ';' LINES TERMINATED BY '\n' IGNORE 1 LINES (@codigo, @descricao)
SET
  cnaes.cnae = @codigo,
  cnaes.cnae_descricao = @descricao;

LOAD DATA LOCAL INFILE '/home/akira/databases/csv/samples/sample_motivo.csv' INTO TABLE motivos FIELDS TERMINATED BY ';' LINES TERMINATED BY '\n' IGNORE 1 LINES (@codigo, @descricao)
SET
  motivos.id_motivo = @codigo,
  motivos.motivo_situacao_cadastral = @descricao;

LOAD DATA LOCAL INFILE '/home/akira/databases/csv/samples/sample_municipio.csv' INTO TABLE municipios FIELDS TERMINATED BY ';' LINES TERMINATED BY '\n' IGNORE 1 LINES (@codigo, @descricao)
SET
  municipios.id_municipio = @codigo,
  municipios.municipio = @descricao;

LOAD DATA LOCAL INFILE '/home/akira/databases/csv/samples/sample_natureza_juridica.csv' INTO TABLE naturezas_juridicas FIELDS TERMINATED BY ';' LINES TERMINATED BY '\n' IGNORE 1 LINES (@codigo, @descricao)
SET
  naturezas_juridicas.id_natureza = @codigo,
  naturezas_juridicas.natureza_juridica = @descricao;

LOAD DATA LOCAL INFILE '/home/akira/databases/csv/samples/sample_pais.csv' INTO TABLE paises FIELDS TERMINATED BY ';' LINES TERMINATED BY '\n' IGNORE 1 LINES (@codigo, @descricao)
SET
  paises.id_pais = @codigo,
  paises.pais = @descricao;

LOAD DATA LOCAL INFILE '/home/akira/databases/csv/samples/sample_qualificacao_socio.csv' INTO TABLE qualificacoes_de_socios FIELDS TERMINATED BY ';' LINES TERMINATED BY '\n' IGNORE 1 LINES (@codigo, @descricao)
SET
  qualificacoes_de_socios.id_qualificacao = @codigo,
  qualificacoes_de_socios.qualificacao_de_socio = @descricao;

LOAD DATA LOCAL INFILE '/home/akira/databases/csv/samples/sample_simples.csv' INTO TABLE simples FIELDS TERMINATED BY ';' LINES TERMINATED BY '\n' IGNORE 1 LINES (
  @cnpj_basico,
  @opcao_simples,
  @data_opcao_simples,
  @data_exclusao_simples,
  @opcao_mei,
  @data_opcao_mei,
  @data_exclusao_mei
)
SET
  simples.id_cnpj = @cnpj_basico,
  simples.cnpj = @cnpj_basico,
  simples.opcao_pelo_simples = @opcao_simples,
  simples.data_opcao_pelo_simples = @data_opcao_simples,
  simples.data_exclusao_do_simples = @data_exclusao_simples,
  simples.opcao_pelo_mei = @opcao_mei,
  simples.data_opcao_pelo_mei = @data_opcao_mei,
  simples.data_entrada_do_mei = @data_exclusao_mei;

LOAD DATA LOCAL INFILE '/home/akira/databases/csv/samples/sample_simples.csv' INTO TABLE simples FIELDS TERMINATED BY ';' LINES TERMINATED BY '\n' IGNORE 1 LINES (
  @cnpj_basico,
  @opcao_simples,
  @data_opcao_simples,
  @data_exclusao_simples,
  @opcao_mei,
  @data_opcao_mei,
  @data_exclusao_mei
)
SET
  simples.id_cnpj = @cnpj_basico,
  simples.cnpj = @cnpj_basico,
  simples.opcao_pelo_simples = @opcao_simples,
  simples.data_opcao_pelo_simples = @data_opcao_simples,
  simples.data_exclusao_do_simples = @data_exclusao_simples,
  simples.opcao_pelo_mei = @opcao_mei,
  simples.data_opcao_pelo_mei = @data_opcao_mei,
  simples.data_entrada_do_mei = @data_exclusao_mei