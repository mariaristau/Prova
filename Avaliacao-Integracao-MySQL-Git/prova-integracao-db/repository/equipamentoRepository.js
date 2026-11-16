export async function criarEquipamento(equipamento) {
    const sql = "INSERT INTO equipamentos (codigoPatrimonio, nome, setor) VALUES (?, ?, ?)";
    const [resultado] = await conexao.execute(sql, [
        equipamento.codigoPatrimonio,
        equipamento.nome,
        equipamento.setor
    ]);

    return resultado.InsertId;
}

export async function listarEquipamentos() {
    const sql = "SELECT * FROM equipamentos ORDER BY id_equipamento";
    const [resultado] = await conexao.execute(sql);

    return resultado;
}

export async function buscarEquipamentoPorId(id) {
    const sql = "SELECT * FROM equipamento WHERE id_equipamento = ?";
    const resultado = await conexao.execute(sql, [id]);

    return resultado[0];
}

export async function atualizarEquipamento(id, equipamento) {
    const sql = "UPDATE equipamentos SET codigoPatrimonio = ?, nome = ?, setor = ? WHERE id_equipamento = ?";
    const [resultado] = await conexao.execute(sql, [
        equipamento.codigoPatrimonio,
        equipamento.nome,
        equipamento.setor,
        id
    ]);

    return resultado.affectRows;
}

export async function excluirEquipamento(id) {
    const sql = "DELETE FROM equipamentos WHERE id_equipamento = ?";
    const [resultado] = await conexao.execute(sql, [id]);

    return resultado.affectRows;
}
