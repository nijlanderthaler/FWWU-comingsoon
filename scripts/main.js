var content = document.getElementById('content');

var button = document.getElementById('button');

//var comingSoon = document.getElementsByClassName('middle');

button.onclick = function() {
    if (content.className == 'open') {
        content.className = '';
        button.innerHTML = 'More info »';
    } else {
        content.className = 'open';
        //comingSoon.style.content = '';
        button.innerHTML = '« Back';
    }
};
