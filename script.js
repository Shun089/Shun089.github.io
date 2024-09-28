let rejectCount = 0;
const rejectBtn = document.getElementById('rejectBtn');
const funnyImage = document.getElementById('funnyImage');
const acceptAudio = new Audio('2.mp3'); // Path to your acceptance audio file

// Show confession message when Yes is clicked
function showConfession() {
    document.getElementById('confessionMessage').style.display = 'block';  // Show the confession message
    document.getElementById('responseButtons').style.display = 'block';    // Show Accept and Reject buttons
}

// Hide everything if No is clicked
function rejectConfession() {
    document.getElementById('confessionMessage').style.display = 'none';
    document.getElementById('responseButtons').style.display = 'none';
    document.getElementById('rejectResponse').innerText = "Ouch! Ayaw mo malaman 😔";
}

// Accept function
function accept() {
    document.getElementById('acceptResponse').innerText = "Hala grabe, yes?, like mo nga convo natin if yes HAHAHA🥰";
    
    const gif = document.createElement('img');
    gif.src = "1.gif"; // Change this to your desired GIF file name
    gif.alt = "Happy GIF";
    gif.style.width = '150px';

    const acceptResponse = document.getElementById('acceptResponse');
    acceptResponse.appendChild(gif);

    acceptAudio.play().catch(error => {
        console.error("Error playing audio:", error);
    });
}

// Reject function
function reject() {
    document.getElementById('rejectResponse').innerText = "Ouch, okay lang naman🥲";
    rejectCount++;

    const rejectGif = document.createElement('img');
    rejectGif.src = "3.gif"; // Change this to your desired rejection GIF file name
    rejectGif.alt = "Sad GIF";
    rejectGif.style.width = '150px';

    const rejectResponse = document.getElementById('rejectResponse');
    rejectResponse.appendChild(rejectGif);

    const rejectAudio = new Audio('.mp3'); // Path to your rejection song
    rejectAudio.play().catch(error => {
        console.error("Error playing audio:", error);
    });

    if (rejectCount >= 10) {
        funnyImage.style.display = 'block'; // Show funny image at 10 rejections
    }
}

// Move Reject button randomly
function moveReject() {
    let posX = Math.floor(Math.random() * 300);
    let posY = Math.floor(Math.random() * 300);
    rejectBtn.style.position = 'absolute';
    rejectBtn.style.left = `${posX}px`;
    rejectBtn.style.top = `${posY}px`;
}