
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const sessionNumber = document.getElementById('sessionNumber').value;
    const rentalTime = parseInt(document.getElementById('rentalTime').value, 10);
    const endTime = new Date().getTime() + rentalTime * 60000;

    const sessionName = `Session ${sessionNumber}`;
    const countdownElement = document.createElement('div');
    countdownElement.id = 'countdown';
    document.getElementById('notifications').innerHTML = `<h2>${sessionName}</h2>`;
    document.getElementById('notifications').appendChild(countdownElement);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endTime - now;

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `Time remaining: ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Time's up!";
            alert(`${sessionName} time has ended.`);
        }
    }

    updateCountdown(); // Initial call to show the countdown immediately
    const countdownInterval = setInterval(updateCountdown, 1000);
});
