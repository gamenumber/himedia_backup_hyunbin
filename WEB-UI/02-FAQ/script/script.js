$(function () {
    // 대상을 변수에 저장
    const $question = $(".faq-wrap > ul > li");
    const $answer = $(".answer-wrap");
    const duration = 300;

    $question.on("click", function () {
        // ⛳ $(this)로 구별 siblings
        $(this).siblings().removeClass("on");
        // $(this).toggleClass("on");
        // 선택한 놈을 기준으로 on클래스를 토글
        $(this).toggleClass("on");

        // 선택한 놈의 형제, 하위에 있는 답변은 올리고
        $(this).siblings().find($answer).slideUp(duration);

        // $(this).find($answer).slideToggle(duration);
        // 선택한 놈의 자손중 답변을 찾아서 슬라이드 토글
        $(this).find($answer).stop().slideToggle(duration);
    });
});
