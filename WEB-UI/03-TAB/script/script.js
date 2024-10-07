$(function () {
    // 대상을 변수에 저장
    const $tabMenu = $(".tab-menu > li");
    const $tabCon = $(".tab-con-item");

    console.log($tabMenu, $tabCon);

    // 처음 세팅
    $tabCon.hide();
    $tabCon.eq(0).show();
});
