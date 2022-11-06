$(document).ready(function() {
    $('.secciones div').hide();
    $('.secciones div:first').show();

    $('ul.tabs li a').click(function() {
        $('.secciones div').hide();
        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });
});