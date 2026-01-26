async function main(uri){
    let res = await fetch(uri,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:'{"name":"test"}'
    })
    let data = await res.json()
    console.log(data)
}
main('')