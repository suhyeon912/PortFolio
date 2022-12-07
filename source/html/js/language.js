// 언어별 JSON 파일 (간략화)
const lang = {
    en: {
        flip_title: "Gyeongbokgung Palace",
        flip_content:
            "Gyeongbokgung Palace is the best Buddhist palace in the Joseon Dynasty. It is located leaning against Bukaksan Mountain to the north, and a wide Yukjo Street (now Sejong-ro) spreads out in front of Gwanghwamun, the main gate, which is also the center of the city plan for Hanyang (Seoul), the royal road. It was founded by King Taejo Lee Seong-gye in 1395, burned down by the Japanese Invasion of Korea in 1592, and rebuilt in 1867 during King Gojong's reign. The reconstructed Gyeongbokgung Palace, led by Heungseon Daewongun, looked magnificent with more than 500 buildings lined up like a maze.",
        now_sys_lang: "System locale",
    },
    ko: {
        flip_title: "경복궁",
        flip_content:
            "경복궁은 조선 왕조 제일의 법궁입니다. 북으로 북악산을 기대어 자리 잡았고 정문인 광화문 앞으로는 넓은 육조거리(지금의 세종로)가 펼쳐져, 왕도인 한양(서울) 도시 계획의 중심이기도 합니다. 1395년 태조 이성계가 창건하였고, 1592년 임진 왜란으로 불타 없어졌다가, 고종 때인 1867년 중건 되었습니다. 흥선대원군이 주도한 중건된 경복궁은 500여 동의 건물들이 미로같이 빼곡히 들어선 웅장한 모습 이었습니다.",
        now_sys_lang: "시스템 로캘",
    },
};

// ** 현재 브라우저의 언어 가져오기 **
function getLanguage() {
    return navigator.language || navigator.userLanguage;
}

// 언어별 적용
function init(localeStr) {
    document.getElementById("locale").textContent = localeStr;
}

// 초기 작업
const currentLang = getLanguage();
init(currentLang);
render(currentLang.substr(0, 2));

// 언어별 렌더링
function render(locale) {
    const $lang = document.querySelectorAll("[data-lang]");
    $lang.forEach((el) => {
        const code = el.dataset.lang;
        el.textContent = lang[locale][code];
    });
}

// 버튼 이벤트
document.getElementById("btn-en").addEventListener("click", (e) => {
    render("en");
});
document.getElementById("btn-ko").addEventListener("click", (e) => {
    render("ko");
});
