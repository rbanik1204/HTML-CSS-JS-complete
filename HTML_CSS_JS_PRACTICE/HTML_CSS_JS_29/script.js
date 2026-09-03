// localStorage.setItem('username',"Ratul");
const user = {name:'Ratul',Roll:62};
localStorage.setItem("user",JSON.stringify(user));
localStorage.removeItem('username');
localStorage.clear();