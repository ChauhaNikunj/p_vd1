document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const successMessage = document.getElementById('success-message');
    const nextPageContainer = document.getElementById('next-page-container'); // Get the next page container
    let yesBtnSize = 1;

    yesBtn.addEventListener('click', function() {
        successMessage.classList.remove('hidden');
        setTimeout(() => {
            successMessage.classList.add('visible');
        }, 50);

        // Hide the buttons
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';

        // Show the "Go to My Note" button with smooth transition
        nextPageContainer.classList.add('visible');
    });

    noBtn.addEventListener('click', function() {
        // Increase the size of the Yes button
        yesBtnSize += 0.2;
        yesBtn.style.transform = `scale(${yesBtnSize})`;

        // Make the No button smaller and move it to a random position
        this.style.transform = 'scale(0.9)';
        const maxX = window.innerWidth - this.offsetWidth;
        const maxY = window.innerHeight - this.offsetHeight;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        this.style.position = 'fixed';
        this.style.left = randomX + 'px';
        this.style.top = randomY + 'px';
    });
});
