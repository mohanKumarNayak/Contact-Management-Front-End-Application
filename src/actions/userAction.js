import Swal from 'sweetalert2';
import axios from '../config/axios'

export const startRegisterUser = (obj) => {
    return(dispatch)=>{
        axios.post('/users/register',obj.formData)
            .then((response)=>{
                if(response.data.errors){
                    Swal.fire(
                        'Error',
                        response.data.message,
                        'error'
                    )
                }
                else{
                    Swal.fire(
                        'Success',
                        'Registered Successfully',
                        'success'
                    )
                    window.location.href = '/'
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const addUser = (user) => {
    return {type : 'ADD_USER' ,payload : user}
}

export const startGetAccount = (token) => {
    return(dispatch)=>{
        axios.get('/users/account',{
            headers : {
                'x-auth' : token
            }
        })
        .then((user)=>{
            dispatch(addUser(user.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startLoginUser = (obj) => {
    return(dispatch)=>{
        axios.post('users/login',obj.formData)
            .then((user)=>{
                console.log(user)
                if(user.data.token){
                    localStorage.setItem('contact-token',user.data.token)
                    axios.get('users/account',{
                        headers : {
                            'x-auth' : localStorage.getItem('contact-token')
                        }
                    })
                    .then((userData)=>{
                        dispatch(addUser(userData.data))
                        Swal.fire(
                            'Success',
                            'Successfully Logged In',
                            'success'
                        )
                        window.location.href = '/contact'
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                }
                else{
                    Swal.fire(
                        'Error',
                        'Invalid Email or Passwors',
                        'error'
                    )
                }
            })
    }
}

export const startLogout = () => {
    return(dispatch)=>{
        axios.delete('/users/logout',{
            headers : {
                'x-auth' : localStorage.getItem('contact-token')
            }
        })
        .then((response)=>{
            localStorage.removeItem('contact-token')
            Swal.fire(
                'Success',
                'Successfully Logged Out',
                'success'
            )
            window.location.href = '/'
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}