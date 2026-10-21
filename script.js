const data = {"status":"success","country":"The Netherlands","countryCode":"NL","region":"NH","regionName":"North Holland","city":"Amsterdam","zip":"1012","lat":52.3716,"lon":4.8883,"timezone":"Europe/Amsterdam","isp":"Telegram Messenger San Francisco Network","org":"","as":"AS62041 Telegram Messenger Inc","query":"149.154.161.202"}
const ip = document.getElementById('ip');
const city = document.getElementById('city');
const davlat = document.getElementById('davlat');
const int = document.getElementById('int');
const karta = document.getElementById('karta');
const url = `https://www.google.com/maps?q=${data.lat},${data.lon}&output=embed`;

ip.textContent = data.query
city.textContent = data.city
davlat.textContent = data.country
int.textContent = data.isp

karta.innerHTML = `
<iframe src="${url}" frameborder="0" class='karta'></iframe>`