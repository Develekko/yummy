import { display } from "./mealsData.js";
export async function filterByCategory(CatId)
{
    let api = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${CatId}`;
    let myHttp = await fetch(`${api}`);
    if (myHttp.ok && 400 != myHttp.status) {
        let Data = await myHttp.json();
        display(Data);
    }
}
export async function filterByArea(AreaId)
{
    let api = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${AreaId}`;
    let myHttp = await fetch(`${api}`);
    if (myHttp.ok && 400 != myHttp.status) {
        let Data = await myHttp.json();
        display(Data);
    }
}
export async function filterByIngredients(IngredientsId)
{
    let api = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${IngredientsId}`;
    let myHttp = await fetch(`${api}`);
    if (myHttp.ok && 400 != myHttp.status) {
        let Data = await myHttp.json();
        display(Data);
    }
}

