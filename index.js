const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 40;

const tempoMinimoContribuicaoHomem = 35
const tempoMinimoContribuicaoMulher = 30

const calculoAposentadoria = idade + contribuicao 

const verificacaoAposentadoriaHomem = calculoAposentadoria >= 95 && contribuicao >=tempoMinimoContribuicaoHomem
const verificacaoAposentadoriaMulher = calculoAposentadoria >= 85 && contribuicao >=tempoMinimoContribuicaoMulher

if (sexo =='M'){
    if (verificacaoAposentadoriaHomem){
        console.log(`${nome} Você Pode Aposentar!`)
    } else{
        console.log(`${nome} Você Não Pode Aposentar!`)
    }
} else{
    if (verificacaoAposentadoriaMulher){
        console.log(`${nome} Você Pode Aposentar!`)

}else{
    console.log(`${nome} Você Nâo Pode Aposentar!`)
}
}

    



