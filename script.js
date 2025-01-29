document.getElementById("bgm-btn").addEventListener("click", function() {
    const bgm = document.getElementById("bgm");
    if (bgm.paused) {
        bgm.play();
        this.innerHTML = "🎵 停止音乐";
    } else {
        bgm.pause();
        this.innerHTML = "🎵 播放音乐";
    }
});
