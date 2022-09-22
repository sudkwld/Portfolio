$(function () {
    $("#subtitle > div > i").mouseenter(function () {
        $("#subtitle > div > i > span").stop().hide();
        $(this).find("span").stop().fadeIn();
        $(this).css({
            color: "#fff"
        });
    }).mouseleave(function () {
        $("#subtitle > div > i > span").stop().hide();
        $(this).css({
            color: "#000"
        });
    });
});