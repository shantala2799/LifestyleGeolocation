// Dark Theme section
const changeMode = () => {
    let icon=document.getElementById('icon')
    icon.onclick = () =>{
        document.body.classList.toggle('mydark')
    if( document.body.classList.contains('mydark')){
        icon.src="Images/dark/sun.png" 
        icon.title="Switch to Light Mode"
    }else{
        icon.src="Images/dark/moon.png"
        icon.title="Switch to Dark Mode"
    }
    }
}
// Coupon code section
console.log("Coupon code")
const loadcoupon = () =>{
    let ele=document.getElementById("coupon")
    ele.style.display="block";
}
const closecoupon = () => {
    let ele=document.getElementById("coupon")
    ele.style.display="none";
    let myele=document.getElementById('mybdoy')
    myele.style.opacity="1"
    let header=document.getElementById('header')
    header.style.opacity="1"
    let footer=document.getElementById('footer')
    footer.style.opacity="1"
    let btn=document.getElementById("btn")
    btn.style.display="block"
}

// Geolocation
let weatherLoc = document.getElementById("weather");
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
                // showPosition is a callback function here
            } else {
                weatherLoc.innerHTML = "Geo not supported";
            }
        }

        let showPosition = (data) => {
            console.log(data);
            let latitude = data.coords.latitude;
            let longitude = data.coords.longitude;
            const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;

            // api calling
            fetch(url, { method: `GET` })
                // below .then will return promise
                .then((res) => res.json())          // .then is called promise 
                // below .then will resolve the promise; return data
                .then((data) => {
                    console.log(data)
                    let weatherData = data.list[0].temp.day;
                    weatherLoc.innerHTML = `${weatherData}\u00B0C`;     //    \u00B0 is code for degree symbol
                });
        }

        window.onload = function () {
            getLocation();
        }