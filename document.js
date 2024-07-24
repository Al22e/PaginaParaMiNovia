document.addEventListener('DOMContentLoaded', function() {
    const clickButton = document.getElementById('clickButton');
    const confettiButton = document.getElementById('confettiButton');
    const shortSound = document.getElementById('shortSound');
    const confettiSound = document.getElementById('confettiSound');
    const imageContainer = document.getElementById('imageContainer');

    clickButton.addEventListener('click', () => {
        shortSound.play();
    });

    confettiButton.addEventListener('click', () => {
        confettiSound.play();
        showConfetti();
        showImage();
    });

    function showConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    function showImage() {
        imageContainer.innerHTML = '<img src="image.jpg" alt="Confeti" width="200">';
    }
});
