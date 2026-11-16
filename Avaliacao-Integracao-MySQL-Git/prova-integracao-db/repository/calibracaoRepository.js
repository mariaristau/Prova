import { conexao } from "../config/conexao.js";

export async function criarCalibracao(calibracao) {
    const sql = "INSERT INTO calibracoes (equipamentoId, dataCalibracao, resultado, responsavel) VALUES (?, ?, ?, ?)";
    const [resultado] = await conexao.execute(sql, [
        calibracao.equipamentoId,
        calibracao.dataCalibracao,
        calibracao.resultado,
        calibracao.responsavel
    ]);

    return resultado.InsertId;
}

export async function listarCalibracoes() {
    const sql = "SELECT * FROM calibracoes ORDER BY id_calibracao";
    const [resultado] = await conexao.execute(sql);

    return resultado;
}

export async function listarCalibracoesDetalhadas() {
    const sql = [
        "SELECT * FROM calibracoes INNER JOIN equipamentos ON id_equipamento = fk_calibracoes_equipamentos ORDER BY id_calibracao"
    ];
    const [resultado] = await conexao.execute(sql);

    return resultado;
}

export async function buscarCalibracaoPorId(id) {
    const sql = "SELECT * FROM calibracoes WHERE id_calibracao = ?";
    const resultado = await conexao.execute(sql, [id]);

    return resultado[0];
}

export async function atualizarCalibracao(id, calibracao) {
    const sql = "UPDATE calibracoes SET equipamentoId = ?, dataCalibracao = ?, resultado = ?, responsavel = ? WHERE id_calibracao = ?";
    const [resultado] = await conexao.execute(sql, [
        calibracao.equipamentoId,
        calibracao.dataCalibracao,
        calibracao.resultado,
        calibracao.responsavel,
        id
    ]);

    return resultado.affectRows;
}

export async function excluirCalibracao(id) {
    const sql = "DELETE FROM calibracoes WHERE id_calibracao = ?";
    const [resultado] = await conexao.execute(sql, [id]);

    return resultado.affectRows;
}
