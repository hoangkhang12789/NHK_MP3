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
const volume = $("#volume");
const off = $(".off")
const half = $(".half");
const full = $(".full");
const liner = $(".liner");
const volumeOn = $$(".volume i");

const app = {
    currentIndex: 0,
    isMute: true,
    isRandom: false,
    isRepeat: false,
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
        ,
        {
            title: "Độ Tộc 2",
            singer: "Masew, Pháo, Phúc Du, Độ Mixi",
            path: "./assets/music/DoToc2.mp3",
            image: "./assets/image/dotoc2.jpg"
        }
        ,
        {
            title: "Gặp gỡ yêu đương và được bên em",
            singer: "Phan Mạnh Quỳnh",
            path: "./assets/music/GapGoYeuDuongVaDuocBenEm.mp3",
            image: "./assets/image/phanmanhquynhf.jpg"
        }
        ,
        {
            title: "Khi người lớn cô đơn",
            singer: "Phạm Hồng Phước",
            path: "./assets/music/KhiNguoiLonCoDon.mp3",
            image: "./assets/image/phamhongphuoc.jpg"
        }
        ,
        {
            title: "Rồi tới luôn",
            singer: "Nal",
            path: "./assets/music/RoiToiLuon.mp3",
            image: "./assets/image/nal.jpg"
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
        if (secondsSongTime < 10) {
            songTime.innerHTML = `${minSongTime}:0${secondsSongTime}`

        } else {
            songTime.innerHTML = `${minSongTime}:${secondsSongTime}`

        }

    }
    ,
    randomSong: function () {
        let index;
        do {
            index = Math.floor(Math.random() * this.song.length)
        } while (index === this.currentIndex)
        this.currentIndex = index;
        this.loadCurrentSong();
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
            if (this.isRandom) {
                this.randomSong();
            } else {
                this.forwardSong();
            }

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
            if (secondsCurrentTime < 10) {
                currentTime.innerText = `${minCurrentTime}:0${secondsCurrentTime}`;

            } else {
                currentTime.innerText = `${minCurrentTime}:${secondsCurrentTime}`;

            }
        }
        audio.onplaying = () => {
            this.loadTime();
        }
        progress.oninput = () => {
            let seekTime = audio.duration / 100 * progress.value;
            audio.currentTime = seekTime;
        }
        volume.oninput = () => {
            audio.volume = volume.value / 100;
            volumeOn.forEach((i) => {
                i.classList.remove("active");
            });
            if (volume.value > 70) {
                full.classList.add("active");
            } else if (volume.value <= 70 && volume.value >= 30) {
                half.classList.add("active");
            }
            else if (volume.value > 0 && volume.value < 30) {
                liner.classList.add("active");
            }
            else {
                off.classList.add("active");
            }

        }
        volumeOn.forEach((i) => {
            i.onclick = () => {
                i.classList.remove("active");
                if (this.isMute) {
                    off.classList.add("active");
                    audio.volume = 0;
                } else {
                    full.classList.add("active");
                    audio.volume = 1;
                }
                this.isMute = !this.isMute;
            }
        })
        audio.onended = () => {
            if (this.isRepeat) {
                audio.play();
            } else {
                forward.click();

            }
        }
        random.onclick = () => {
            this.isRandom = !this.isRandom;
            random.classList.toggle("active-random");
        }
        repeat.onclick = () => {
            this.isRepeat = !this.isRepeat;
            repeat.classList.toggle("active-repeat");
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






