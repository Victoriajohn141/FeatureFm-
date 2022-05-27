"use strict"

console.log("yes, linked javascript correctly")

2 + 2
3 + 5



function addTwoNumbers(numberOne, numberTwo) {
    return numberOne + numberTwo;
}


// arguments

addTwoNumbers(2, 3)

function getSongInformation() {
    console.log('Calling function getSOngInformation')
    return {
        artist: 'for King & Country',
        songName: 'Run',
        coverArt: 'https://res.cloudinary.com/feature-fm/image/fetch/s--IS6xrwXV--/w_424,h_424,c_lfill/c_scale,fl_relative,w_1.1/e_blur_region:800/f_auto/https%3A%2F%2Fimagestore.ffm.to%2Flink%2Fd27d55b5e180206564f6ab43fa728f54.png',
        streamingPlatforms: [
            {
                streamUrl: 'https://www.youtube.com/watch?v=xxpDAU-ig_Y',
                logoUrl: 'https://res.cloudinary.com/feature-fm/image/fetch/s--s4BYPacw--/h_64,c_scale/f_auto/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_youtube.png',
                actionText: 'play'
            },
            {
                streamUrl: 'https://music.apple.com/ng/album/l%C3%B6v/1608586600',
                logoUrl: 'https://res.cloudinary.com/feature-fm/image/fetch/s--RduBEAtU--/h_64,c_scale/f_auto/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_applemusic_listen.png',
                actionText: 'play'
            },
            {
                streamUrl: 'https://www.boomplay.com/share/album/40140729?srModel=COPYLINK&srList=IOS&ffm=FFM_56ddd1e25f937722c5a18d565dc4ec9c',
                logoUrl: 'https://res.cloudinary.com/feature-fm/image/fetch/s--lvBUgFRc--/h_64,c_scale/f_auto/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_boomplay_new.png',
                actionText: 'play'
            }
        ]
    }
}




(
    function() {
        const songInformation = getSongInformation();
        songInformation.artist - songInformation.songName

        document.querySelector('div.song-information-section h3').innerText = `${songInformation.artist} - ${songInformation.songName}`;
        console.log(document.querySelector("ul#streaming-platforms"))

        // Todo: refactor to functions
        const list = document.createElement('li')
        list.className = "streaming-platform-1"
        console.log(list)

        const img = document.createElement('img')
        img.src = "https://res.cloudinary.com/feature-fm/image/fetch/s--RduBEAtU--/h_64,c_scale/f_auto/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_applemusic_listen.png"
        img.className = "tube";

        const a = document.createElement('a')
        a.className = "btn";
        a.target = "_blank";
        a.href = "https://www.youtube.com/watch?v=xxpDAU-ig_Y";
        a.innerText = "Play";

        list.appendChild(img);
        list.appendChild(a);
        let ul = document.querySelector('ul#streaming-platforms');

        ul.appendChild(list);

        console.log(a)
        console.log(ul)
        
       
        const songItem2 = songInformations("https://open.spotify.com/album/0xATpwMQQqS5Gb7gS16MIa", "https://cloudinary-cdn.ffm.to/s--e_GXTT_B--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_spotify.png");

        ul.appendChild(songItem2);
       
        const songItem3 = songInformations("https://www.boomplay.com/share/album/40140729?srModel=COPYLINK&srList=IOS&ffm=FFM_97fc9427eddbf0bd7d40bbd42ac991ad", "https://cloudinary-cdn.ffm.to/s--JovdmVc_--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_boomplay_new.png");

        ul.appendChild(songItem3);

        const songItem4 = songInformations("https://audiomack.com/tome/album/lov?ffm=FFM_891fa8c99bdcd5ce0e1da0606d807595", "https://cloudinary-cdn.ffm.to/s--afUcMju---/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_audiomack.png"); 

        ul.appendChild(songItem4);



        const songItem = songInformations("https://soundcloud.com/tomesroom/sets/loev-4", "https://cloudinary-cdn.ffm.to/s--U_n7Xhib--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_soundcloud.png");
        console.log(songItem)

        ul.appendChild(songItem);

    }
)()


    function songInformations(href, src) {
        const a = document.createElement('a')
        const img = document.createElement('img');
        const list = document.createElement('li');
        img.className = "tube"; img.src = src;
        list.className = "streaming-platform-1";
        a.className = "btn"; a.href = href;
        a.target = "_blank";
        a.innerText = "Play";
        list.appendChild(img);
        list.appendChild(a);
         
        return list

    }
