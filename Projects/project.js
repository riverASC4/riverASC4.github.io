var switchimg= ["IMG_1902.jpg","IMG_5.jpg","IMG_1778.jpg"];
var count = 0;

$(document).ready(function (){
    changeSubtitle();
});

function changeSubtitle() {
    setInterval(function () {
        if (count < switchimg.length - 1) {
            $("#randomimg").attr("src", switchimg[count]);
            count++;
        } else {
            $("#subtitle").attr("src", switchimg[switchimg.length - 1]);
            count = 0;
        }
    }, 1000);
}


