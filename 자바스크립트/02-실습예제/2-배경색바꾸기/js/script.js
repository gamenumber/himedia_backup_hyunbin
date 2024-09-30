// 코드를 추가해서, 순서가 달라도 head테그에서 관리 할 수 있음 -> 구성은 아는데 파일까지는 파악하지 못함
// document.addEventListener("DOMContentloaded", function () {
//     // 대상을 변수에 저장
//     const $body = document.body;
//     const colorItem =
//         document.querySelectorAll(".wrap > ul >  li"); /* 유사배열 */
//     console.log(colorItem[1]);

//     for (let i = 0; i < colorItem.length; i++) {
//         colorItem[i].addEventListener("click", function () {
//             // 선택한 요소의 data-color 값을 가져와서 colorCode에 담기
//             const colorCode = colorItem[i].getAttribute("data-color");
//             // body의 배경색을 colorCode 값으로 설정
//             $body.style.backgroundColor = colorCode;
//         });
//     }
// });

// 1. 선택이 더 단순하고 편하다!

$(function () {
    const $body = $("body");
    const colorItem = $(".wrap > ul >  li");

    colorItem.on("click", function () {
        const colorCode = $(this).attr("data-color");
        $body.css("background-color", colorCode);
    });
});
