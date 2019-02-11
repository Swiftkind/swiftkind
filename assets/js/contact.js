$(document).ready(function () {

    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    $('.btn-submit').on('click', function (e) {
        var csrftoken = getCookie('csrftoken');
        var data = $('.contact-form').serialize();

        // clear the error containers
        $.each($.find('span.error'), function (i, o) { $(o).text(""); });

        $.ajax({
            data: data,
            headers: {'X-CSRFToken': csrftoken},
            url: '/api/messages/send/',
            type: "POST",
            success: function () {
                setTimeout(function () {
                    $('#thankyouModal').modal('show');
                }, 500);
                $('.contact-form').trigger("reset");
            },
            error: function (err) {

                $.each(err.responseJSON, function (k, v) {
                    $('input[name='+ k +']').parent().find('.error').text(v);
                });

            }
        });
    });

});