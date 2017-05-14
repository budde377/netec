/* ---------------------------------------------
 Contact form
 --------------------------------------------- */
$(document).ready(function(){
    $("#contact_form").submit(function(event){
        event.preventDefault()
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

        if (proceed) {
          //data to be sent to server
          var post_data = {
            'name': user_name,
            'email': user_email,
            'phone': user_number,
            '_replyto': user_email,
            'company_name': company_name,
            'company_employees': company_employees,
            'company_country': company_country
          }
          $.ajax({
            url: 'https://formspree.io/'+$('input[name=receiver]').val(),
            method: 'POST',
            data: post_data,
            dataType: 'json'
          })
          var output = '<div class="success">Beskeden er sendt!</div>'

          //reset values in all input fields
          $('#contact_form input').val('')
          $('#contact_form textarea').val('')
          $('#result').hide().html(output).slideDown()

        }
    });

    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").keyup(function(){
        $("#contact_form input, #contact_form textarea").css('border-color', '');
        $("#result").slideUp();
    });

});
