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

        img.classList.remove("show");
        cap.classList.remove("show");

        setTimeout(() => {
            img.classList.add("show");
            cap.classList.add("show");
        }, 100);

        index++;
        setTimeout(showNext, 3000);

    } else {
        document.getElementById("layer2").classList.remove("active");
        document.getElementById("layer3").classList.add("active");
        startTyping();
    }
}

/* TYPING */
const text = `Happy Birthday, Akshatha Mam 🤍
You are not just a teacher, you are a blessing in my life.
Your care, patience, and love have shaped me more than you’ll ever know.
In your words I found guidance, in your smile I found comfort,
and in your presence I found the strength to believe in myself.
I carry immense respect, gratitude, and pure love for you in my heart.
May your life be filled with the same warmth and happiness
that you spread to everyone around you—especially to me. 🌸`;

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
