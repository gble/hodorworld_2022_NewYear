const nowDate = new Date();
const year = nowDate.getFullYear();	// 연도 가져오기
var htmlHour = document.getElementById("hour"); //id 가져오고 htmlHour 변수에 넣기
var htmlYear = document.getElementById("year");

htmlYear.innerHTML=year + "년"; //년도 띄우기

function getTime() {
    const month = nowDate.getMonth();
    const clockDate = nowDate.getDate();
    const hours = nowDate.getHours();
    const minutes = nowDate.getMinutes();
    const seconds = nowDate.getSeconds();
    htmlHour.innerText = `${month+1}월 ${clockDate}일 ` +
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }`  : minutes }:${seconds < 10 ? `0${seconds }`  : seconds }`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}
init()


