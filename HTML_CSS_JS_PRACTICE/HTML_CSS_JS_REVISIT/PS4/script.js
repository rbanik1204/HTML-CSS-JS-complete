const weather = async () => {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Deg")
        }, 1000)
    });
    let bangloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => [
            resolve("21 Deg")
        ], 2000)
    })
    let delhiW = await delhiWeather;
    let bangloreW = await bangloreWeather;
    return [delhiW,bangloreW];
}
async function main(){
    const weathers = await weather();
    console.log(weathers)
}
main();
