$(document).ready(function () {
    $('.form__file').each(function () {
        var $input = $(this),
            $label = $input.next('.form__btn-load'),
            labelVal = $label.html();

        $input.on('change', function (element) {
            var fileName = '';
            if (element.target.value) fileName = element.target.value.split('\\').pop();
            fileName ? $label.addClass('has-file').find('.form__btn-load').html(fileName) : $label.removeClass('has-file').html(labelVal);
        });
    });

    $('#addModel').on('click', function () {
        $('#form').fadeIn().show();
    });

    $('.form__close').on('click', function () {
        $('#form').fadeIn().hide();
        $('.form__btn-load').removeClass('has-file');
    });

    $('#buttonLoadFiles').on('click', function () {
        $('#form').fadeIn().hide();
        $('.form__btn-load').removeClass('has-file');
    });

    $('#gridPannelTitle').on('click', function () {
        $('#gridPannel').toggle('fade');
        $('#gridPannelLink').toggleClass('add-Color');
    });

    $('#xyzPannelTitle').on('click', function () {
        $('#xyzPannel').toggle('fade');
        $('#xyzPannelLink').toggleClass('add-Color');
    });

    $('#lightPannelTitle').on('click', function () {
        $('#lightPannel').toggle('fade');
        $('#lightPannelLink').toggleClass('add-Color');
    });

    $('#baseObjPannelTitle').on('click', function () {
        $('#baseObjPannel').toggle('fade');
        $('#baseObjPannelLink').toggleClass('add-Color');
    });

    $('#animationPannelTitle').on('click', function () {
        $('#animationPannel').toggle('fade');
        $('#animationPannelLink').toggleClass('add-Color');
    });

    $('#objPlaneTitle').on('click', function () {
        $('#objPlane').toggle('fade');
        $('#objPlaneLink').toggleClass('add-sub-Color');
    });

    $('#objBaseBoxTitle').on('click', function () {
        $('#objBaseBox').toggle('fade');
        $('#objBaseBoxLink').toggleClass('add-sub-Color');
    });

    $('#objConeTitle').on('click', function () {
        $('#objCone').toggle('fade');
        $('#objConeLink').toggleClass('add-sub-Color');
    });

    $('#objSphereTitle').on('click', function () {
        $('#objSphere').toggle('fade');
        $('#objSphereLink').toggleClass('add-sub-Color');
    });

    $('#objCylinderTitle').on('click', function () {
        $('#objCylinder').toggle('fade');
        $('#objCylinderLink').toggleClass('add-sub-Color');
    });

    $('#modelPannelTitle').on('click', function () {
        $('#model').toggle('fade');
        $('#modelPannelLink').toggleClass('add-Color');
    });
});