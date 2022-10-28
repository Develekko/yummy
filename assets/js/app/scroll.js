import { displayContact } from "./contact.js";
import { getCategory } from "./mealsData.js";
import { displaySearch } from "./SearchMeal.js";
import { closeNav } from "./sideNav.js";
export function scroll()
{
    $(window).scroll(backToTop);
    function backToTop()
    {
        if (window.pageYOffset > 100) {
            $('#back-to-top').addClass("active");
            } else {
            $('#back-to-top').removeClass("active");   
        }
    }
}
export function getMovieAttr()
{
    if($(this).attr("attr") == "categories.php")
    {
        $('.loading').fadeIn(200);
        getCategory("categories.php");
        closeNav();
        $('.loading').fadeOut(1000);
        
    }
    else if($(this).attr("attr") == "list.php?a=list")
    {   $('.loading').fadeIn(200);
        getCategory('list.php?a=list');
        closeNav();
        $('.loading').fadeOut(1000);
    }
    else if($(this).attr("attr") == "list.php?i=list")
    {   $('.loading').fadeIn(200);
        getCategory('list.php?i=list');
        closeNav();
        $('.loading').fadeOut(1000);
    }
    else if($(this).attr("attr") == "search")
    {   $('.loading').fadeIn(200);
        displaySearch();
        closeNav();
        $('.loading').fadeOut(1000);
    }
    else if($(this).attr("attr") == "contact")
    {   $('.loading').fadeIn(200);
        displayContact();
        closeNav();
        $('.loading').fadeOut(1000);
    }
}
export function topZero()
{
    $('html, body').animate({scrollTop:0}, 1000);
}