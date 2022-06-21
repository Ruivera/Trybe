let candidato = "aloha";

switch (candidato) {
    case "aprovado":
        console.log("Parabéns, você foi aprovada(o)!");
        break;
        
    case "lista de espera":
        console.log("Você está na nossa lista de espera");
        break;

    case "não aprovado":
        console.log("Você foi reprovada(o)");
        break;

    default:
        console.log("não se aplica")
}