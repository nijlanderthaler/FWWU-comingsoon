var button = document.getElementById('button');

button.onclick = function() {
    var content = document.getElementById('content');
    var middle = document.getElementById('middle');

    if (content.className == 'open' && middle.className == 'open') {
        content.className = '';
        middle.className = '';
        button.innerHTML = '»';
        button.style.padding = "3px 7px 4px 9px";
    } else {
        content.className = 'open';
        middle.className = 'open';
        button.innerHTML = '«';
        button.style.padding = "3px 8px 4px 8px";
    }
};
