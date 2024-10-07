$(function () {
    // 대상을 변수에 저장
    const $question = $(".faq-wrap > ul > li");
    const $answer = $(".answer-wrap");
    const duration = 300;

    $question.on("click", function () {
        // ⛳ $(this)로 구별
        $(this).toggleClass("on");
    });
});
