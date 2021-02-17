let days= new Date();
console.log(days);

const times= document.getElementById('times');
 let newTime= document.createElement('h3');
 newTime.innerText= days;
 times.appendChild(newTime);
  