import { cardHoverIn ,cardHoverOut } from "./cardAnimations.js";
import { closeNav } from "./sideNav.js";
import { topZero } from "./scroll.js";
import { filterByCategory,filterByArea,filterByIngredients } from "./mealFiltering.js";
import { getMeal } from "./SearchMeal.js";
window.getMealDetails = getMealDetails;
window.filterByCategory = filterByCategory;
window.filterByArea = filterByArea;
window.filterByIngredients = filterByIngredients;
let Data,
Details,
meals,
categories,
Area,
ingredients;
async function getMealDetails(mealID) {
    let api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
    let myHttp = await fetch(`${api}`);
    if (myHttp.ok && 400 != myHttp.status) {
        let Data = await myHttp.json();
        $('.loading').fadeIn(100);
        mealDetails(Data);
        $('.loading').fadeOut(1000);
    }
}
async function getCategory(term) {
    let api = `https://www.themealdb.com/api/json/v1/1/${term}`;
    let myHttp = await fetch(`${api}`);
    if (myHttp.ok && 400 != myHttp.status) {
        Data = await myHttp.json();
        if(term == "categories.php")
        {
            displayCategories(Data);
        }
        else if(term == "list.php?a=list")
        {
            displayArea(Data);
        }
        else if(term == "list.php?a=list")
        {   
            displayArea(Data);
        }
        else if(term == "list.php?i=list")
        {
            displayIngredients(Data);
        }
        
        $('#contact').html(null);
    }
}
function display(Data)
{
    meals = new Map(Object.entries(Data.meals));
    let term = '';
    for(let [key,value] of meals)
    {
         term += `
         <div class="col-lg-3 col-md-6 col-sm-12 animate__animated">
         <div onclick="getMealDetails('${value.idMeal}')" class="item overflow-hidden position-relative">
         <div class="cardImage d-flex justify-content-center">
                 <img src="${value.strMealThumb}" class="img-fluid">
             </div>
             <div class="overlay overflow-hidden">
                 <h1 class="animate__animated title">${value.strMeal}</h1>
             </div>
         </div>
     </div>
    `
        $('#contact').html(null);
        $('#hero .box').html(term);
        $('#hero .box div').addClass("animate__fadeIn");
        $('#hero .item').mouseenter(cardHoverIn);
        $('#hero .item').mouseleave(cardHoverOut);
    }
}
function displayCategories(Data)
{
    categories = new Map(Object.entries(Data.categories));
    let term = '';
    for(let [key,value] of categories)
    {
         term += `
         <div class="col-lg-3 col-md-6 col-sm-12 animate__animated">
         <div onclick="filterByCategory('${value.strCategory}')" class="item overflow-hidden position-relative">
         <div class="cardImage d-flex justify-content-center">
                 <img src="${value.strCategoryThumb}" class="img-fluid">
             </div>
             <div class="overlay overflow-hidden">
                 <h1 class="animate__animated title">${value.strCategory}</h1>   
                 <p class="animate__animated desc text-center">${value.strCategoryDescription.slice(0,50)}</p> 
             </div>
         </div>
     </div>
    `
        $('#hero .box').html(term);
        $('#searchBox .row').html(null);
        $('#hero .box div').addClass("animate__fadeIn");
        $('#hero .item ').mouseenter(cardHoverIn);
        $('#hero .item').mouseleave(cardHoverOut);
    }
}
function displayArea(Data)
{
    Area =  new Map(Object.entries(Array.from(Data.meals).splice(0,25)));

    let term = '';
    for(let [key,value] of Area)
    {
         term += `
         <div class="col-lg-3 col-md-6 col-sm-12 animate__animated">
         <div onclick="filterByArea('${value.strArea}')" class="item overflow-hidden position-relative text-center py-5">
            <i class="fa-solid fa-city fa-3x text-danger"></i>
            <h2 class="animate__animated title">${value.strArea}</h2>  
         </div>
     </div>
    `
        $('#hero .box').html(term);
        $('#searchBox .row').html(null);
        $('#hero .box div').addClass("animate__fadeIn");
        $('#hero .item ').mouseenter(cardHoverIn);
        $('#hero .item').mouseleave(cardHoverOut);
    }
}
function displayIngredients(Data)
{
    ingredients = new Map(Object.entries(Array.from(Data.meals).splice(0,20)));
    let term = '';
    for(let [key,value] of ingredients)
    {    
         term += `
         <div class="col-lg-3 col-md-6 col-sm-12 animate__animated">
         <div onclick="filterByIngredients('${value.strIngredient}')" class="item overflow-hidden position-relative text-center py-4 px-2">
         <i class="fa-solid fa-bowl-food fa-3x"></i>
         <h2 class="animate__animated title h3">${value.strIngredient}</h2>    
         <p class="animate__animated desc">${value.strDescription.slice(0,50)}</p>
         </div>
     </div>
    `
        $('#hero .box').html(term);
        $('#searchBox .row').html(null);
        $('#hero .box div').addClass("animate__fadeIn");
        $('#hero .item ').mouseenter(cardHoverIn);
        $('#hero .item').mouseleave(cardHoverOut);
    }
}
function mealDetails(Data) {
    Details = new Map(Object.entries(Data));
    let term = '';
    let tagsStr = "";
    let recipes = "";
    for(let [key,value] of Details)
    {
        for (let i = 1; i < 20; i++) {
            if (value[0][`strIngredient${i}`] != "") {
                recipes += `
                <span class="bg-success p-2 rounded animate__animated animate__flipInX animate__delay-1s"">${value[0][`strMeasure${i}`]} ${value[0][`strIngredient${i}`]}</span>
                `
            }
        }

        if(value[0].strTags != null)
        {   let tags = value[0].strTags.split(",");
            for (let i = 0; i < tags.length; i++) {
                tagsStr += `<span class="bg-danger p-2 rounded animate__animated animate__flipInX animate__delay-1s"">${tags[i]}</span>` 
            }
        }
        term = `
        <div class="col-md-4 text-center mealDetails">
        <div class="mealImage animate__animated animate__fadeIn">
        <img class="img-fluid" src="${value[0].strMealThumb}">
        </div>
        <h2 class="h1 mt-3 animate__animated animate__flipInX animate__delay-1s">${value[0].strMeal}</h2>
        </div>
        <div class="col-md-8">
        <h2 class="animate__animated animate__fadeInDown">Instructions</h2>
        <p class="animate__animated animate__fadeIn">${value[0].strInstructions}</p>
        <p> <span class="fw-bold">Area</span> : <span class="text-info" role="button" onclick="filterByArea('${value[0].strArea}')">${value[0].strArea}</span></p>
        <p><span class="fw-bold">Category</span> : <span class="text-info" role="button" onclick="filterByCategory('${value[0].strCategory}')">${value[0].strCategory}</span></p>
        <div class="d-flex flex-wrap gap-2" id="recipes">
        </div>
        <div class="d-flex flex-wrap gap-2 my-4" id="tags">
        </div>
        <div class=" d-flex gap-2">
        <a class="source btn" target="_blank" href="${value[0].strSource}">Source</a>
        <a class="youtube" target="_blank" href="${value[0].strYoutube}"><i class="fa-brands fa-youtube"></i></a>
        </div>
    </div>
        `

        $('#hero .box').html(term);
        $('#tags').html(`<h3>Tags :</h3>${tagsStr}`);
        $('#recipes').html(`<h3>Recipes :</h3>${recipes}`);
        topZero();
    }
}
function home()
{ 
    $('.loading').fadeIn(200);
    getMeal('');
    closeNav();
    $('#searchBox .row').html(null);
    $('.loading').fadeOut(1000);
}
export{getMealDetails,display,getCategory,displayCategories,displayArea,displayIngredients,mealDetails,home}
