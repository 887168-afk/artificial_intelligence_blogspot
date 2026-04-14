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
const applicantName = document.getElementById("applicantName")
const applicantAbility1 = document.getElementById("applicantAbility1")
const applicantAbility2 = document.getElementById("applicantAbility2")
const applicantAbility3 = document.getElementById("applicantAbility3")
const applicantAge = document.getElementById("applicantAge")
const applicantBirthYear = document.getElementById("applicantBirthYear")
const strengthsList = ["- Works fast and effcient", "- Makes zero mistakes", "- Very good at online tasks", "- Instantly answers questions"]
const weaknessesList = ["- Struggles working with others", "- Works slow and inefficient", "- Struggles with online tasks", "- Makes many mistakes"]

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
    let isAI = randint(0, 100)

    if (isAI >= 60) {
        let birthYear = randint(2020, 2026)
        let age = randint(0, 40)
        let ability1 = strengthsList[0]
        let ability2 = strengthsList[1]
        let ability3 = strengthsList[2]
        let name = randint(0, 5)

        if (name == 0) {
            name = "Mr. Generative"
        } else if (name == 1) {
            name = "Copper Pilot"
        } else if (name == 2) {
            name = "Rob Otter"
        } else if (name == 3) {
            name = "Albert Intelligence"
        } else if (name == 4) {
            name = "Fire Robot 3000"
        } else if (name == 5) {
            name = "Newton Net"
        }


        applicantName.InnerHTML = name
        applicantAbility1.InnerHTML = ability1
        applicantAbility2.InnerHTML = ability2
        applicantAbility3.InnerHTML = ability3
        applicantAge.InnerHTML = age 
        applicantBirthYear.InnerHTML = birthYear 
    } else if (isAI < 60) {
        let strengths = randint(0, 100)
        let birthYear = randint(1995, 2005)
        let age = 2026 - birthYear
        let name = randint(0, 5)
        let ability1 = ""
        let ability2 = ""
        let ability3 = ""

        if (strengths <= 30) {
            ability1 = strengthsList[0]
            ability2 = strengthsList[1]
            ability3 = strengthsList[2]
        } else if (strengths > 30 && strengths < 80) {
            ability1 = strengthsList[0]
            ability2 = weaknessesList[1]
            ability3 = strengthsList[2]
        } else if (strengths >= 80) {
            ability1 = weaknessesList[0]
            ability2 = weaknessesList[1]
            ability3 = weaknessesList[2]
        }
        
        if (name == 0) {
            name = "Bob Geraldson"
        } else if (name == 1) {
            name = "David"
        } else if (name == 2) {
            name = "William"
            ability1 = "- Enjoys robots"
            ability2 = "- Very good at generating questions"
            ability3 = "- Struggles with non-computer tasks"
        } else if (name == 3) {
            name = "Alexander"
        } else if (name == 4) {
            name = "Jerry"
        } else if (name == 5) {
            name = "Tom"
        }

        applicantName.InnerHTML = name
        applicantAbility1.InnerHTML = ability1
        applicantAbility2.InnerHTML = ability2
        applicantAbility3.InnerHTML = ability3
        applicantAge.InnerHTML = age 
        applicantBirthYear.InnerHTML = birthYear 
    }
}
