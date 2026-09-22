const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo)

console.log(myInfo.get('fname'));
console.log(myInfo.get('lname'));
console.log(myInfo.get('orgtitle'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('email'));
console.log(myInfo.get('membership'));
console.log(myInfo.get('orgname'));
console.log(myInfo.get('description'));

document.querySelector("#memberDetails").innerHTML = `
<h3>${myInfo.get('membership')} member</h3>
<img src="images/coaldale_c_logo.svg" alt="Coaldale chamber of commerce logo">
<p><strong>Name:</strong> ${myInfo.get('fname')} ${myInfo.get('lname')}</p>
<p><strong>Organization Title:</strong> ${myInfo.get('orgtitle')}</p>
<p><strong>Cell#:</strong> ${myInfo.get('phone')}</p>
<p><strong>Email Address:</strong> ${myInfo.get('email')}</p>
`;

document.querySelector("#orgDetails").innerHTML = `
<p><strong>Company Name:</strong> ${myInfo.get('orgname')}</p>
<p><strong>Company Description:</strong> ${myInfo.get('description')}</p>
`;