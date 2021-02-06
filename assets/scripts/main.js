// main.js

const soundImage = document.getElementById("sound-image");
const volumeImage = document.getElementById("volume-image");

const volumeNumber = document.getElementById("volume-number");
const volumeSlider = document.getElementById("volume-slider");

const radioAirHorn = document.getElementById("radio-air-horn");
const radioCarHorn = document.getElementById("radio-car-horn");
const radioPartyHorn = document.getElementById("radio-party-horn");

const hornSound = document.getElementById("horn-sound");
const honkBtn = document.getElementById("honk-btn");

function getVolumeLevel(volume) {
    if (volume >= 67) {
        return "volume-level-3";
    } else if (volume >= 34) {
        return "volume-level-2";
    } else if (volume >= 1) {
        return "volume-level-1";
    } else {
        return "volume-level-0";
    }
}

function handleVolumeUpdate(volume) {
    volumeImage.src = "./assets/media/icons/" + getVolumeLevel(volume) + ".svg";

    volumeNumber.value = volume;
    volumeSlider.value = volume;

    hornSound.volume = volume/100;

    if (volume == 0) {
        honkBtn.disabled = true;
    } else {
        honkBtn.disabled = false;
    }
}

function handleSoundUpdate(sound) {
    switch (sound) {
        case "air":
            soundImage.src = "./assets/media/images/air-horn.svg";
            hornSound.src = "./assets/media/audio/air-horn.mp3";
            break;
        case "car":
            soundImage.src = "./assets/media/images/car.svg";
            hornSound.src = "./assets/media/audio/car-horn.mp3";
            break;
        case "party":
            soundImage.src = "./assets/media/images/party-horn.svg";
            hornSound.src = "./assets/media/audio/party-horn.mp3";
            break;
        default:
            break;
    }
}

volumeNumber.addEventListener("input", function (event) {
    handleVolumeUpdate(event.target.value);
})

volumeSlider.addEventListener("input", function (event) {
    handleVolumeUpdate(event.target.value);
})

radioAirHorn.addEventListener("click", function () {
    handleSoundUpdate("air");
})

radioCarHorn.addEventListener("click", function () {
    handleSoundUpdate("car");
})

radioPartyHorn.addEventListener("click", function () {
    handleSoundUpdate("party");
})

honkBtn.addEventListener("click", function (event) {
    event.preventDefault();
    hornSound.play();
})