const today = new Date();
const thisYear = today.getFullYear();
const skills = [
    'JavaScript',
    'GitHub',
    'CSS',
    'HTML'

];


const footer = document.querySelector ('footer');

const copyright = document.createElement('p');

copyright.innerHTML = `Kadine Stephens &copy; ${thisYear}`;

footer.appendChild(copyright);


const skillsSection = document.querySelector('#skills');


for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsSection.appendChild(skill);

}
     
const messageForm = document.getElementById('leave_message');
messageForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const userName = event.target.querySelector('[name="usersName"]').value;
    const userEmail = event.target.querySelector('[name="usersEmail"]').value;
    const userMessage = event.target.querySelector('[name="usersMessage"]').value;

    console.log('Name:', userName);
    console.log('Email:', userEmail);
    console.log('Message:', userMessage);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage= document.createElement('li');
    newMessage.innerHTML =`<a href="mailto:${userEmail}">${userName}</a><span>${userMessage}</span>`;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.type = 'button';

    
    removeButton.addEventListener('click', function(event) {
        const entry = event.target.parentNode;
        entry.remove();
    });

    messageList.append(newMessage);
    newMessage.appendChild(removeButton);
    event.target.reset();
   
});
//List.appendChild(project);
    
fetch('https://api.github.com/users/ksteph10/repos')
  .then(function (response) {
    return response.json(); 
})

  .then(repositories => { 
  const projectSection = document.getElementById("projects");
  const projectList = projectSection.querySelector("ul");

  for (var index = 0; index < repositories.length; index++) {
       const project = document.createElement("li");
       const projectLink = document.createElement("a");

       projectLink.href = repositories[index]["html_url"];
       projectLink.target = "_blank";
       project.innerText = repositories[index]["name"];
       
       project.appendChild(projectLink);
       projectList.appendChild(project);
  }
  
    });
    

