const lodeUser = () => { 
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

 displayUser = user =>{
   const genderTag = document.getElementById('gender')
   genderTag.innerHTML = user.results[0].gender;

   const name = user.results[0].name.first + ' ' + user.results[0].name.last;
    document.getElementById('name').innerHTML=name;

    const titleTag = document.getElementById('title')
    titleTag.innerHTML = user.results[0].title;

    console.log(user.results[0].title);
}


lodeUser();