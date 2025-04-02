const hora = 23;

if (hora >= 0 && hora <= 12) {
    console.log("Bom dia!")
}
else if (hora < 18) {
    console.log("Boa tarde!")
}
else if (hora >= 18 && hora <= 23){
    console.log("Boa noite!")
}
else{
    console.log("Hora Inválida!")
}