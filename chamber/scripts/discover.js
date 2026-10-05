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
        let placeButton = document.createElement("button");

        placeName.textContent = `${place.name}`;
        placeAddress.textContent = `${place.address}`;
        placeDescription.textContent = `${place.description}`;
        placePicture.setAttribute('src', place.photo);
        placePicture.setAttribute('alt', `picture of ${place.name}`)
        placePicture.setAttribute('loading', 'lazy')
        placePicture.setAttribute('width', '300');
        placePicture.setAttribute('height', '200');
        placeButton.textContent = `learn more`;


        placeButton.addEventListener("click", () => {
            window.location.href = place.url;
        })

        card.appendChild(placePicture);
        card.appendChild(placeName);
        card.appendChild(placeAddress);
        card.appendChild(placeDescription);
        card.appendChild(placeButton);

        cards.appendChild(card);
    });
}

displayPlaces(places);
