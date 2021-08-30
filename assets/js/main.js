"use strick"
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
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
const tabs = $$("#nav li");
const contents = $$(".content>div");
const root = $(":root");
const userChoices = $$(".user-nav li span");
const playListUser = $(".list-song-user");
const playFrame = $(".playFrame");
const listImage = $$(".img-song-user ul li");
const playAll = $$(".header-myAccount span");
const next = $(".next");
const prev = $(".prev");
const slider = $$(".img-slideShow img")
const hovered = $$(".song-home");
const hoverlist = $$(".hover-playmusic");
const playHome = $$(".song-home .fa-play-circle");

// Chuyển tab

let arrayImage = ["one", "two", "three", "four"];
let indexImage = 0;
let indexSlider = 0;
setInterval(() => {
    listImage[0].classList.add(`${arrayImage[(indexImage + 1) % 4]}`);
    listImage[0].classList.remove(`${arrayImage[(indexImage) % 4]}`);
    listImage[1].classList.add(`${arrayImage[(indexImage + 2) % 4]}`);
    listImage[1].classList.remove(`${arrayImage[(indexImage + 1) % 4]}`);
    listImage[2].classList.add(`${arrayImage[(indexImage + 3) % 4]}`);
    listImage[2].classList.remove(`${arrayImage[(indexImage + 2) % 4]}`);
    listImage[3].classList.add(`${arrayImage[(indexImage + 4) % 4]}`);
    listImage[3].classList.remove(`${arrayImage[(indexImage + 3) % 4]}`);
    indexImage++;


}, 3000);





next.onclick = () => {
    indexSlider++;
    if (indexSlider == 5) {

        slider.forEach(((slider) => {
            slider.style.transform = `translateX(0px)`
        }))
        indexSlider = 0;
    } else {
        slider.forEach(((slider) => {
            slider.style.transform = `translateX(-${(indexSlider) * 415}px)`

        }))

    }

}
prev.onclick = () => {
    indexSlider--;
    if (indexSlider == -1) {
        slider.forEach(((slider) => {
            slider.style.transform = `translateX(-${4 * 415}px)`
        }))
        indexSlider = slider.length - 1;
    } else {
        slider.forEach(((slider) => {
            slider.style.transform = `translateX(-${(indexSlider * 415)}px)`
            console.log((indexSlider) * 415);

        }))

    }
}

setInterval(() => {
    next.click();
}, 3000);

tabs.forEach((tab, index) => {
    const content = contents[index]
    tab.onclick = () => {

        $("#nav .active").classList.remove("active");
        $(".content > .active").classList.remove("active");
        tab.classList.add('active');
        console.log(content)
        content.classList.add('active');
    }
})

userChoices.forEach((user, index) => {
    user.onclick = () => {
        $(".user-nav .active ").classList.remove("active");
        user.classList.add("active");

    }
})

// Scroll
playListUser.onscroll = () => {

    if (playListUser.scrollTop > 20) {
        root.style.setProperty('--background3', '#e40417');
        root.style.setProperty('--background4', '#5c5656');
    } else {
        root.style.setProperty('--background3', 'transparent');
        root.style.setProperty('--background4', 'transparent');
    }
}

// Scroll
content.onscroll = () => {

    if (content.scrollTop > 20) {

        root.style.setProperty('--background1', '#e40417');
        root.style.setProperty('--background2', '#5c5656');
    } else {
        root.style.setProperty('--background1', 'transparent');
        root.style.setProperty('--background2', 'transparent');
    }
}






// Render music


