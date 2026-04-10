const informationButton = document.getElementById("Button1")
const misuseAndEffectsButton = document.getElementById("Button2")
const jobReplacementButton = document.getElementById("Button3")
const aiAndClimateButton = document.getElementById("Button4")
const misinformationAndFraudButton = document.getElementById("Button5")
const gamesAndVideosButton = document.getElementById("Button6")
const sourcesButton = document.getElementById("Button7")
const hoverSound = document.getElementById("hoverSound")

const bg = document.getElementById("background1")
const notAIButton = document.getElementById("notAI")
const isAIButton = document.getElementById("isAI")
const applicantInformation = document.getElementById("applicantInformation")
const aiStrengths = ["- Works fast and effcient", "- Makes zero mistakes", "- Very good at online tasks", "- Instantly answers questions"]

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


function newApplicantGame(){
    let birthYear = randint(0, 100)
    let strengths = randint(0, 100)
    let age = randint(0, 100)

    if (birthYear >= 60){
        birthYear = randint(2020, 2026)
    } else if (birthYear < 60) {
        birthYear = randint(1999, 2005)
        age = 2026 - birthYear
    }

    if (strengths <= 30) {
        strengths = aiStrengths[randint(1, int(aiStrengths))]
    }
}
