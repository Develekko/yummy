import { openNav } from "./app/sideNav.js";
import { home } from "./app/mealsData.js";
import { getMovieAttr, scroll, topZero} from "./app/scroll.js";
import { getMeal } from "./app/SearchMeal.js";
scroll();
getMeal('');
$('.nav-menu').click(openNav);
$('.nav-logo img').click(home)
$('.menu a').click(getMovieAttr);
$("#back-to-top").click(topZero)
$(document).ready(function () {
    $('.loading').fadeOut(1000);
})