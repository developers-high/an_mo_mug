const MAX_NUM = 375;

function zfill(num) {
  if (num < 1) return `0000`;
  if (num < 10) return `000${num}`;
  else if (num < 100) return `00${num}`;
  else if (num < 1000) return `0${num}`;
  else if (num < 10000) return `${num}`;
  else return `0000`;
}
function addTagToClassList(place, Tags){
  for (j=0;j<Tags.length - 1;j++){
    place.classList.add(Tags[j].substring(1));
  }
}

function foodappend() {
  const listdiv = document.createElement("div"),
    listTable = document.createElement("table"),
    list = document.createElement("tbody");
  listTable.className = "foodList";
  //table 다시 span으로 바꾸기 ㅠㅠ
  cnt=0;
  tableRow = document.createElement("tr");
  for (i = 1; i < MAX_NUM; i++) {
    const foodData = localStorage.getItem(`#${zfill(i)}`);
    if (foodData != null) {
      if(cnt%3==0){
        tableRow = document.createElement("tr");
      }
      cnt++;

      const addList = document.createElement("th"), //th생성
      foodDataList = foodData.split("\n"); //자르기
      //문서생성 및 추가
      for (j = 1; j < foodDataList.length-1; j++) {
        textSpan = document.createElement("span");

        text = foodDataList[j].split(' ');
        textLine="";
        for(k = 0; k<text.length;k++){
          textLine+=text[k]+' ';
        }
        text = document.createTextNode(textLine);
        
        textSpan.appendChild(text);
        switch(j){
          case 1:
            textSpan.classList.add("resName");
        }
        
        addList.appendChild(textSpan);
        addList.appendChild(document.createElement("br"));
      }

      addList.classList.add("triple"); //th에 triple 추가
      addTagToClassList(addList, foodDataList[2].split(" "))
      
      tableRow.appendChild(addList);

      if(cnt%3==2){
        list.appendChild(tableRow); //list에 추가 <--이걸 바꾸면 되겠다
      }
    }
  }
  listTable.appendChild(list)
  listdiv.appendChild(listTable);
  document.body.appendChild(listdiv);
}

function init() {
  foodappend();
}

init();