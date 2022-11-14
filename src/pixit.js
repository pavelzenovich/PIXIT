vid = document.getElementById('myVideo'); 

vid.addEventListener('mouseenter', function() {
    vid.play();
});

vid.addEventListener('mouseleave', function() {
    vid.pause();
});
