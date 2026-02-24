const informationButton = document.getElementById("Button1")
const misuseAndEffectsButton = document.getElementById("Button2")
const jobReplacementButton = document.getElementById("Button3")
const aiAndClimateButton = document.getElementById("Button4")
const misinformationAndFraudButton = document.getElementById("Button5")
const gamesAndVideosButton = document.getElementById("Button6")
const sourcesButton = document.getElementById("Button7")
const hoverSound = document.getElementById("hoverSound")

function hoverSoundFunction(){
    hoverSound.currentTime = 0;
    hoverSound.play();
}
informationButton.addEventListener('mouseenter', () => {
    hoverSoundFunction();
})
misuseAndEffectsButton.addEventListener('mouseenter', () => {
    hoverSoundFunction();
})
jobReplacementButton.addEventListener('mouseenter', () => {
    hoverSoundFunction();
})
aiAndClimateButton.addEventListener('mouseenter', () => {
    hoverSoundFunction();
})
sourcesButton.addEventListener('mouseenter', () => {
    hoverSoundFunction();
})
misinformationAndFraudButton.addEventListener('mouseenter', () => {
    hoverSoundFunction();
})
gamesAndVideosButton.addEventListener('mouseenter', () => {
    hoverSoundFunction();
})

function changeWindow(settingWindow){
    let sound = document.getElementById('clickSound');
    sound.play();
    if (settingWindow) {
        window.location.href = settingWindow
    }
}