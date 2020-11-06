//Criar o mapa
const map = L.map('mapid').setView([-27.2234058,-49.6445338], 15);

//Criar e adicionar a camada com o mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Criar o ícone
const icon = L.icon({
    iconUrl: "../images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor: [29, 68]
});

let marker;

//Criar e adicionar marcador
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector("[name='lat']").value = lat;
    document.querySelector("[name='lng']").value = lng;

    //Limpar marcador anterior
    marker && map.removeLayer(marker); //Condicional (se marker não está vazio, remove o marker)

    //Adicionar ícone
    marker = L.marker([lat, lng], {icon}).addTo(map);
});

//Adicionar o campo de fotos
function addPhotoField(){
    //Pegar o container de fotos
    const container = document.querySelector('#images');
    //Pegar o container para duplicar -new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');
    //Realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    //Verificar se o campo está vazio. Se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0];
    if(input.value == ""){
        return;
    }
    //Limpar o campo antes de adicionálo ao container de imagens
    newFieldContainer.children[0].value = "";
    //Adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);
};

//Deletar campo de foto
function deleteField(event){
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');

    //Só remove o campo se tiver mais de um campo. Se tiver só 1, limpa o campo.
    if(fieldsContainer.length < 2){
        //Limpa o campo
        span.parentNode.children[0].value = "";
        return
    }

    //Remove o campo
    span.parentNode.remove();
};

//Selecionar sim ou não
function toggleSelect(event){
    //Retirar a class .active dos botões
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove("active"));
    //Pegar o botão clicado
    const button = event.currentTarget;
    //Colocar a class .active no botão clicado
    button.classList.add("active");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    //Atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]');
    input.value = button.dataset.value;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
};

function validate(event){

    const lat = document.querySelector("[name='lat']").value;
    const lng = document.querySelector("[name='lng']").value;

    if(lat=='' || lng==''){
        event.preventDefault();
        alert('Selecione um ponto no mapa');
    }
};