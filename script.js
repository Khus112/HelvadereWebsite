document.addEventListener('DOMContentLoaded', (event) => {
    const typewriterScreen = document.getElementById('typewriterScreen');
    const typewriterText = document.getElementById('typewriterText');
    const typewriterSubtitle = document.getElementById('typewriterSubtitle');
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const clickMeButton = document.getElementById('clickMeButton');
    const backButton = document.getElementById('backButton');
    const heading = document.getElementById('heading');


    // Title typewriter effect
    const titleText = 'Helvadere';
    let titleIndex = 0;
    function typeWriterTitle() {
        if (titleIndex < titleText.length) {
            typewriterText.innerHTML += titleText.charAt(titleIndex);
            titleIndex++;
            setTimeout(typeWriterTitle, 150); // Speed of typing
        } else {
            typewriterSubtitle.style.display = 'block'; // Show subtitle
            typeWriterSubtitle(); // Start typing subtitle
        }
    }
    typeWriterTitle();

    // Subtitle typewriter effect
    const subtitleText = 'Kasabamiza Hos geldiniz';
    let subtitleIndex = 0;
    function typeWriterSubtitle() {
        if (subtitleIndex < subtitleText.length) {
            typewriterSubtitle.innerHTML += subtitleText.charAt(subtitleIndex);
            subtitleIndex++;
            setTimeout(typeWriterSubtitle, 150); // Speed of typing
        } else {
            // Delay before switching screens, after the full texts are revealed
            setTimeout(() => {
                typewriterScreen.style.display = 'none'; // Hide typewriter screen
                screen1.style.display = 'block'; // Show screen 1
            }, 2000); // 3-second delay
        }
    }

    // Event listeners for button clicks
    clickMeButton.addEventListener('click', () => {
        screen1.style.display = 'none';
        screen2.style.display = 'block';
    });

    backButton.addEventListener('click', () => {
        screen1.style.display = 'block';
        screen2.style.display = 'none';
    });
});
