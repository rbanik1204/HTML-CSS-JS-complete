let a = fetch("https://goweather.xyz/weather/Ny",{
    headers: {
        Authentication: 'Secret'
    }
})
    .then((response) => {
        console.log(response.headers);
        console.log(response.status);
        console.log(response.ok);
        return response.json();
    }).then((value) => {
        console.log(value)
    })