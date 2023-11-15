var today = new Date();
var thisYear = today.getFullYear();
var skills = [
    'JavaScript',
    'GitHub',
    'Excel',

];


const footer = document.querySelector ('footer');

const copyright = document.createElement('p');

copyright.innerHTML = `Kadine Stephens &copy; ${thisYear}`;

footer.appendChild(copyright);


const skillsSection = document.querySelector('#skills');


for (let i = 0; i < skills.length; i++) {
    var skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsSection.appendChild(skill);

}
