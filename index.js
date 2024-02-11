const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h2>Index sayfasına hoşgeldiniz.</h2>');
    res.end();
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h2>Hakkımda sayfasına hoşgeldiniz.</h2>');
    res.end();
  } else if (url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h2>İletişim sayfasına hoşgeldiniz.</h2>');
    res.end();
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h2>Sayfa bulunamadı.</h2>');
    res.end();
  }
});

const port = 5000;

server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});