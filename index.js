// index.js
async function fetchTargetDate() {
    const response = await fetch('configuration.html');
    const text = await response.text();
  
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = text;
  
    const configDiv = tempDiv.querySelector('#countdown-configuration');
    return new Date(configDiv.getAttribute('target-date'));
  }
  
  function updateCountdown(targetDate) {
    const now = new Date();
    const tdifference = targetDate - now;
  
    const msg = document.getElementById('message');
  
    if (tdifference <= 0) {
      document.getElementById('countdown').textContent = '';
      msg.textContent = "🎉🎉🎉🎉  2026 IS HERE!!!🎉🎉🎉";
      return;
    }
  
    const seconds = Math.floor(tdifference / 1000) % 60;
    const minutes = Math.floor(tdifference / 1000 / 60) % 60;
    const hours = Math.floor(tdifference / 1000 / 60 / 60) % 24;
    const days = Math.floor(tdifference / 1000 / 60 / 60 / 24);
  
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }
  
  async function initCountdown() {
    const targetDate = await fetchTargetDate();
    updateCountdown(targetDate);
    setInterval(() => updateCountdown(targetDate), 1000);
  }
  
  initCountdown();
  