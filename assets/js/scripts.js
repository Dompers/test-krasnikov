$(document).ready(function() {

    const validateField = function (input) {
        let validate = true;

        if ($(input).val() === '' || $(input).find('option:selected').val() === '') {
            validate = 'The field cannot be empty';
        }
        else {
            if ($(input).attr('name') === 'email') {
                let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                validate = ($(input).val().match(validRegex)) ? '' : `Email doesn't correct`;
            }
            else if ($(input).attr('name') === 'phone') {
                let validRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
                validate = ($(input).val().match(validRegex) && $(input).val().length > 10)? '' : `Phone isn't correctly`;
            }
            else if ($(input).attr('name') === 'pass') {
                validate = $(input).val().length > 8 ? '' : 'Password too short. Minimum 8 symbols';
            }
            else if ($(input).attr('name') === 'agree') {
                validate = $(input).prop('checked') ? '' : 'Check it)';
            }
            else {
                validate = $(input).val().length > 3 ? '' : 'Password too short';
            }
        }

        return validate;
    }

    $('form').on("submit", function (e) {
        e.preventDefault();
        
        let $form = $(this);
        let validateForm = true;

        $form.find('input, select').each(function(i, el) {
            let validateFormField = validateField(el);

            $(el).closest('.form-label').removeClass('form-label-error').find('.form-error').text('')

            if (validateFormField !== '') {
                $(el).closest('.form-label').addClass('form-label-error').find('.form-error').text(validateFormField);
                validateForm = false;
            }
        }).promise().done( function(){

            if (validateForm) {
                let url = $(this).attr('action');

                $.ajax({
                    type: 'post',
                    url: url,
                    data: $('form').serialize(),
                    success: function () {
                        alert('form was submitted');
                    }
                });
            }
        });
    });

    $('.form select').select2({
        dropdownParent: $('#city-label .form-input-wrapper')
    });

    $('.form .form-show-pass').on('click', function () {
        let formLabel = $(this).closest('.form-label');
        formLabel.hasClass('show') ?
            formLabel.removeClass('show').find('input').attr('type', 'password') :
            formLabel.addClass('show').find('input').attr('type', 'text');
    });
});


