const apiKey = "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";
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