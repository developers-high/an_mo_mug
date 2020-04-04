//여는시간 임시저장소

//day:요일
//time:
var open_json = {
    "0": {
        "day": [0,1,2,3,4,5,6],
        "start_hour": [11,11,11,11,11,11,11],
        "start_min": [30,30,30,30,30,30,30],
        "end_hour": [21,21,21,21,21,21,21],
        "end_min": [30,30,30,30,30,30,30],
    }
}

function getTime(){
    const date = new Date();
    const days = date.getDay();
    const day = days.toString() *1;
    const hour = date.getHours();
    const min = date.getMinutes();
    for(const id of CURRENT){
        const timeContainer = document.getElementById(`${id}`);
        const data = open_json[id.toString()];
        if(data["day"].includes(day)){
            if((data["start_hour"][day]<hour<data["end_hour"][day])||
            (data["start_hour"][day]==hour&&data["start_min"][day]<=min)||
            (data["end_hour"][day]==hour&&data["end_min"][day]>min)){
                timeContainer.classList.replace("close","open");
            }
            else{
                timeContainer.classList.replace("open","close");
            }
        }else{
            timeContainer.classList.replace("open","close");
        }
    }
}

function init(){
    setInterval(getTime,1000);
}

init();