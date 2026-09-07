const url = 'https://j4z3-83.github.io/wdd231/chamberproject/members.json';

const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members); // temporary testing of data response

}