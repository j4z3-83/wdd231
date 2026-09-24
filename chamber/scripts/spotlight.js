const url = 'https://j4z3-83.github.io/wdd231/chamber/data/members.json';

const cards = document.querySelector('#cards');

async function getSpotlightData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayMembers(data.members);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const displayMembers = (members) => {

    const filteredMembers = members.filter(member => member.membershiplevel >= 2)
    const shuffleMembers = shuffle(filteredMembers)

    shuffleMembers.forEach((member) => {
        let card = document.createElement("section");
        let companyName = document.createElement("h2");
        let addressDisplay = document.createElement("container");
        let pNumber = document.createElement("p");
        let companyURL = document.createElement("p");
        let storeFront = document.createElement("img");
        let memberLevel = document.createElement("span");

        let memberLevelText = member.membershiplevel === 3 ? "Gold Member" : "Silver Member";

        companyName.textContent = `${member.companyname}`
        addressDisplay.innerHTML = `
        <p>${member.companyaddress.street}
        <p>${member.companyaddress.city}, ${member.companyaddress.province},</p>
        <p>${member.companyaddress.postalcode}</p>`;

        pNumber.textContent = `Phone: ${member.companynumber}`;
        companyURL.textContent = `URL: ${member.companyurl}`

        storeFront.setAttribute('src', member.companypicture);
        storeFront.setAttribute('alt', `picture of ${member.companyname} store front`);
        storeFront.setAttribute('loading', 'lazy');
        storeFront.setAttribute('width', '300');
        storeFront.setAttribute('height', '450');

        memberLevel.innerHTML = `
        <p class="member${member.membershiplevel === 3 ? "Gold" : "Silver"}">${memberLevelText}</p>`;

        card.appendChild(companyName);
        card.appendChild(addressDisplay);
        card.appendChild(pNumber);
        card.appendChild(companyURL);
        card.appendChild(storeFront);
        card.appendChild(memberLevel);

        cards.appendChild(card);
    })
}

function shuffle(members) {
    for (let i = members.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [members[i], members[j]] = [members[j], members[i]];
    }
    const shuffled = members.slice(0, 3);
    return shuffled;
}



getSpotlightData();
