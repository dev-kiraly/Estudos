var max = 70;
function radarVelocidade(vel) {
    vel = Math.floor(vel);
    if (vel <= (max + 4)) {
        console.log("Velocidade OK!");
    } else {
        let pontos = 0;
        let i = max + 4;
        do {
            pontos++;
            i = i + 5;
        } while (i < vel);
        if (pontos < 12) {
            console.log("Velocidade Máxima Excedida!");
            console.log("Pontuação Recebida: " + pontos);
        } else {
        console.log("Velocidade Máxima Excedida!");
        console.log("Pontuação Máxima Excedida!");
        console.log("A CNH foi Suspensa!");
        }
    }
}

radarVelocidade(150);