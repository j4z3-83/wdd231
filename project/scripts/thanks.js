const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo)

console.log(myInfo.get('fname'));
console.log(myInfo.get('lname'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('email'));
console.log(myInfo.get('title'));
console.log(myInfo.get('writer'));
console.log(myInfo.get('illustrator'));
console.log(myInfo.get('volumes'));
console.log(myInfo.get('classification'));
console.log(myInfo.get('status'));

document.querySelector("#requestDetails").innerHTML = `
    <h1>Thank you ${myInfo.get('fname')} for your request</h1>
    <br>
    <p>We will add ${myInfo.get('title')} to Mangadb as quickly as possible</p>
    `;




