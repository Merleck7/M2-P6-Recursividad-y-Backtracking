let gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];
const resultado = document.getElementById("resultado");

function findGift(gifts, giftName, index = 0) {
    if (index === 0) resultado.textContent = "🔍 Iniciando nueva búsqueda...\n";

    resultado.textContent += `Buscando en la posición ${index + 1}...\n`;

    return index === gifts.length
        ? `${giftName} no está en la lista, desea agregarlo?`
        : giftName.toLowerCase() === gifts[index].toLowerCase()
            ? `${giftName} está en la posición ${index + 1} de la lista.`
            : findGift(gifts, giftName, index + 1);
}

function buscarRegalo() {
    const giftInput = document.getElementById("giftInput").value.trim();
    if (!giftInput) {
        resultado.textContent = "⚠️ Por favor, escribe un regalo.";
        return;
    }

    const mensaje = findGift(gifts, giftInput);
    resultado.textContent += "\n✅ Resultado:\n" + mensaje;
}

function agregarRegalo() {
    const newGift = document.getElementById("newGift").value.trim();
    if (!newGift) {
        resultado.textContent = "⚠️ Por favor, escribe un nombre para el nuevo regalo.";
        return;
    }

    gifts.push(newGift);
    resultado.textContent = `✅ El regalo "${newGift}" ha sido agregado a la lista.`;
    document.getElementById("newGift").value = '';  // Limpiar el campo de texto
}

