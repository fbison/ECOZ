document.addEventListener('DOMContentLoaded', () => {
  // Simulação de dados ou chamada para uma API para buscar as ofertas
  const offers = [
    { name: "Samsung", cashback: "2%" },
    { name: "Netshoes", cashback: "4.5%" },
    { name: "Carrefour", cashback: "Até 4%" },
    { name: "Insider", cashback: "12%" }
  ];

  const offersContainer = document.getElementById('offers');

  offers.forEach(offer => {
    const offerElement = document.createElement('div');
    offerElement.classList.add('offer');
    offerElement.innerHTML = `<p><strong>${offer.name}</strong> - ${offer.cashback} de volta</p>`;
    offersContainer.appendChild(offerElement);
  });
});
