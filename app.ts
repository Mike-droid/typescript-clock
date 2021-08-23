const clock: HTMLSpanElement = document.getElementById('clock');

setInterval(()=> {
  const date: Date = new Date();
  clock.innerText = date.toLocaleTimeString('es-MX', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

}, 1000);