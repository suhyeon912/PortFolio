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

        flip_title2: "N Seoul Tower",
        flip_content2:
            "The N Seoul Tower, the center of Seoul, the symbol of Seoul and the tallest place to overlook Seoul's most beautiful appearance, was built in 1969 as Korea's first comprehensive radio tower to send TV and radio broadcasts to the Seoul metropolitan area. N Seoul Tower has become a resting place for Seoul citizens and a tourist attraction for foreigners along with the living nature of Namsan Mountain since it was opened to the public in 1980.",

        flip_title3: "Bukchon Hanok Village",
        flip_content3:
            "Bukchon Hanok Village is a hanok village located in Gahoe-dong and Samcheong-dong, Jongno-gu, Seoul. Geographically, it is located between Gyeongbokgung Palace, Changdeokgung Palace, and Jongmyo Shrine. Located between the two palaces of the Joseon Dynasty, this area has long been called Bukchon, meaning Cheonggyecheon Stream and the upper neighborhood of Jongno, and is the current area of Gahoe-dong, Samcheong-dong, Wonseo-dong, Jae-dong, and Gye-dong. It is also called a museum in the city center because there are many historical sites, cultural assets, and folk materials.",

        flip_title4: "Myeong-dong",
        flip_content4:
            "Myeong-dong is a shopping area full of world-class fashion brands, high-end department stores, and Korean brand cosmetics. Casual restaurants sell Korean dumplings and samgyetang, while stalls sell Japanese and Thai snacks. A performance that combines traditional music and theater will be held at Myeongdong Nanta Theater. Nearby, there is a Gothic bell tower in Myeongdong Cathedral built in the 19th century.",

        flip_title5: "Changdeokgung Palace",
        flip_content5:
            "Changdeokgung Palace is a Joseon palace located at the foot of Eungbong Peak, the left peak of Bukaksan Mountain. Changdeokgung Palace, built in the east as Gyeongbokgung Palace's palace in 1405, was used for different purposes from the neighboring Changgyeonggung Palace, but it forms one palace, so these two palaces were called 'Donggung' during the Joseon Dynasty. Changdeokgung Palace, which was rebuilt during Gwanghaegun's reign after the Japanese Invasion of Korea in 1592, served as a royal palace of Joseon until Gyeongbokgung Palace was rebuilt by Heungseon Daewongun in 1867.",

        flip_title6: "롯데월드",
        flip_content6:
            "Lotte World, which opened its culture in 1989, is considered one of the best theme parks in Korea. Lotte World, which boasts a huge scale, consists of Lotte World Adventure and Magic Island. Lotte World Adventure is an indoor theme park where you can have fun at any time of the year regardless of weather or season. Unique rides and souvenir shops greet visitors in each area decorated with national themes. During the day, cultural-themed parades from around the world are held throughout the year, and ecstatic light parades are eye-catching at night. Magic Island, an outdoor theme park, is surrounded by Seokchon Lake, so you can experience a fantastic water-themed adventure.",

        now_sys_lang: "System locale",
    },
    ko: {
        gnb_1: "메인 페이지",
        gnb_2: "제작자 소개",
        gnb_3: "한국의 관광지",

        korea_map: "",

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
        flip_content3:
            "북촌 한옥마을은 서울특별시 종로구의 가회동과 삼청동 내에 위치한 한옥마을입니다. 지리상으로 경복궁과 창덕궁, 종묘의 사이에 자리잡고 있습니다. 조선 왕조의 두 궁궐 사이에 위치한 이 지역은 예로부터 청계천과 종로의 윗동네라는 의미로 ‘북촌’이라 불리었으며, 현재의 가회동, 삼청동, 원서동, 재동, 계동 일대에 해당합니다. 많은 사적과 문화재, 민속자료가 있어 도심 속의 박물관이라 불리기도 합니다.",

        flip_title4: "명동",
        flip_content4:
            "번화한 명동은 세계적인 패션 브랜드, 고급 백화점, 한국 브랜드 화장품 매장으로 가득한 쇼핑 지역입니다. 캐주얼한 식당에서는 한국식 만두, 삼계탕을 판매하고 노점에서는 일본식과 태국식 간식을 판매합니다. 전통 음악과 연극이 합쳐진 공연이 명동난타극장에서 펼쳐집니다. 근처에는 19세기에 지어진 명동 성당에 고딕 양식의 종탑이 있습니다.",

        flip_title5: "창덕궁",
        flip_content5:
            "창덕궁은 북악산 왼쪽 봉우리인 응봉자락에 자리 잡고 있는 조선의 궁궐입니다. 1405년 경복궁의 이궁으로 동쪽에 지어진 창덕궁은 이웃한 창경궁과 서로 다른 별개의 용도로 사용되었으나 하나의 궁역을 이루고 있어 조선 시대에는 이 두 궁궐을 형제궁궐이라 하여 ‘동궐’이라 불렀습니다. 1592년 임진왜란으로 모든 궁궐이 소실되어 광해군 때에 재건된 창덕궁은 1867년 흥선대원군에 의해 경복궁이 중건되기 전까지 조선의 법궁(法宮) 역할을 하였습니다.",

        flip_title6: "롯데월드",
        flip_content6:
            "1989년에 개장한 롯데월드는 한국 최고의 테마파크 중 하나로 손꼽히고 있습니다. 거대한 규모를 자랑하는 롯데월드는 롯데월드 어드벤처와 매직아일랜드로 구성되어 있습니다. 롯데월드 어드벤처는 실내 테마파크로서 날씨와 계절에 관계없이 연중 어느 때라도 즐거운 시간을 보낼 수 있는 곳입니다. 국가별 테마로 다채롭게 꾸며진 각 구역마다 독특한 놀이기구와 기념품 가게가 관람객을 맞이합니다. 낮에는 연중 내내 세계 각국의 문화를 테마로 한 퍼레이드가 펼쳐지고 밤에는 황홀한 빛 퍼레이드가 눈길을 사로잡습니다. 실외 테마파크인 매직아일랜드는 석촌호수로 둘러싸여 있어 물을 테마로 한 환상적인 모험을 체험할 수 있습니다.",

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
        document.getElementById("korea_map").src = "../imgs/대한민국.png";
        document.getElementById("gnb_2").href = "sub2_main_en.html";
    } else if (optionVal == "btn-eng") {
        render("en");
        document.getElementById("korea_map").src = "../imgs/KOREA.png";
    }
}
