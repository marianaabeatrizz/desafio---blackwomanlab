let medalhas = {};

function adicionarMedalhas(pais, ouro, prata, bronze) {
    if (!medalhas[pais]) {
        medalhas[pais] = { ouro: 0, prata: 0, bronze: 0, total: 0 };
    }
    medalhas[pais].ouro += ouro;
    medalhas[pais].prata += prata;
    medalhas[pais].bronze += bronze;
    medalhas[pais].total += ouro + prata + bronze;
}

function obterDadosDoPais() {
    let pais = prompt("Digite o nome do país (ou 'sair' para encerrar):");
    return pais;
}

function obterMedalhas(pais) {
    let ouro = parseInt(prompt(`Digite o número de medalhas de ouro para ${pais}:`), 10);
    let prata = parseInt(prompt(`Digite o número de medalhas de prata para ${pais}:`), 10);
    let bronze = parseInt(prompt(`Digite o número de medalhas de bronze para ${pais}:`), 10);

    // Certificar que os valores sejam números válidos
    if (isNaN(ouro)) ouro = 0;
    if (isNaN(prata)) prata = 0;
    if (isNaN(bronze)) bronze = 0;

    return { ouro, prata, bronze };
}

function exibirRanking() {
    let ranking = Object.entries(medalhas).sort((a, b) => b[1].total - a[1].total);
    console.log("# Ranking de Medalhas:");
    ranking.forEach(([pais, { ouro, prata, bronze, total }]) => {
        console.log(`# ${pais}: ${total} medalhas (Ouro: ${ouro}, Prata: ${prata}, Bronze: ${bronze})`);
    });
}

function iniciarContagem() {
    while (true) {
        let pais = obterDadosDoPais();
        if (pais.toLowerCase() === 'sair') {
            break;
        }

        let { ouro, prata, bronze } = obterMedalhas(pais);
        adicionarMedalhas(pais, ouro, prata, bronze);
    }

    exibirRanking();
}

// Inicia o processo
iniciarContagem();
