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
const playTrendheader = $(".headerTrend .fa-play-circle");
const playlistTrend = $(".toptrendLevel");
const playWeekTrend = $$(".listweekTrend .song");
const newPlaylist = $(".newPlaylist");
const arrayColor = ["top1", "top2", "top3"]
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
newPlaylist.onclick = () => {
    console.log(125);
}



// console.log(next)
// next.onclick = () => {
//     indexSlider++;
//     if (indexSlider == 5) {

//         slider.forEach(((slider) => {
//             slider.style.transform = `translateX(0px)`
//         }))
//         indexSlider = 0;
//     } else {
//         slider.forEach(((slider) => {
//             slider.style.transform = `translateX(-${(indexSlider) * 415}px)`

//         }))

//     }

// }
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
    if (indexSlider == 5) {

        slider.forEach(((slider) => {
            slider.style.transform = `translateX(0px)`
        }))
        indexSlider = 0;
    } else {
        next.click();
        0
    }

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
        ,
        {
            title: "Kill This Love",
            singer: "Black Pink",
            path: "./assets/music/KillThisLove.mp3",
            image: "./assets/image/backpink.png",
            time: "3:09"
        }
        ,
        {
            title: "Phá kén",
            singer: "Trương Thiều Hàm",
            path: "./assets/music/phaken.mp3",
            image: "./assets/image/phaken.jpg",
            time: "3:31"
        }
        ,
        {
            title: "I'm So Hot",
            singer: "Momoland",
            path: "./assets/music/bombom.mp3",
            image: "./assets/image/momoland.jpg",
            time: "3:20"
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
        playTrendheader.onclick = () => {
            playAndPause.classList.remove("active");
            this.currentIndex = 0;
            this.loadCurrentSong();


            playFrame.classList.add("active-playFrame");
            pause.classList.add("active");
            audio.play();
        }

    }
    ,
    renderSongtrend: function () {
        const html = this.song.map((songs, index) => {

            return `
            <div class="thesong">
            <div class="left">
              <article class="${arrayColor[index]}">
                <h1>${index + 1}</h1>
              </article>
              <i class="fas fa-minus"></i>
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
                  <span class="singer-user-song">${songs.singer} </span>
                </div>
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

        playlistTrend.innerHTML = html.join("")

    }
    ,
    renderUser: function () {

        const html = this.song.map((songs, index)=> {
            return `
            <div class="thesong ">
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

    renderWeekUser: function () {
        let newSong = [];
        for (var i = 0; i < 5; i++) {
            newSong[i] = this.song[i];
        }
        let newSong1 = [];
        for (var i = 2; i < 7; i++) {
            newSong1[i - 2] = this.song[i];
        } let newSong2 = [];
        for (var i = 5; i < 10; i++) {
            newSong2[i - 5] = this.song[i];
        }
        const html = newSong.map((songs, index) => {
            return `
            <div class="width">
            <div class="left">
                            <article>
                              <h1>${index + 1}</h1>
                            </article>
                            <i class="fas fa-minus"></i>
                            <div class="song-infor">
                              <img
                                src="${songs.image}"
                                alt="singer"
                                class="img-song"
                              />
                              

                              <div class="infor">
                                <span class="title-user-song">${songs.title}</span>
                                <span class="singer-user-song">${songs.singer} </span>
                              </div>
                              <i class="fas fa-play"></i>
                            </div>
                            
                            <div class="right">
                              <i class="fas fa-microphone"></i>
                              <i class="fas fa-ellipsis-h"></i>
                            </div>
                          </div>
                          </div>
            `
        });
        const html1 = newSong1.map((songs, index) => {
            return `
            <div class="width">
            <div class="left">
                            <article>
                              <h1>${index + 1}</h1>
                            </article>
                            <i class="fas fa-minus"></i>
                            <div class="song-infor">
                              <img
                                src="${songs.image}"
                                alt="singer"
                                class="img-song"
                              />
                              

                              <div class="infor">
                                <span class="title-user-song">${songs.title}</span>
                                <span class="singer-user-song">${songs.singer} </span>
                              </div>
                              <i class="fas fa-play"></i>
                            </div>
                            
                            <div class="right">
                              <i class="fas fa-microphone"></i>
                              <i class="fas fa-ellipsis-h"></i>
                            </div>
                          </div>
                          </div>
            `
        });
        const html2 = newSong2.map((songs, index) => {
            return `
            <div class="width">
            <div class="left">
                            <article>
                              <h1>${index + 1}</h1>
                            </article>
                            <i class="fas fa-minus"></i>
                            <div class="song-infor">
                              <img
                                src="${songs.image}"
                                alt="singer"
                                class="img-song"
                              />
                              

                              <div class="infor">
                                <span class="title-user-song">${songs.title}</span>
                                <span class="singer-user-song">${songs.singer} </span>
                              </div>
                              <i class="fas fa-play"></i>
                            </div>
                            
                            <div class="right">
                              <i class="fas fa-microphone"></i>
                              <i class="fas fa-ellipsis-h"></i>
                            </div>
                          </div>
                          </div>
            `
        });
        playWeekTrend[0].innerHTML = html.join("");
        playWeekTrend[1].innerHTML = html1.join("");
        playWeekTrend[2].innerHTML = html2.join("");

    },
    PlaySongUser: function () {
        
        
        const listPlayUser = $$(".list-song-user .thesong")
        listPlayUser.forEach((play, index) => {
            play.onclick = () => {
                play.focus();
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
    PlaySongTrend: function () {
        const listPlayUser = $$(".toptrendLevel .thesong")
        listPlayUser.forEach((play, index) => {
            play.onclick = () => {
                play.focus();

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
        this.renderUser();
        this.renderWeekUser();
        this.renderSongtrend();
        this.loadCurrentSong();
        this.loadTime();
        this.PlaySongUser();
        this.PlaySongTrend();
        this.handledSong();


    }
}

app.run();

window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,

        backgroundColor: "#2b1a42",
        axisX:{
            labelFontColor: "#ffff"
        },
        axisY: {
            labelFontColor: "#ffff",
            suffix: "%",
            includeZero: true
            , tickLength: 10
        },
        legend: {
            cursor: "pointer",
		fontSize: 16,
        },
        toolTip: {
            // shared: true
        },
        data: [{
            name: "Níu Duyên",
            type: "spline",
            xValueType: "dateTime",
            xValueFormatString: "Níu duyên",
            yValueFormatString: "#,##0.##\"%\"",
            dataPoints: [
                { x: new Date(2021, 8, 24), y: 51 },
                { x: new Date(2021, 8, 25), y: 61 },
                { x: new Date(2021, 8, 26), y: 79 },
                { x: new Date(2021, 8, 27), y: 59 },
                { x: new Date(2021, 8, 28), y: 41 },
                { x: new Date(2021, 8, 29), y: 80 },
                { x: new Date(2021, 8, 30), y: 79 }
            ]
        },
        {
            name: "Phận duyên lỡ làng",
            type: "spline",
            xValueType: "dateTime",
            xValueFormatString: "'Ph'ận duyên lỡ làng",
            yValueFormatString: "#,##0.##\"%\"",
            dataPoints: [
                { x: new Date(2021, 8, 24), y: 40 },
                { x: new Date(2021, 8, 25), y: 50 },
                { x: new Date(2021, 8, 26), y: 65 },
                { x: new Date(2021, 8, 27), y: 75 },
                { x: new Date(2021, 8, 28), y: 25 },
                { x: new Date(2021, 8, 29), y: 55 },
                { x: new Date(2021, 8, 30), y: 45 }
            ]
        },
        {
            name: "Sài gòn đau lòng quá",
            type: "spline",
            xValueType: "dateTime",
            xValueFormatString: "Sài gòn đau lòng quá",
            yValueFormatString: "#,##0.##\"%\"",
            dataPoints: [
                { x: new Date(2021, 8, 24), y: 25 },
                { x: new Date(2021, 8, 25), y: 39 },
                { x: new Date(2021, 8, 26), y: 43 },
                { x: new Date(2021, 8, 27), y: 24 },
                { x: new Date(2021, 8, 28), y: 4 },
                { x: new Date(2021, 8, 29), y: 13 },
                { x: new Date(2021, 8, 30), y: 23 }
            ]
        }]
    });
    chart.render();

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }

}