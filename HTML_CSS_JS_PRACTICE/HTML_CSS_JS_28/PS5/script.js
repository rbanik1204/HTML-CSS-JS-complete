// const apiKey = "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"
 let elem = document.getElementsByTagName('pre')[0];
const chatGPT = async (msg) => {
    try{
    await fetch("http://localhost:3000/chat", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization':`Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-4o",
            messages: [
                { role: 'system', content: "You are a helpful assistant." },
                { role: 'user', content: msg }
            ]
        })
    })
    .then(res=>res.json())
    .then((data) => {
        if (data.error) {
            elem.textContent = "Error:" + data.error.message;
            return;
        }
        console.log(data.choices[0].message.content)
    })
    .catch(err => console.error(err));
    }
    catch(error){
        console.log("Network/Fetch Error:",error);
    }
}
    const message = ["Hi GPT!", "How are you?", "Tell me a joke!"];
    message.forEach((msg,i)=>{
        setTimeout(()=>{
            chatGPT(msg);
        },10000*(i+1))
    })
