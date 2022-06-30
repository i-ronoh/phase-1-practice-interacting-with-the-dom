let countTimer = document.getElementById("counter")
let count = 0;
let intervalCount = setInterval(increasingSeconds, 1000)
const minusSign = document.getElementById("minus")
const plusSign = document.getElementById("plus")
const likeHeart = document.getElementById("heart")
const paused = document.getElementById('pause')
const btnSubmit = document.getElementById("submit")
const isPause = false

function increasingSeconds(){
    count++;
    countTimer.innerHTML = count
    return count;
}

minusSign.addEventListener("click", ()=>{
    count--
    countTimer.innerHTML=count
    return count
})

plusSign.addEventListener("click", ()=>{
    count++
    countTimer.innerHTML=count
    return count
})

likeHeart.addEventListener("click", ()=>{
    const liked = document.querySelector(".likes")
    const li = document.createElement("li")
    li.innerHTML = `${count} has been liked 1 time`
    liked.appendChild(li)
})

pause.innerHTML = "pause"

pause.addEventListener("click", ()=>{
    if(pause.innerHTML = "pause"){
        clearInterval(intervalCount)
        paused.innerHTML= "resume"
        minusSign.disabled = true
        plusSign.disabled = true
        likeHeart.disabled = true
        btnSubmit.disabled = true
    }
    else{
        pause.innerHTML = "pause"
        minusSign.disabled = false
        plusSign.disabled = false
        likeHeart.disabled = false
        btnSubmit.disabled = false
        setInterval(increasingSeconds, 1000)
    }
})

document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault()
    const comment = document.querySelector("#list")
    const input = document.querySelector("#comment-input").value
    const p = document.createElement("p")
    p.innerHTML = input
    comment.appendChild(p)
    document.querySelector("form").reset()
    console.log(input)
})