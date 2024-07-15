$(window).on('load', function() {

    $('#burger').click(function () {
        $('#menu').addClass('open');
    });

    $('#menu').find('*').click(function () {
        $('#menu').removeClass('open');
    });


    let loader = $('.loader');

    const want = $('#want');
    let name = $('#name');
    let phone = $('#phone');

    $('#submit').click(function () {

        let hasError = false;
        let input = $('.input')
        input.css('border-color', '#770B1DFF');

        $('.error-input').hide();

        if (!want.val()) {
            want.next().show();
            want.css('border-color', 'red');
            hasError = true;
        }

        if (!name.val()) {
            name.next().show();
            name.css('border-color', 'red');
            hasError = true;

        }
        if (!phone.val()) {
            phone.next().show();
            phone.css('border-color', 'red');
            hasError = true;
        }


        if (!hasError) {
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout ",
                data: {want: want.val(), name: name.val(), phone: phone.val()}
            })
                .done(function (msg) {
                    loader.hide();
                    if (msg.success) {
                        $('.form')[0].reset()
                        $('.form').fadeOut();
                        $('#show').fadeIn();
                        setTimeout(() => {
                            $('.form').fadeIn();
                            $('#show').fadeOut();
                        }, 2000);
                    } else {
                        alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ")
                    }
                });
        }
    });

    $('#choose-macaroon').click(function () {
        $('.choose')[0].scrollIntoView({behavior: "smooth"});
    })


    let buttons = $('.item-button')
    buttons.click((e) => {
        const text = $(e.target).parents('.item').find('.item-title').text().toUpperCase().trim();
        $('#want').val(text);
        $('#form')[0].scrollIntoView({behavior: "smooth"});
    })
})