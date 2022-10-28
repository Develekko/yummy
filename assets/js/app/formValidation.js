export function validations()
{
    $('#contact input').on("input",function(){
        $('#contact input').on("input",function(){
            if(checkClassError()) // == true
            {
                $(`form button`).mouseenter(formButtonValidation);
                $('form button').addClass('animate__shakeX bg-danger buttonFormActive');
                $('form button').css({'cursor':'default','userSelect':'none'});
            }
            else
            {
                $('form button').removeClass('animate__shakeX bg-danger buttonFormActive');
                $(`form button`).css({"marginLeft":"0px"});
                $('form button').off('mouseenter', formButtonValidation);
                $('form button').css('cursor','pointer');
            }
            })
        function checkClassError(){
            if($('#contact .error').hasClass('animate__flipInX'))
            {
               return true;
            }
            else
            {
              return false;
            }
        }
    })
    $('#contact #name').on("input",function(){
        const regex = /^[a-zA-z\s]{1,36}$/;
        const $error =  $('#name').next();
        const $this = $(this);
        if($(this).val() == "")
        {
          hideError($error,$this);
        }
        else if(regex.test($(this).val()))
        {
          hideError($error,$this);
        }
        else
        {
          $error.html("Invalid Name , only Characters allowed");
          ShowError($error,$this);
        }
    })
    $('#contact #email').on("input",function(){
        const regex = /^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{3}$/;
        const $error =  $('#email').next();
        const $this = $(this);
        if($(this).val() == "")
        {
            hideError($error,$this);
        }
        else if(regex.test($(this).val()))
        {
            hideError($error,$this);
        }
        else
        {
          $error.html("Invalid Email , try example@domain.com");
          ShowError($error,$this);
        }
    })
    $('#contact #phone').on("input",function(){
        const regex = /^(02)?(01)[0125][0-9]{8}$/;
        const $error =  $('#phone').next();
        const $this = $(this);
        if($(this).val() == "")
        {
            hideError($error,$this);
        }
        else if(regex.test($(this).val()))
        {
            hideError($error,$this);
        }
        else
        {
          $error.html("Invalid Phone Number");
          ShowError($error,$this);
        }
    })
    $('#contact #age').on("input",function(){
        const regex = /^(1[6-9]|[2-9][0-9]|100)$/;
        const $error =  $('#age').next();
        const $this = $(this);
        if($(this).val() == "")
        {
            hideError($error,$this);
        }
        else if(regex.test($(this).val()))
        {
            hideError($error,$this);
        }
        else
        {
            $error.html("Your age must be over 16+");
          ShowError($error,$this);
        }
    })
    $('#contact #password').on("input",function(){
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const $error =  $('#password').next();
        const $this = $(this);
        if($(this).val() == "")
        {
            hideError($error,$this);
        }
        else if(regex.test($(this).val()))
        {
            hideError($error,$this);
        }
        else
        {
          $error.html("password must contain numbers & letters at least 8 character");
          ShowError($error,$this);
        }
    })
    $('#contact #repassword').on("input",function(){
        const $error =  $('#repassword').next();
        const $this = $(this);
        if($(this).val() == "")
        {
            hideError($error,$this);
        }
        else if($(this).val() == $('#password').val())
        {
            hideError($error,$this);
        }
        else
        {
          $error.html("Password not match");
          ShowError($error,$this);
        }
    })
    $('.showPass').click(function(){
        if ($('#password').attr('type') == "text") 
        {
            $('#password').attr('type','password');
            $('.showPass').html('<i data-show="show" class="fa-solid fa-eye-slash"></i>');
        } else {
            $('#password').attr('type','text');
            $('.showPass').html('<i data-show="show" class="fa-solid fa-eye"></i>');
        }
    })
    $('#password').focus(function(){
        $('.showPass').css("opacity",1);
        $('.showPass').css("bottom",10);
    })
    $(document).click(function(e){
        if($(e.target)[0] == $('#password')[0] || $(e.target).attr('data-show') == $('.showPass i').attr('data-show') )
        {
            $('.showPass').css("opacity",1);
            $('.showPass').css("bottom",10);
        }
        else
        {
            $('.showPass').css("opacity",0);
            $('.showPass').css("bottom",-20);
        }
    })
    function hideError($error,$this)
    {
        $this.css("border-bottom-color", "#CED4DA");
        $error.html(null);
        $error.removeClass('animate__animated animate__flipInX');
        $error.addClass('animate__animated animate__fadeOutUp');
    }
    function ShowError($error,$this)
    {
        $this.css("border-bottom-color", "rgb(214, 46, 51)");
        $error.removeClass('animate__animated animate__fadeOutUp');
        $error.addClass('animate__animated animate__flipInX');
    }
    function formButtonValidation(){
        let buttonLocation =  $(`form button`).css("marginLeft")
            if(buttonLocation == "250px")
            {
               $(`form button`).css({"marginLeft":"0px"});
            }
            else
            {
               $(`form button`).css({"marginLeft":"250px"});
            }
           $(`form button`).keydown(function(e){
               if(e.key == "Enter")
               {
                   event.preventDefault();
               }
           })
    }
}
