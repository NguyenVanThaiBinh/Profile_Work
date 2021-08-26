// Animations
AOS.init({
    anchorPlacement: "top-left",
    duration: 1000,
});

// Add your javascript here
// Video
$(document).ready(function() {
    $(".thevideo")
        .on("mouseover", function(event) {
            this.play();
        })
        .on("mouseout", function(event) {
            this.pause();
        });
});

$(".avata_zoom").hover(
    function() {
        $("#avata_cv").attr("title", "That better?");
    },
    function() {
        // change to any color that was previously used.
        $("#ava_msg").css("display", "none");
    }
);