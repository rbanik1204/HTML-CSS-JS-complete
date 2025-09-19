let options =  {
    method: 'POST',
    headers:{
        'content-type':'application/json;charset=UTF-8'
    },
    body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
}
fetch('https://jsonplaceholder.typicode.com/posts',options)
    .then(res=>res.json())
    .then(data=>console.log(data))
