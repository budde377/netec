/* ---------------------------------------------
 Contact form
 --------------------------------------------- */
$(document).ready(function(){
    $("#submit_btn").click(function(){

        //get input field values
        var company_name = $('input[name=name]').val();
        var user_email = $('input[name=email]').val();
        var user_number = $('input[name=number]').val();
        var user_name = $('input[name=name]').val();
        var company_employees = $('select[name=options]').val();
        var company_country = $('input[name=country]').val();

        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if (company_name == "") {
            $('input[name=name]').css('border-color', '#e41919');
            proceed = false;
        }
        if (user_email == "") {
            $('input[name=email]').css('border-color', '#e41919');
            proceed = false;
        }

        if (user_number == "") {
            $('input[name=number]').css('border-color', '#e41919');
            proceed = false;
        }

        if (user_name == "") {
            $('input[name=name]').css('border-color', '#e41919');
            proceed = false;
        }
        if (company_employees == "Antal ansatte") {
            $('select[name=options]').css('border-color', '#e41919');
            proceed = false;
        }
        if (company_country == "") {
            $('input[name=country]').css('border-color', '#e41919');
            proceed = false;
        }

        return proceed;
    });

    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").keyup(function(){
        $("#contact_form input, #contact_form textarea").css('border-color', '');
        $("#result").slideUp();
    });

});
