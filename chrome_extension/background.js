// background.js


const partners = ['samsung.com', 'netshoes.com.br', 'carrefour.com.br', 'insiderstore.com.br'];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'CHECK_CASHBACK') {
    const isPartner = partners.includes(message.url);
    sendResponse({ isPartner });
  }

  if (message.type === 'ACTIVATE_CASHBACK') {
    console.log(`Cashback ativado para o site: ${message.url}`);
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icons/icon48.png',
      title: 'Cashback Ativado!',
      message: `Cashback ativado para ${message.url}`
    });
  }
});
