var subtitles= ["Future Neurosurgeon","Young Coder","Co-President of the 400 Bainbridge St. Block Assoc. ","Co-founder of The Rusty and River Fields Foundation", "Tennis Player"]


function changeSubtitle() {
    setInterval(function () {
        if (count < subtitles.length - 1) {
            $("#subtitle").html(subtitles[count]);
            count++;
        } else {
            $("#subtitle").html(subtitles[subtitles.length - 1]);
            count = 0;
        }
    }, 1000);
}