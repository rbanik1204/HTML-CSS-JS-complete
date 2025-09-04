function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
        alert('Loaded Script is ' + src);
        callback(null, script);
    }
    script.onerror = () => {
        console.log("Error while fetching " + src);
        callback(new Error("src has got some error!"), script);
    }
    document.head.appendChild(script);
}
function morning(src) {
    console.log("Good morning:", src);
}
loadScript('script2asef.js', function hello(error, src) {
    if (error) {
        console.log(error);
        return;
    } else {
        loadScript('script2asef.js', function hello(error, src) {
            if (error) {
                console.log(error);
                return;
            } else {
                loadScript('script2asef.js', function hello(error, src) {
                    if (error) {
                        console.log(error);
                        return;
                    } else {
                        loadScript('script2asef.js', function hello(error, src) {
                            if (error) {
                                console.log(error);
                                return;
                            } else {
                                loadScript('script2asef.js', function hello(error, src) {
                                    if (error) {
                                        console.log(error);
                                        return;
                                    } else {
                                        loadScript('script2asef.js', function hello(error, src) {
                                            if (error) {
                                                console.log(error);
                                                return;
                                            } else {
                                                console.log("Hello from function hello " + src);
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});
                  /* -------------------Pyramid of DOOM------------------------------------*/