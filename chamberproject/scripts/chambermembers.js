const url = 'https://j4z3-83.github.io/wdd231/chamberproject/data/members.json';

const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members); // temporary testing of data response

    displayMembers(data.memberinformation);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let companyName = document.createElement("h2");
        let address = document.createElement("p");
        let phoneNumber = document.createElement("p");
        let websiteURL = document.createElement("a");
        let storeFront = document.createElement("img");

        address.textContent = `
        ${member.street}<br>
        ${member.city} ${member.province}<br>
        ${member.postalcode}
        `;

        storeFront.setAttribute('src', member.companypicture);
        storeFront.setAttribute('alt', `store front of ${prophet.companyname}`);
        storeFront.setAttribute('loading', 'lazy');
        storeFront.setAttribute('width', '300');
        storeFront.setAttribute('height', '450');

        card.appendChild(companyName);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(websiteURL);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getMemberData();