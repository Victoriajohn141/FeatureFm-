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
        artist: 'for King & COuntry',
        songName: 'Run',
        coverArt: 'https://res.cloudinary.com/feature-fm/image/fetch/s--IS6xrwXV--/w_424,h_424,c_lfill/c_scale,fl_relative,w_1.1/e_blur_region:800/f_auto/https%3A%2F%2Fimagestore.ffm.to%2Flink%2Fd27d55b5e180206564f6ab43fa728f54.png',
        streamingPlatforms: [
            {
                name: 'YouTube',
                streamUrl: '',
                logoUrl: ''
            },
            {
                name: 'Apple Music',
                streamUrl: '',
                logoUrl: ''
            }
        ]
    }
}




(
    function() {
        const songInformation = getSongInformation();
        songInformation.artist - songInformation.songName

        document.querySelector('div.song-information-section h3').innerText = `${songInformation.artist} - ${songInformation.songName};
    } 
)()

