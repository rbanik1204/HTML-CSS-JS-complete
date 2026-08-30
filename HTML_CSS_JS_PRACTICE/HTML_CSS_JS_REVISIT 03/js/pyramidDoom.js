console.log("Pyramid Of Doom!")

function loadScript(src, callBack) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = (event) => {
        callBack(null, event.target);
    }
    script.onerror = (event) => {
        callBack(new Error(`${event.target.src} not loaded!`), event.target)
    }
    document.head.appendChild(script)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", function goodMorning(error, script) {
    if (error) {
        console.log(error.message);
        return
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap2@5.3.8/dist/js/bootstrap.bundle.min.js", function goodMorning(error, script) {
        if (error) {
            console.log(error.message);
            return
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap3@5.3.8/dist/js/bootstrap.bundle.min.js", function goodMorning(error, script) {
            if (error) {
                console.log(error.message);
                return
            }
            //...
            //.
            //.
            //.
        })
    })
})