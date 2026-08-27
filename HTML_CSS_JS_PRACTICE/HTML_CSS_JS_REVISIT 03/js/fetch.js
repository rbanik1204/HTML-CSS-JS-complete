async function weather(src) {
    let p = await fetch(src)

    let result = await p.text()

    console.log(result)
}

weather("https://wttr.in/Kolkata")