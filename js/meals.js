const loadMeals = (searchText) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
   console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    // console.log(meals)
    // stop 1: container ekement
    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.innerText = '';
    meals.forEach(meal => {
        console.log(meal)
        // step 2: creat child for each element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col')
        // step-3 set content of the child
        mealDiv.innerHTML = `
        div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
         
            <button onclick="loadDetailsMeals(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
            details
            </button>
            </div>
        </div>    
        `;

        // step-4: appendChild
        mealsContainer.appendChild(mealDiv);
    })
        
}

const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    // search meals 
    console.log(searchText);
    loadMeals(searchText);
}

const loadDetailsMeals = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetailsMeal(data.meals[0]));
}

const displayDetailsMeal = meal => {
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
    const mealDetails = document.getElementById('mealDetails-body');
    mealDetails.innerHTML = `
    
    <img class="img-fluid" src="${meal.strMealThumb}" >
    `
}

loadMeals('rice');