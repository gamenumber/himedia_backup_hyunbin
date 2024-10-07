$(function () {
    // 대상을 변수에 저장
    const $tabMenu = $(".tab-menu > li");
    const $tabCon = $(".tab-con-item");

    // console.log($tabMenu, $tabCon);

    // 처음 세팅
    tabAction(0);

    // 탭메뉴를 클릭했을 때
    $tabMenu.on("click", function (e) {
        // a의 기능 막기
        e.preventDefault();

        // 선택한 탭메뉴의 인덱스 구하기
        const tabIdx = $(this).index();
        console.log(tabIdx);

        tabAction(tabIdx);
    });

    // 공통의 동작을 함수로 정의 (여기저기에서 쓰기 위해서 이벤트 바깥에)
    function tabAction(index) {
        // // 탭메뉴 활성화
        $tabMenu.removeClass("on");
        $tabMenu.eq(index).addClass("on");
        // // 인덱스에 해당하는 $tabCon 보이기
        $tabCon.hide();
        $tabCon.eq(index).show();
    }
});
