let rejectCount = 0;
const rejectBtn = document.getElementById('rejectBtn');
const funnyImage = document.getElementById('funnyImage');
const acceptAudio = new Audio('2.mp3'); // Path to your acceptance audio file

function accept() {
    // Update the accept response text
    document.getElementById('acceptResponse').innerText = "Hala grabe, inaccept mo? like mo nga convo natin if inaccept mo🥰";
    
    // Create an image element for the GIF
    const gif = document.createElement('img');
    gif.src = "1.gif"; // Change this to your desired GIF file name
    gif.alt = "Happy GIF";
    gif.style.width = '150px'; // Adjust the size as necessary

    // Append the GIF to the accept response section
    const acceptResponse = document.getElementById('acceptResponse');
    acceptResponse.appendChild(gif);

    // Play the acceptance audio
    acceptAudio.play().catch(error => {
        console.error("Error playing audio:", error);
    });
}

function reject() {
    document.getElementById('rejectResponse').innerText = "Ouch! Ayaw mo 😔";
    rejectCount++;

    // Create an image element for the rejection GIF
    const rejectGif = document.createElement('img');
    rejectGif.src = "3.gif"; // Change this to your desired rejection GIF file name
    rejectGif.alt = "Sad GIF";
    rejectGif.style.width = '150px'; // Adjust the size as necessary

    // Append the rejection GIF to the reject response section
    const rejectResponse = document.getElementById('rejectResponse');
    rejectResponse.appendChild(rejectGif);

    // Play the rejection song
    const rejectAudio = new Audio('.mp3'); // Path to your rejection song
    rejectAudio.play().catch(error => {
        console.error("Error playing audio:", error);
    });

    // Change rejection limit to 8
    if (rejectCount >= 10) {
        funnyImage.style.display = 'block'; // Show the funny image at rejection count 8
    }
}

function moveReject() {
    let posX = Math.floor(Math.random() * 300);
    let posY = Math.floor(Math.random() * 300);
    rejectBtn.style.position = 'absolute';
    rejectBtn.style.left = `${posX}px`;
    rejectBtn.style.top = `${posY}px`;
}