const apiKey =;
let elem = document.getElementsByTagName('pre')[0];
const chatGPT = async () => {
    await fetch("https://api.openai.com/v1/chat/completions", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
                { role: 'system', content: `${message}` },
                { role: 'user', content: 'I have successfully fetched brother yatta!' }
            ]
        })
    })
}
    .then(res => res.json())
    .then((data) => {
        if (data.error) {
            elem.textContent = "Error:" + data.error.message;
            return;
        }
        console.log(data.choices[0].message["content"])
    })
    .catch(err => console.error(err));