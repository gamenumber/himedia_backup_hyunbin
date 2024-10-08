$(function () {
    // 대상을 변수에 저장
    const $dim = $(".dim");
    const $videoWrap = $(".video-wrap");
    const $video = $videoWrap.find(".video iframe");
    const $caption = $(".caption");
    const $btnClose = $(".btn-close");

    const $videoItem = $(".video-list li");

    // 비디오 리스트를 선택했을 때
    $videoItem.on("click", function () {
        // console.log($videoItem, $(this));
        const videoLink = $(this).attr("data-link");

        // iframe의 src 값으로 videoLink를 전달
        $video.arrt("src", videoLink);

        // 팝업창 띄우기
        $dim.fadeIn();
        $videoWrap.addClass("active");

        console.log(videoLink);
    });

    $btnClose.on("click", function () {
        $dim.fadeOut();
        $videoWrap.removeClass("active");
    });

    // setTimeout(동작, 시간)
    // setTimeout(function () {
    //     $dim.fadeIn();
    //     $videoWrap.addClass("active");
    // }, 3000);
});
