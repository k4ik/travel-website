document.addEventListener('DOMContentLoaded', () => {
    const clickableItems = document.querySelectorAll('.clickable');
    const containerForm = document.getElementById('container-form');
    const form = document.getElementById('form');

    const content = {
        flight: `
            <div>
                <label for="from">From</label>
                <input type="text" id="from" name="from" placeholder="Departing from">
            </div>
            <div>
                <label for="to">To</label>
                <input type="text" id="to" name="to" placeholder="Arriving at">
            </div>
        `,
        hotel: `
            <div>
                <label for="location">Location</label>
                <input type="text" id="location" name="location" placeholder="Where to stay">
            </div>
            <div>
                <label for="checkin">Check-in</label>
                <input type="date" id="checkin" name="checkin">
            </div>
            <div>
                <label for="checkout">Check-out</label>
                <input type="date" id="checkout" name="checkout">
            </div>
        `,
        rental: `
            <div>
                <label for="pickup">Pick-up</label>
                <input type="date" id="pickup" name="pickup">
            </div>
            <div>
                <label for="dropoff">Drop-off</label>
                <input type="date" id="dropoff" name="dropoff">
            </div>
            <div>
                <label for="car-type">Car type</label>
                <input type="text" id="car-type" name="car-type" placeholder="Type of car">
            </div>
        `
    };

    function handleButtonClick(contentType) {
        clickableItems.forEach(el => el.classList.remove('active'));

        document.querySelector(`[data-content="${contentType}"]`).classList.add('active');

        form.innerHTML = content[contentType];
        containerForm.style.display = 'block'; 
    }

    clickableItems.forEach(item => {
        item.addEventListener('click', () => {
            const contentType = item.getAttribute('data-content');
            handleButtonClick(contentType);
        });
    });

    handleButtonClick('flight');
});
