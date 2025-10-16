// 메뉴
$(function () {
    $(".menu").on("mouseenter", function () {
        $(this).find(".sub-menu-list").stop().slideDown(300);
    });
    $(".menu").on("mouseleave", function () {
        $(this).find(".sub-menu-list").stop().slideUp(300);
    });
});