setInterval(() => {
    let Time=new Date();
    let hour=Time.getHours();
    let mint=Time.getMinutes();
    let sec=Time.getSeconds();
    am_pm="am";
    if (hour >= 12) {
        if (hour > 12)
            hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
hour = hour < 10 ? "0" + hour : hour;
mint = mint < 10 ? "0" + mint : mint;
sec = sec < 10 ? "0" + sec : sec;
let currentTime =`${hour}:${mint}:${sec}${am_pm}`;
document.getElementById("box1").innerText = hour;
document.getElementById("box2").innerHTML = mint;
document.getElementById("box3").innerHTML = sec;
document.getElementById("box4").innerHTML =`${am_pm}`;
return currentTime;
}, 1000);



