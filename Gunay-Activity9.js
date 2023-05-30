$(document).ready(function () {
    // preload images
    $("#image_list a").each(function () {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // set up event handlers for links    
    $("#image_list a").click(function (evt) {
        // Prevent default link behavior
        evt.preventDefault();

        // Store the clicked link
        var clickedLink = $(this);

        // Fade out the caption and image over one second
        $("#caption, #image").fadeOut(1000, function () {
            // Callback function: Executed after the fadeOut animation completes

            // Update the caption and image source
            var imageURL = clickedLink.attr("href");
            var caption = clickedLink.attr("title");
            $("#caption").text(caption).show();

            // Hide the image, update the source, and fade it in
            $("#image").hide().attr("src", imageURL).fadeIn(1000);
        });
    }); // end click

    // move focus to first thumbnail
    $("li:first-child a").focus();
}); // end ready