const app = {
    currentIndex: 0,
    isMute: true,
    isRandom: false,
    isRepeat: false,
    arraySong: [],
    count: 0,
    song: [

        {
            title: "Níu Duyên",
            singer: "Lê Bảo Bình",
            path: "./assets/music/NiuDuyen-LeBaoBinh-6872127.mp3",
            image: "./assets/image/LeBaoBinh.jpg",
            time: "5:35"
        },
        {
            title: "Phận Duyên Lỡ Làng",
            singer: "PHÁT HUY T4 X TRUZG",
            path: "./assets/music/PhanDuyenLoLang-PhatHuyT4Trugz-7004538.mp3",
            image: "./assets/image/PHATHUYT4XTRUZG.jpg"
            , time: "4:15"
        },
        {
            title: "Sài Gòn đau Lòng Qúa",
            singer: "Hứa Kim Tuyền",
            path: "./assets/music/SaiGonDauLongQua-HuaKimTuyenHoangDuyen-6992977.mp3",
            image: "./assets/image/HuaKimTuyen.jpg"
            , time: "5:08"
        }
        ,
        {
            title: "Độ Tộc 2",
            singer: "Masew, Pháo, Phúc Du, Độ Mixi",
            path: "./assets/music/DoToc2.mp3",
            image: "./assets/image/dotoc2.jpg"
            , time: "3:21"
        }
        ,
        {
            title: "Gặp gỡ yêu đương và bên em",
            singer: "Phan Mạnh Quỳnh",
            path: "./assets/music/GapGoYeuDuongVaDuocBenEm.mp3",
            image: "./assets/image/phanmanhquynhf.jpg",
            time: "4:00"
        }
        ,
        {
            title: "Khi người lớn cô đơn",
            singer: "Phạm Hồng Phước",
            path: "./assets/music/KhiNguoiLonCoDon.mp3",
            image: "./assets/image/phamhongphuoc.jpg",
            time: "5:17"
        }
        ,
        {
            title: "Rồi tới luôn",
            singer: "Nal",
            path: "./assets/music/RoiToiLuon.mp3",
            image: "./assets/image/nal.jpg",
            time: "4:02"
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

            songTime.innerText = `${minSongTime}:0${secondsSongTime}`

        } else {
            songTime.innerText = `${minSongTime}:${secondsSongTime}`


        }

    }
    ,
    randomSong: function () {
        let index;
        let isCheck;


        do {
            index = Math.floor(Math.random() * this.song.length);
            isCheck = this.arraySong.includes(index);
        } while (isCheck);


        this.arraySong[this.count] = index;
        this.currentIndex = index;
        this.loadCurrentSong();

        if (this.count == this.song.length - 1) {
            this.count = -1;
            this.arraySong = [];
        }
        this.count++;


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
            animation.play();
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
        playAll[1].onclick = () => {
            playAndPause.classList.remove("active");


            playFrame.classList.add("active-playFrame");
            pause.classList.add("active");
            audio.play();
        }
        playHome.forEach((play) => {
            play.onclick = () => {
                playAndPause.classList.remove("active");


                playFrame.classList.add("active-playFrame");
                pause.classList.add("active");
                audio.play();
            }
        })

    }
    ,
    renderUser: function () {

        const html = this.song.map(songs => {
            return `
            <div class="thesong">
                        <div class="song-infor">
                          <div class="hovered">
                            <img
                            src="${songs.image}"
                            alt="singer"
                            class="img-song"
                          />
                          <i class="fas fa-play"></i>
                          </div>
                         
                          <div class="infor">
                            <span class="title-user-song">${songs.title} </span>
                            <span class="singer-user-song">${songs.singer}</span>
                          </div>
                        </div>
                        <div class="divtimeSong">
                          <span>${songs.time}</span>
                        </div>
                        <div class="iconSong-user">
                          <i class="fas fa-microphone-alt"></i>
                          <i class="far fa-heart"></i>
                          <i class="fas fa-ellipsis-h"></i>
                        </div>
                      </div>
            `

        });

        playListUser.innerHTML = html.join("")
    },
    PlaySongUser: function () {
        const listPlayUser = $$(".thesong")
        listPlayUser.forEach((play, index) => {
            play.onclick = () => {
                playAndPause.classList.remove("active");
                this.currentIndex = index;
                this.loadCurrentSong();
                playFrame.classList.add("active-playFrame");
                pause.classList.add("active");
                audio.play();
            }


        })


    }
    ,
    run: function () {
        this.renderUser()
        this.loadCurrentSong();
        this.loadTime();
        this.PlaySongUser();
        this.handledSong();


    }
}

app.run();




