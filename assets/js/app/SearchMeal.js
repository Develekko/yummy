import { display } from "./mealsData.js";
export async function getMeal(term) {
    let api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`;
    let myHttp = await fetch(`${api}`);
    if (myHttp.ok && 400 != myHttp.status) {
        let Data = await myHttp.json();
        display(Data);
    }
}
async function getFirstLetter(term) {
    let api = `https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`;
    let myHttp = await fetch(`${api}`);
    if (myHttp.ok && 400 != myHttp.status) {
        let Data = await myHttp.json();
        display(Data);
    }
}
export function displaySearch()
{
    let term = `
        <div class="col-md-6 py-5">
            <input id="search" type="search" placeholder="Search By Name"  class="form-control w-75 mx-auto bg-transparent rounded-0 text-white shadow-none border-white px-3 ByName">
        </div>
        <div class="col-md-6 py-5">
            <input id="search" type="search" placeholder="Search By Frist Letter" maxlength="1" class="form-control w-75 mx-auto bg-transparent rounded-0 text-white shadow-none border-white px-3 ByFristLetter">
        </div>
    `
    $('#contact').html(null);
    $('#hero .box').html(null);
    $('#searchBox .row').html(term);
    $('#searchBox .row').addClass("animate__fadeIn");
    $('.ByName').on("input",  e => getMeal(e.target.value));
    $('.ByFristLetter').on("input", e => getFirstLetter(e.target.value));
}