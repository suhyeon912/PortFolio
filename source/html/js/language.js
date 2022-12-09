// 언어별 JSON 파일 (간략화)
const lang = {
    en: {
        gnb_1: "MAIN",
        gnb_2: "ABOUT US",
        gnb_3: "VISIT KOREA",

        region_name: "Seoul",
        region_info:
            "Seoul, the capital of Korea, is a large city where modern skyscrapers, high-tech subways, popular culture, temples, palaces, and street vendors coexist. Notable attractions include Dongdaemun Design Plaza, an ultra-modern convention hall featuring a curved exterior and rooftop park, Gyeongbokgung Palace, which once housed 7,000 rooms, and Jogyesa Temple with painting trees and pine trees.",

        flip_title1: "Gyeongbokgung Palace",
        flip_content1:
            "Gyeongbokgung Palace is the best Buddhist palace in the Joseon Dynasty. It is located leaning against Bukaksan Mountain to the north, and a wide Yukjo Street (now Sejong-ro) spreads out in front of Gwanghwamun, the main gate, which is also the center of the city plan for Hanyang (Seoul), the royal road. It was founded by King Taejo Lee Seong-gye in 1395, burned down by the Japanese Invasion of Korea in 1592, and rebuilt in 1867 during King Gojong's reign. The reconstructed Gyeongbokgung Palace, led by Heungseon Daewongun, looked magnificent with more than 500 buildings lined up like a maze.",

        now_sys_lang: "System locale",
    },
    ko: {
        gnb_1: "메인 페이지",
        gnb_2: "제작자 소개",
        gnb_3: "한국의 관광지",

        region_name: "서울",
        region_info:
            "대한민국의 수도인 서울은 현대적인 고층 빌딩, 첨단 기술의 지하철,대중문화와 사찰, 고궁, 노점상이 공존하는 대도시입니다. 주목할만한 명소로는 곡선으로 이루어진 외관과 옥상 공원을 특징으로 하는 초현대적 디자인의 컨벤션 홀인 동대문디자인플라자, 한때 7,000여칸의 방이 자리하던 경복궁, 회화나무와 소나무 고목이 있는 조계사가 있습니다.",

        flip_title1: "경복궁",
        flip_content1:
            "경복궁은 조선 왕조 제일의 법궁입니다. 북으로 북악산을 기대어 자리 잡았고 정문인 광화문 앞으로는 넓은 육조거리(지금의 세종로)가 펼쳐져, 왕도인 한양(서울) 도시 계획의 중심이기도 합니다. 1395년 태조 이성계가 창건하였고, 1592년 임진 왜란으로 불타 없어졌다가, 고종 때인 1867년 중건 되었습니다. 흥선대원군이 주도한 중건된 경복궁은 500여 동의 건물들이 미로같이 빼곡히 들어선 웅장한 모습이었습니다.",

        flip_title2: "N서울타워",
        flip_content2:
            "서울의 중심, 서울의 상징이자 서울의 가장 아름다운 모습을 한눈에 내려다 볼 수 있는 가장 높은 곳인 N서울타워는 1969년 TV와 라디오 방송을 수도권에 송출하기 위해 한국 최초의 종합 전파탑으로 세워졌습니다. N서울타워는 1980년, 일반인에게 공개된 이후 남산의 살아있는 자연과 함께 서울시민의 휴식공간이자 외국인의 관광명소로 자리 잡았습니다.",

        flip_title3: "북촌한옥마을",
        flip_content3: "북촌 한옥마을은 서울특별시 종로구의 가회동과 삼청동 내에 위치한 한옥마을입니다. 지리상으로 경복궁과 창덕궁, 종묘의 사이에 자리잡고 있습니다. 조선 왕조의 두 궁궐 사이에 위치한 이 지역은 예로부터 청계천과 종로의 윗동네라는 의미로 ‘북촌’이라 불리었으며, 현재의 가회동, 삼청동, 원서동, 재동, 계동 일대에 해당합니다. 많은 사적과 문화재, 민속자료가 있어 도심 속의 박물관이라 불리기도 합니다.",

        flip_title4: "명동",
        flip_content4: "",

        flip_title5: "창덕궁",
        flip_content5: "",

        flip_title6: "롯데월드",
        flip_content6: "",

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

// // 버튼 이벤트
// document.getElementById("btn-en").addEventListener("click", (e) => {
//   render("en");
// });
// document.getElementById("btn-ko").addEventListener("click", (e) => {
//   render("ko");
// });

function changeSelection() {
    var selectedElement = document.getElementById("selectbox");

    var optionVal =
        selectedElement.options[selectedElement.selectedIndex].value;
    var optionTxt = selectedElement.options[selectedElement.selectedIndex].text;

    // var selectedElement = $(obj).val();
    if (optionVal == "btn-kor") {
        render("ko");
    } else if (optionVal == "btn-eng") {
        render("en");
    }
}
