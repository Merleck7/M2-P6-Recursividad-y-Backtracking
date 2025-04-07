const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];
function findGift(gifts, giftName, index = 0) {
    if (index === 0) console.log("\nIniciando nueva busqueda...");
    if (giftName === gifts[index]) {
        return `${giftName} está en la posición ${index + 1} de la lista.`;
    }
    if (index === gifts.length) {
        return `${giftName} no está en la lista, ingresa otro juguete para buscar en la lista C:.`;
    }
    console.log(`Buscando en la posición ${index + 1}...`);
    return findGift(gifts, giftName, index + 1);
}
function findGiftTernary(gifts, giftName, index = 0) {
    index === 0 ? console.log("\nIniciando nueva busqueda usando operadores Ternearios...") : null;
    console.log(`Buscando en la posición ${index + 1}...`);
    return index === gifts.length ? `${giftName} no está en la lista, ingresa otro juguete para buscar en la lista C:.`: giftName === gifts[index] ? `${giftName} esta en la posción ${index + 1} de la lista.`:findGift(gifts, giftName, index + 1);
}
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));
console.log(findGiftTernary(gifts, giftToFind));
giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));
console.log(findGiftTernary(gifts, giftToFind));
