//JSON to string
fetch('data.json')
    .then((res)=>{
        return res.json();
    })
    .then(obj=>{
        console.log(obj["name"]);
        console.log(obj.age);
    })