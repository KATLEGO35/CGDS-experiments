$(document).ready(function(){
    $('.image').click(function() {
        var imageId = $(this).attr('data-image1Id');

        $(this).animate({
            height: '250px'
        }, function(){
            $(this).attr("src", "../images/mic.jpg");
        }                );
    });
});

