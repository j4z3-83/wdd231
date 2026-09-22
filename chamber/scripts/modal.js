const npButton = document.querySelector("#npButton");
const bronzeButton = document.querySelector("#bronzeButton");
const silverButton = document.querySelector("#silverButton");
const goldButton = document.querySelector("#goldButton");
const memberships = document.querySelector("#memberships");
const closeButton = document.querySelector("#closeButton");
const modalContent  = document.querySelector("#modalContent");

npButton.addEventListener("click", () => {
    memberships.showModal();
    displayNonProfitMembership()
});

bronzeButton.addEventListener("click", () => {
    memberships.showModal();
    displayBronzeMembership()
});

silverButton.addEventListener("click", () => {
    memberships.showModal();
    displaySilverMembership()
});

goldButton.addEventListener("click", () => {
    memberships.showModal();
    displayGoldMembership()
});

closeButton.addEventListener("click", () => {
    memberships.close();
})

function displayNonProfitMembership() {
    modalContent.innerHTML = '';
    modalContent.innerHTML = `
    <h2>Non Profit Membership</h2>
    <h3>Membership Benefits</h3>
    <li class="benefits">Membership plaque</li>
    <li  class="benefits">Float in town parade</li>
    <p><strong>Cost:</strong> Free</p>
  `;
}

function displayBronzeMembership() {
    modalContent.innerHTML = '';
    modalContent.innerHTML = `
    <h2>Bronze Membership</h2>
    <h3>Membership Benefits</h3>
    <li>Membership plaque</li>
    <li>Float in town parade</li>
    <li>invitation to the chamber of commerce bbq</li>
    <p><strong>Cost:</strong> $10 annual fee</p>
    `;
}

function displaySilverMembership() {
    modalContent.innerHTML = '';
    modalContent.innerHTML = `
    <h2>Silver Membership</h2>
    <h3>Membership Benefits</h3>
    <li>Membership plaque</li>
    <li>Float in town parade</li>
    <li>Invitation to the chamber of commerce bbq</li>
    <li>discount on Coaldale Copperhead tickets</li>
    <p><strong>Cost:</strong> $20 annual fee</p>
    `;
}
function displayGoldMembership() {
    modalContent.innerHTML = '';
    modalContent.innerHTML = `
    <h2>Gold Membership</h2>
    <h3>Membership Benefits</h3>
    <li>Membership plaque</li>
    <li>Float in town parade</li>
    <li>Invitation to the chamber of commerce bbq</li>
    <li>discount on Coaldale Copperhead tickets</li>
    <li>Invitation to gold member events</li>
    <p><strong>Cost:</strong> $30 annual fee</p>
  `;
}


