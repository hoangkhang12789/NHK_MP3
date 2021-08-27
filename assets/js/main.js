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
const audio = $("#audio");
const play = $(".play-btn");
const pause = $(".pause");
const playAndPause = $(".button .active");
const backward = $(".backward");
const forward = $(".forward");
const random = $(".random");
const repeat = $(".repeat");
const content = $(".content");
const progress = $("#progress");
const title = $(".title");
const singer = $(".singer");
const avatar = $(".avt-artist");

const app = {
    currentIndex: 0,

    song: [

        {
            title: "Níu Duyên",
            singer: "Lê Bảo Bình",
            path: "./assets/music/NiuDuyen-LeBaoBinh-6872127.mp3",
            image: "./assets/image/LeBaoBinh.jpg"
        },
        {
            title: "Phận Duyên Lỡ Làng",
            singer: "PHÁT HUY T4 X TRUZG",
            path: "./assets/music/PhanDuyenLoLang-PhatHuyT4Trugz-7004538.mp3",
            image: "./assets/image/PHATHUYT4XTRUZG.jpg"
        },
        {
            title: "Sài Gòn đau Lòng Qúa",
            singer: "Hứa Kim Tuyền",
            path: "./assets/music/SaiGonDauLongQua-HuaKimTuyenHoangDuyen-6992977.mp3",
            image: "./assets/image/HuaKimTuyen.jpg"
        }

    ],
    playSong: function () {
        playAndPause.classList.remove("active");
        pause.classList.add("active");
        audio.play();
        this.isPlaying = !this.isPlaying;


    },
    pauseSong: function () {
        pause.classList.remove("active");
        audio.pause();
        play.classList.add('active');

    },
    forwardSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.song.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    }
    ,
    backwardSong: function () {

        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.song.length - 1;

        }
        this.loadCurrentSong();
    }
    ,
    loadCurrentSong: function () {

        audio.src = this.song[this.currentIndex].path;
        title.innerHTML = this.song[this.currentIndex].title;
        singer.innerHTML = this.song[this.currentIndex].singer;
        avatar.src = this.song[this.currentIndex].image;


    },
    loadTime: function () {
        const songTime = $(".songTime");

        const length = audio.duration / 60;
        const minSongTime = Math.floor(length);
        const secondsSongTime = Math.floor(audio.duration % 60);
        songTime.innerHTML = `${minSongTime}:${secondsSongTime}`

    }
    ,
    handledSong: function () {
        const animation = avatar.animate([
            {
                transform: 'rotate(360deg)'
            }],
            {
                duration: 10000,
                iterations: Infinity
            }
        )
        animation.pause();
        play.onclick = () => {
            this.playSong();
            animation.play();

        }
        pause.onclick = () => {
            this.pauseSong();
            animation.pause();

        }
        forward.onclick = () => {
            this.forwardSong();
            this.playSong();
        }
        backward.onclick = () => {
            this.backwardSong();
            this.playSong();
        }
        audio.ontimeupdate = () => {
            const currentTime = $(".currentTime");
            let time = audio.currentTime / audio.duration * 100;
            progress.value = time;
            const minCurrentTime = Math.floor(audio.currentTime / 60);
            const secondsCurrentTime = Math.floor(audio.currentTime % 60);
            currentTime.innerText = `${minCurrentTime}:${secondsCurrentTime}`;
        }
        audio.onplaying = () => {
            this.loadTime();
        }
        progress.onchange = (e) => {
            let seekTime = audio.duration / 100 * progress.value;
            audio.currentTime = seekTime;
        }





    }
    ,
    render: function () {
        const html = this.song.map((song, index) => {
            return
            ``

        })
    }
    ,
    run: function () {
        this.loadCurrentSong();
        this.loadTime();
        this.handledSong();

    }
}

app.run();






