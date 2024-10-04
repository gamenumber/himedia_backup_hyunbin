$(function () {
    // 대상을 변수에 저장
    const $menu = $(".gnb > li");
    const $submenu = $(".submenu");
    const duration = 300; // 0.3초

    // 메뉴에 마우스가 들어왔을 때
    $menu.on("mouseenter", function () {
        // .stop() : 현재 진행 중인 애니메이션 즉시 중지
        $(this).find($submenu).stop().slideDown(duration);
        $(this).addClass("on");
    });
    // 메뉴에 마우스가 나갔을 때
    $menu.on("mouseleave", function () {
        // 테스트 주석
        $submenu.stop().slideUp(duration);
        $menu.removeClass("on");
    });
});
