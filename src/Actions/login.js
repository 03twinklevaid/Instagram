export const handleLogin = (event, history, username, password) =>{
    event.preventDefault();
    const data = {username , password};
    username = encodeURIComponent(username);
    password = encodeURIComponent(password);
    return(dispatch) => {
        fetch(`http://localhost:9090/auth/login`,{
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
            localStorage.setItem('id', loginUser._id);
            console.log('response', loginUser)
          })
          .catch(error => {
            console.log('Error', error);  
          });
    }
}

export const handleSignupSubmit = (event, history,email,fullname,username,password) => {
    event.preventDefault();
    return (dispatch) => {
        const data = {email, fullname, username, password }
        console.log("action fired",email,password,fullname,username);
        fetch('http://localhost:9090/auth/signup',{
            method: "post",
            headers: { "content-type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(
            (res) => {
                if(res.status === 200){
                    return history.push('/')
                }
            }
        )
    }
}

export const loadProfile = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:9090/user`,{
            method: "get",
            headers: {"id": id}
        })
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

export const uploadProfilePic = (event, id) => {
    return (dispatch) => {
        console.log('event.target.value', event.target.files[0])
        var formdata = new FormData();
        formdata.append("profilePic", event.target.files[0])
        fetch(`http://localhost:9090/upload`,{
            method: "post",
            body: formdata,
            headers: {
                id
            }
        })
        .then(res => {
            if(res.status === 200) {
                return res.json()
            }
        })
        .then(
            (user) => {
                dispatch({
                    type: "UPLOAD_PROFILE",
                    data: user
                })
            }
        )
        .catch(error => {
            console.log('Profile Reload Error', error);
        })
    }
}