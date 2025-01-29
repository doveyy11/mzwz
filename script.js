// 播放按钮功能
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

// 电影简介显示功能
document.getElementById("movie-intro").addEventListener("click", function() {
    const description = document.getElementById("movie-description");
    description.style.display = "block";
    description.innerHTML = `
        《某种物质》是一部科幻题材的心理惊悚片，讲述了在未来世界，一种神秘的物质被发现，并迅速改变了人类的生活方式。
        这种物质不仅能极大地提升人类的智力，还能改变情绪、思维和感知世界的方式。然而，这种变革带来了意想不到的后果，
        社会陷入了前所未有的混乱和道德困境。

        电影的主人公是一位年轻的科学家李安，他在研究这种物质的过程中逐渐发现其背后隐藏的巨大秘密。
        随着他对物质的深入探索，李安不仅面临外部的危险威胁，更被内心的恐惧和伦理抉择所困扰。
        在探索真相的过程中，李安与一群志同道合的伙伴们一起，试图揭开物质的来源，揭示它背后隐藏的黑暗力量。

        通过独特的视觉效果和深刻的心理描写，《某种物质》不仅是一场视觉和思想的双重盛宴，
        更是一部探索人类在技术与道德冲突中的脆弱与坚韧的作品。
    `;
});
