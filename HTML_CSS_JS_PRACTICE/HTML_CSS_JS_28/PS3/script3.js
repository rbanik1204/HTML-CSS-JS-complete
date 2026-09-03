const createTodo = async (src) => {
  let options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    })
  }
  let myPromise = await fetch(src, options)
  return await myPromise.json()
}
let response = createTodo('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data))
