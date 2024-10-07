$(function () {
    // 대상을 변수에 저장
    const $tabMenu = $(".tab-menu > li");
    const $tabCon = $(".tab-con-item");

    // console.log($tabMenu, $tabCon);

    // 처음 세팅
    $tabMenu.removeClass("on");
    $tabMenu.eq(0).addClass("on");
    $tabCon.hide();
    $tabCon.eq(0).show();

    // 탭메뉴를 클릭했을 때
    $tabMenu.on("click", function (e) {
        // a의 기능 막기
        e.preventDefault();

        // 선택한 탭메뉴의 인덱스 구하기
        const tabIdx = $(this).index();
        console.log(tabIdx);

        // 탭메뉴 활성화
        $tabMenu.removeClass("on");
        $tabMenu.eq(tabIdx).addClass("on");

        // 인덱스에 해당하는 $tabCon 보이기
        $tabCon.hide();
        $tabCon.eq(tabIdx).show();
    });
});
