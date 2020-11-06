//Criar o mapa
const map = L.map('mapid').setView([-27.2234058,-49.6445338], 15);

//Criar e adicionar a camada com o mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Criar o ícone
const icon = L.icon({
    iconUrl: "../images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

function addMarker({id, name, lat, lng}) {
  //Criar popup
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="/orphanage?id=${id}"><img src="../images/arrow-white.svg"></a>`
  );

  //Criar e adicionar marcador
  L
  .marker([lat, lng], { icon })
  .addTo(map)
  .bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll('.orphanages span');
console.log(orphanagesSpan);
orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng,
    };

    addMarker(orphanage);
});