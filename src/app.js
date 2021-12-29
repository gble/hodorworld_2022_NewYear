// var nowDate = new Date();
// var year = nowDate.getFullYear();	// 연도 가져오기
// var htmlHour = document.getElementById("hour"); //id 가져오고 htmlHour 변수에 넣기
// var htmlYear = document.getElementById("year");

// htmlYear.innerHTML=year + "년"; //년도 띄우기

document.querySelector("#year").innerHTML = new Date().getFullYear() + "년";
setInterval(() => {
    document.querySelector("#hour").innerText =
        `${new Date().getMonth() + 1}월 ${new Date().getDate()}일 ` +
        `${new Date().getHours() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()}:${new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()}:${
            new Date().getSeconds() < 10 ? `0${new Date().getSeconds()}` : new Date().getSeconds()
        }`;
}, 1000);

// function getTime() {
//     var nowDate = new Date();

//     const month = nowDate.getMonth();
//     const clockDate = nowDate.getDate();
//     const hours = nowDate.getHours();
//     const minutes = nowDate.getMinutes();
//     const seconds = nowDate.getSeconds();
//     htmlHour.innerText = `${month+1}월 ${clockDate}일 ` +
//     `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }`  : minutes }:${seconds < 10 ? `0${seconds }`  : seconds }`;
    
// }

// function init(){
//     getTime();
//     setInterval(getTime, 1000);
// }
// init()
// setInterval(function() {
//     var nowDate = new Date();
//     var month = nowDate.getMonth();
//     var clockDate = nowDate.getDate();
//     var hours = nowDate.getHours();
//     var minutes = nowDate.getMinutes();
//     var seconds = nowDate.getSeconds();
//     htmlHour.innerText = `${month+1}월 ${clockDate}일 ` +
//     `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }`  : minutes }:${seconds < 10 ? `0${seconds }`  : seconds }`;
    
// }, 1000);

