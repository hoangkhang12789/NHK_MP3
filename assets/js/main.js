"use strick"
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// Chuyển tab
const tabs = $$("#nav li");
const contents = $$(".content div");
tabs.forEach((tab, index) => {
    const content = contents[index]
    tab.onclick = () => {
        $("#nav .active").classList.remove("active");
        $(".content .active").classList.remove("active");
        tab.classList.add('active');
        content.classList.add('active');
    }
})


// Render music
const audio =$("#audio");
const app = {
    song:[
    {
        title: "Níu Duyên",
        Singer: "Lê Bảo Bình",
        path: "./assets/music/NiuDuyen-LeBaoBinh-6872127.mp3",
        image: "./assets/image/LeBaoBinh.jpg"
    },
     {
        title: "Phận Duyên Lỡ Làng",
        Singer: "PHÁT HUY T4 X TRUZG",
        path: "./assets/music/PhanDuyenLoLang-PhatHuyT4Trugz-7004538.mp3",
        image: "./assets/image/PHATHUYT4XTRUZG.jpg"
    }, 
    {
        title: "Sài Gòn đau Lòng Qúa",
        Singer: "Lê Bảo Bình",
        path: "./assets/music/SaiGonDauLongQua-HuaKimTuyenHoangDuyen-6992977.mp3",
        image: "./assets/image/HuaKimTuyen.jpg"
    }

    ]
}






