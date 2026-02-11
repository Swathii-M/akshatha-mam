const photos = [
    "photo/mam1.jpg","photo/mam2.jpg","photo/mam3.jpg",
    "photo/mam4.jpg","photo/mam5.jpg","photo/mam6.jpg",
    "photo/mam7.jpg","photo/mam8.jpg","photo/mam9.jpg",
    "photo/mam11.jpg","photo/mam13.jpg"
];

const captions = [
   "A beacon of dedication 🌟","Inspiring every student’s journey 📖","Kindness in every word 💖",
    "Wisdom that lights the way ✨","Patience beyond measure ⏳","Motivating dreams to reality 🚀",
    "Caring with a big heart 🌸","Guiding with love and knowledge ❤️","Leadership through example 🏆",
    "Encouragement that uplifts 💫","Forever inspiring and unforgettable 🌷"
];

let index = 0;

function startSlideshow() {
    document.getElementById("layer1").classList.remove("active");
    document.getElementById("layer2").classList.add("active");
    showNext();
}

function showNext() {
    if (index < photos.length) {
        const img = document.getElementById("photo");
        const cap = document.getElementById("caption");

        img.src = photos[index];
        cap.textContent = captions[index];

        img.classList.remove("active");
        cap.classList.remove("active");

        setTimeout(() => {
            img.classList.add("active");
            cap.classList.add("active");
        }, 100);

        index++;
        setTimeout(showNext, 3000);
    } else {
        document.getElementById("layer2").classList.remove("active");
        document.getElementById("layer3").classList.add("active");
        startTyping();
    }
}

const text = `Happy Birthday Akshatha Mam 🤍
You are not just a teacher, you are a blessing.
Your guidance and care mean everything to me.
May your life be filled with happiness and love 🌸`;

let i = 0;
function startTyping() {
    const t = document.getElementById("typingText");
    if (i < text.length) {
        t.innerHTML += text.charAt(i);
        i++;
        setTimeout(startTyping, 40);
    } else {
        document.getElementById("signature").style.opacity = 1;
    }
}
