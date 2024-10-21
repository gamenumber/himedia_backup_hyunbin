$(function () {
    // 대상을 변수에 저장
    const $window = $(window);
    const $cursor = $(".cursor");

    // 마우스가 움직일 때
    $window.on("mousemove", function (e) {
        // 마우스 x, y 좌표값을 받아서
        const mouseX = e.pageX;
        const mouseY = e.pageY;

        // 가짜 마우스의 left, top 값으로 적용
        $cursor.css({
            left: mouseX,
            top: mouseY,
        });
    });

    // $window.on("mousedown", function () {
    //     $cursor.addClass("click");
    // });
    // $window.on("mouseup", function () {
    //     $cursor.removeClass("click");
    // });
    $window.on("mousedown", () => $cursor.addClass("click"));
    $window.on("mouseup", () => $cursor.removeClass("click"));
});
