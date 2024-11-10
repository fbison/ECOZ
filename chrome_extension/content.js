// content.js


const currentUrl = window.location.hostname;


chrome.runtime.sendMessage({ type: 'CHECK_CASHBACK', url: currentUrl }, (response) => {
  if (response && response.isPartner) {
    showCashbackButton();
  }
});

function showCashbackButton() {
  const cashbackButton = document.createElement('button');
  cashbackButton.innerText = 'Ativar Cashback';
  cashbackButton.style.position = 'fixed';
  cashbackButton.style.bottom = '20px';
  cashbackButton.style.right = '20px';
  cashbackButton.style.padding = '10px 20px';
  cashbackButton.style.backgroundColor = '#4B4BFF';
  cashbackButton.style.color = '#fff';
  cashbackButton.style.border = 'none';
  cashbackButton.style.borderRadius = '5px';
  cashbackButton.style.cursor = 'pointer';
  cashbackButton.style.zIndex = '1000';

  cashbackButton.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'ACTIVATE_CASHBACK', url: currentUrl });
    cashbackButton.innerText = 'Cashback Ativado!';
    cashbackButton.style.backgroundColor = '#28a745';
  });

  document.body.appendChild(cashbackButton);
}
