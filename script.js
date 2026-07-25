// ======================================
// Daniel ❤️ Arike
// Romantic Proposal Website
// Part 1
// ======================================

const loader = document.getElementById("loader");
const bar = document.getElementById("bar");
const percent = document.getElementById("percent");
const message = document.getElementById("message");
const proposal = document.getElementById("proposal");
const music = document.getElementById("music");

let progress = 0;

const loading = setInterval(() => {

progress++;

bar.style.width = progress + "%";
percent.innerHTML = progress + "%";

if(progress >= 100){

clearInterval(loading);

setTimeout(()=>{

loader.style.display="none";

startTyping();

createHeart();

setInterval(createHeart,700);

music.play().catch(()=>{});

},700);

}

},35);


// ======================================
// Proposal Message
// ======================================

const text = `

Hi mama ❤️

Arike mhi,

If you're reading this, it means you scanned my weird QR code 😂 and now I can't hide how I feel anymore.

These past few days have been some of the happiest I've had in a long time.

Every conversation with you leaves me smiling, and I find myself looking forward to every message.

You've become someone I genuinely care about.

I know we've only known each other for a short time.

But I wanted to be honest with how I feel.

Arike...

Will you be my woman?

The one whose voice I want to hear every morning.

The one whose smile brightens my day.

The one I can call whenever I'm happy or sad.

The one I'd happily go the extra mile for.

The woman behind my smile.

No matter what your answer is...

Thank you for making these days so special.

I truly hope you'll say yes ❤️

Love,

Daniel ❤️

`;

let index = 0;

function startTyping(){

if(index < text.length){

message.innerHTML += text.charAt(index);

index++;

setTimeout(startTyping,35);

}else{

proposal.classList.remove("hidden");

}

}
// ======================================
// Buttons
// ======================================

const yesBtn = document.getElementById("yesBtn");
const maybeBtn = document.getElementById("maybeBtn");
const celebration = document.getElementById("celebration");
const maybeBox = document.getElementById("maybeBox");

yesBtn.addEventListener("click", () => {

    // Fire confetti
    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });

    document.getElementById("main").style.display = "none";
    celebration.classList.remove("hidden");

});

maybeBtn.addEventListener("click", () => {

    maybeBox.classList.remove("hidden");

});

// ======================================
// Floating Hearts
// ======================================

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = ["❤️","💕","💖","💗","💘"][Math.floor(Math.random()*5)];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.animationDuration =
        (5 + Math.random()*4) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

}
