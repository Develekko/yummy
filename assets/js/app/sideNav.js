export function openNav()
{
    if ($("nav").css("margin-left") == "250px") {
        closeNav();
    } else {
        $(".side-nav").css("margin-left","0px");
        $("nav").css("margin-left", "250px");
        $('.menu ul li').animate({"paddingTop":"25px","opacity":"1"},1000);
        $('.nav-menu').html('<i class="fa-solid fa-xmark"></i>');
        $('.copyrights p a').addClass('animate__flipInX animate__delay-1s');
    }
}
export function closeNav() 
{
    $('.menu ul li').animate({"paddingTop":"250px","opacity":"0"},1000);
    $(".side-nav").css("margin-left","-250px");
    $("nav").css("margin-left", "0px");
    $('.nav-menu').html('<i class="fa-solid fa-align-justify"></i>');
    $('.copyrights p a').removeClass('animate__flipInX animate__delay-1s');
}