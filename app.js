window.onload = function() {
    var count = 0;
    var eggs = document.getElementsByClassName('egg');
    var counterSpan = document.getElementsByClassName('count')[0];
    for(var i=0; i<eggs.length;i++) {
        eggs[i].addEventListener('mouseenter', function () {
            this.setAttribute('visible', 'false');
            count++;
            counterSpan.innerText = count;
        });
    }
}
