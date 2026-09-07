const url = 'https://j4z3-83.github.io/wdd231/chamberproject/data/members.json';

const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members); // temporary testing of data response

    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let companyName = document.createElement("h2");
        let address = document.createElement("P");
        let pNumber = document.createElement("p");
        let companyURL = document.createElement("p");
        let storeFront = document.createElement("img");

        companyName.textContent = `${member.companyname}`
        address.textContent = `
        ${member.companyaddress.street},\n
        ${member.companyaddress.city}, ${member.companyaddress.province},\n
        ${member.companyaddress.postalcode}`;
        pNumber.textContent = `${member.companynumber}`;
        companyURL.textContent = `${member.companyurl}`

        storeFront.setAttribute('src', member.companypicture);
        storeFront.setAttribute('alt', `picture of ${member.companyname} store front`);
        storeFront.setAttribute('loading', 'lazy');
        storeFront.setAttribute('width', '300');
        storeFront.setAttribute('height', '450');

        card.appendChild(companyName);
        card.appendChild(address);
        card.appendChild(pNumber);
        card.appendChild(companyURL);
        card.appendChild(storeFront);

        cards.appendChild(card)
    })
}

getMemberData();
