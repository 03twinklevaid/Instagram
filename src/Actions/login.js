export const handleLogin = (event, history, username, password) =>{
    event.preventDefault();
    console.log("action fired");
    const data = {username , password};
    username = encodeURIComponent(username);
    password = encodeURIComponent(password);
    return(dispatch) => {
        fetch(`http://localhost:9090/login`,{
            method: "post",
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify(data)
        })
        .then(res => {
            if(res.status === 200) {
                return res.json()
            }
            throw new Error("Invalid user");
        })
        .then((loginUser) => {
            dispatch({
                type: "LOGIN_SUCCESS",
                data: loginUser
            })
            console.log("???", loginUser, history)
            history.push('/profile')
            localStorage.setItem('id', loginUser.id);
            console.log('response', loginUser)
          })
          .catch(error => {
            console.log('Error', error);  
          });
    }
}

export const loadProfile = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:9090/me?id=${id}`)
        .then( res => {
            if(res.status === 200) {
                return res.json()
            }
        })
        .then((loginUser)=>{
            dispatch({
                type: "RELOAD_PROFILE",
                data: loginUser
            })
        })
        .catch(error => {
            console.log('Profile Reload Error', error);
        })
    }
}