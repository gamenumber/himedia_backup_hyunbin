// 1. 오디오 요소 생성
var audio = document.createElement("audio");

// 2. 오디오 파일 소스 설정
var source = document.createElement("source");
source.src = "audio/e.mp3"; // 오디오 파일 경로
source.type = "audio/mp3"; // 오디오 파일 타입
audio.appendChild(source);

// 3. 오디오 속성 설정
audio.autoplay = true; // 페이지 로드 시 자동 재생
audio.loop = false; // 오디오 반복 재생 비활성화

// 4. 페이지에 오디오 요소 추가
document.body.appendChild(audio);

// 5. 재생 상태 확인 및 오류 처리
audio.addEventListener("play", function () {
    console.log("오디오 재생 시작");
});

audio.addEventListener("error", function (e) {
    console.log("오디오 재생 오류:", e);
});

// 6. 오디오가 끝날 때 자동으로 다시 재생되도록 설정
audio.addEventListener(
    "ended",
    function () {
        this.currentTime = 0; // 오디오를 처음으로 되돌림
        this.play(); // 다시 재생
    },
    false
);
