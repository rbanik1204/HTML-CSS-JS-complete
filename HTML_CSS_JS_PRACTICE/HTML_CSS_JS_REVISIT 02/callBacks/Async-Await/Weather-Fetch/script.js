async function main() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Fetched weather of delhi!')
        }, 1000)
    })

    let bangaloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Fetched weather of Bangalore!')
        }, 2000)
    })
    let delhiW = await delhiWeather
    let bangaloreW = await delhiWeather
}
let a =main()
console.log(a)