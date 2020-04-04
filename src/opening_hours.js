//여는시간 임시저장소
/*  규칙
    1. 시간은 4자리 숫자로 표기한다.
       ex)15:30 => 1530
    2. 자료는 [시작시간,종료시간]으로 표기한다.
    3. 없는 사항이라면, -1로 표기한다.
    4. BT는 "일단은" 모든 요일의 BT로 사용된다. 추후 변경 가능.
    4. 자정을 넘어가는 운영은 운영 안하는 시간을 BT로 취급한다
       ex)18:00~03:00 => 00:00~23:59, BT:03:00~17:59로 해야함//weekday:주중 여는 시간
    5. etc 관련 규칙(추가 필요)

    //weekday:주중 운영시간
    //sat:토요일
    //sun:일요일
    //BT:Break Time
    //etc:기타사항         */
var open_json = {
  "0": {
    weekday: [1130, 2130],
    sat: [1130, 2130],
    sun: [1130, 2130],
    BT: [-1, -1],
    etc: [-1, -1],
  },
};

const date = new Date(); //달력 가져오기
const day = date.getDay() * 1; //요일 (0~6)

function getTime() {
  const time = date.getHours() * 100 + date.getMinutes(); //시간 4자리 표기(0000~2359)
  for (const id of CURRENT) {
    //표기된 항목들의 id를 가져와 이용
    const timeContainer = document.getElementById(`${id}`);
    const data = open_json[id];
    if (day == 0) {
      //일요일
      if (data["sun"] != -1 && data["sun"][0] < time && time < data["sun"][1]) {
        //운영시간 이면
        timeContainer.classList.replace("close", "open"); //녹색 표기
      } else {
        //운영시간 아니면
        timeContainer.classList.replace("open", "close"); //빨간색 표기
      }
    } else if (day == 6) {
      //토요일
      if (data["sat"] != -1 && data["sat"][0] < time && time < data["sat"][1]) {
        timeContainer.classList.replace("close", "open");
      } else {
        timeContainer.classList.replace("open", "close");
      }
    } else {
      //평일
      if (
        data["weekday"] != -1 &&
        data["weekday"][0] < time &&
        time < data["weekday"][1]
      ) {
        timeContainer.classList.replace("close", "open");
      } else {
        timeContainer.classList.replace("open", "close");
      }
    }
    if (data["BT"] != -1 && data["BT"][0] < time && time < data["BT"]) {
      //모든 요일의 BT를 걸러냄
      timeContainer.classList.replace("open", "close"); //빨간색 표기
    }
  }
}

function init() {
  setInterval(getTime, 1000);
  //eventListener로 바꾸면 되려나?
}

init();
