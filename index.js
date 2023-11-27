setInterval(display_date,1000);

function display_date() {
    let date = new Date();
    let current_year = date.toLocaleString('en-GB');
    document.getElementById('year').innerHTML = current_year;
}

document.getElementById('submit').onclick = function () {
    const user_birthday = document.getElementById('Birthday').value;

    setInterval(function(){display_difference(); display_date();},1000);


    function display_difference() {
        document.getElementById('display_birthday').innerHTML = `Time spend on EARTH : ${calculateSecondsLived(user_birthday)} Seconds !! <br>
        ${calculateDaysLived(user_birthday)} Days !! <br>
        ${calculateYearsLived(user_birthday)} Years !! <br>`;
    }
    function calculateSecondsLived(birthDate) {
        const birthTimestamp = new Date(birthDate).getTime();
        const currentTimestamp = Date.now();
        const secondsLived = Math.floor((currentTimestamp - birthTimestamp) / 1000);
        return secondsLived;

    }
    function calculateDaysLived(birthDate) {
        const birthTimestamp = new Date(birthDate).getTime();
        const currentTimestamp = Date.now();
        const DaysLived = ((currentTimestamp - birthTimestamp) / (1000 * 60 * 60 * 24));
        return DaysLived.toFixed(2);
    }
    function calculateYearsLived(birthDate) {
        const birthTimestamp = new Date(birthDate).getTime();
        const currentTimestamp = Date.now();
        const YearsLived = ((currentTimestamp - birthTimestamp) / (1000 * 60 * 60 * 24 * 365));
        return YearsLived.toFixed(2);
    }
}
