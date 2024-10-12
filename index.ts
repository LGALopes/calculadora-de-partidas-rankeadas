function calcRank(vitorias: number, derrotas: number){
    let saldoVitorias: number = vitorias - derrotas;
    let ranking: string;

    if (saldoVitorias <= 10){
        ranking = "Ferro";
    } else if (saldoVitorias > 10 && saldoVitorias <= 20){
        ranking = "Bronze";
    } else if (saldoVitorias > 20 && saldoVitorias <= 50){
        ranking = "Prata";
    } else if (saldoVitorias > 50 && saldoVitorias <= 80){
        ranking = "Ouro";
    } else if (saldoVitorias > 80 && saldoVitorias <= 90){
        ranking = "Diamante";
    } else if (saldoVitorias > 90 && saldoVitorias <= 100){
        ranking = "Lendário";
    } else {
        ranking = "Imortal";
    }

    return {saldoVitorias, ranking};
}

const resultado = calcRank(100, 5);
console.log(`O Héroi tem saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.ranking}.`);
