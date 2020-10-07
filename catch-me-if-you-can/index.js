try{

function sum(x, y){
    typeof x;
    typeof y;
    if (typeof x !== "number" || typeof y !== "number"){
        throw "Hey! You can't add me!"
    }else{
        return x + y
    }
}
console.log(sum(1, 2))
console.log (sum("1", "2"))
}

catch(err){
    console.log(err)
}


const user = {username: "Tony", password: "password"}
try{
    function login(username, password){
        if (username !== user.username || password !== user.password){
            throw "Username or password not correct. Please try again"
        }else{
            return "Login successful"
        }
    }
    console.log(login("Tony", "password"))
    console.log(login("Spongebob", "GoofyGoober"))
}

catch(err){
    console.log(err)
}