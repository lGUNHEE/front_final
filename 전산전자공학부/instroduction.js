document.getElementById('theme-switch').addEventListener('change', function(event) {
    if (event.target.checked) {
        document.body.classList.replace('light', 'dark');
    } else {
        document.body.classList.replace('dark', 'light');
    }
});

function openSidebar() {
    document.getElementById("sidebar").style.right = "0";
    document.getElementById("overlay").style.display = "block";
}

function closeSidebar() {
    document.getElementById("sidebar").style.right = "-300px";
    document.getElementById("overlay").style.display = "none";
}


window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    let topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// 맨 위로 스크롤
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'auto' });
}



let currentIndex = 0;

function slideLeft() {
    const content = document.querySelector('.carousel-content');
    const items = document.querySelectorAll('.item');
    if (currentIndex > 0) {
        currentIndex--; // 아 이거 진짜 ㅈㄴ빡치노
    }
    updateCarousel(content);
}

function slideRight() {
    const content = document.querySelector('.carousel-content');
    const items = document.querySelectorAll('.item');
    if (currentIndex < items.length - 1) {
        currentIndex++; 
    }
    updateCarousel(content);
}

function updateCarousel(content) {
    const itemWidthPercentage = 100; 
    content.style.transform = `translateX(${-currentIndex * itemWidthPercentage}%)`; 
}
