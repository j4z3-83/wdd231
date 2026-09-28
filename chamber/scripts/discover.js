import { places } from "../data/places.mjs";

console.log(places);

const cards = document.querySelector("#placecards");

function displayPlaces(places) {
    places.forEach((place) => {
        let card = document.createElement("div");
        let placeName = document.createElement("h2");
        let placeAddress = document.createElement("address");
        let placeDescription = document.createElement("p");
        let placePicture = document.createElement("img");

        placeName.textContent = `${place.name}`;
        placeAddress.textContent = `${place.address}`;
        placeDescription.textContent = `${place.description}`;
        placePicture.setAttribute('src', place.photo_url);
        placePicture.setAttribute('alt', `picture of ${place.name}`)
        placePicture.setAttribute('loading', 'lazy')
        placePicture.setAttribute('width', '300');
        placePicture.setAttribute('height', '200');

        card.appendChild(placePicture);
        card.appendChild(placeName);
        card.appendChild(placeAddress);
        card.appendChild(placeDescription);

        cards.appendChild(card);
    });
}

displayPlaces(places);
