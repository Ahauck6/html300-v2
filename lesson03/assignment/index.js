//The JSON data
const cardJSON = `[
    {
      "name": "Paolo Maldini",
      "jobTitle": "Front End Developer",
      "company": "Web Weavers",
      "experience": "3 years",
      "school": "University of Washington",
      "major": "Marketing",
      "email": "paolo@example.com",
      "linkedInUrl": "paolo.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "Node", "Express"
      ]
    },
    {
      "name": "Barbara Bonansea",
      "jobTitle": "Software Engineer",
      "company": "Excellence in the Cloud",
      "experience": "12 years",
      "school": "University of Southern California",
      "major": "Computer Science",
      "email": "barbara@example.com",
      "linkedInUrl": "barbara.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "JavaScript", "C", "Go"
      ]
    },
    {
      "name": "Javier Hernandez",
      "jobTitle": "User Experience Engineer",
      "company": "Web Sites and More",
      "experience": "5 years",
      "school": "Seattle University",
      "major": "Performing Arts",
      "email": "javier@example.com",
      "linkedInUrl": "javier.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS"
      ]
    },
    {
      "name": "Maribel Dominguez",
      "jobTitle": "Front End Engineer",
      "company": "Bits and Bytes",
      "experience": "6 years",
      "school": "University of Washington",
      "major": "Mechanical Engineering",
      "email": "maribel@example.com",
      "linkedInUrl": "maribel.linkedinprofile.com",
      "codeLanguages": [
         "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
      ]
    }
  ]`; 

   //Parse data into objects 
   const card = JSON.parse(cardJSON);

   //Location where card html will be added
   const container = document.querySelector('.template-hook');
   
   //Loop through card profiles
   card.forEach(function(profile){
    let list = document.createElement('div');
    //list.classList.add('main');
    //HTML to append
    list.innerHTML = `
      <div class="main">
        <div class="container-one">
            <img src="img/headshot.jpg" alt="Photo of a dog in a black bow tie.">
            <div class="name">${profile.name}</div>
            <div class="job">${profile.jobTitle}</div>
        </div>
        <div class="container-two">
            <ul>
                <li><span class="list">Company: </span>${profile.company}</li>
                <li><span class="list">Experience: </span>${profile.experience}</li>
                <li><span class="list">School: </span>${profile.school}</li>
                <li><span class="list">Major: </span>${profile.major}</li>
                <li><span class="list">Email: </span>${profile.email}</li>
            </ul>
            <div class="linkedin">
            <img class="logo" src="img/linkedin.svg" alt="Linkedin Logo">
            <p class="link">${profile.linkedInUrl}</p>
            </div>
        </div>
      </div>
      `;
      
      //Add HTML to page
      container.append(list);

   }) 


   