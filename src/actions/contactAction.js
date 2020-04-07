import axios from '../config/axios'
import contacts from '../components/contatcs/contacts'

export const addContacts = (contact) => {
    return {type : 'ADD_CONTACTS',payload : contact}
}

export const startGetAllContacts = () => {
    return(dispatch)=>{
    axios.get('/contacts',{
        headers : {
            'x-auth' : localStorage.getItem('contact-token')
        }
    })
    .then((contact)=>{
        dispatch(addContacts(contact.data))
    })
    .catch((err)=>{
        console.log(err)
    })
}
}

export const addNewContact = (contact) => {
    return {type : 'ADD_NEW_CONTACT' ,payload : contact}
}

export const startAddContact = (obj) => {
    return(dispatch)=>{
        axios.post('/contacts',obj.formData,{
            headers : {
                'x-auth' : localStorage.getItem('contact-token')
            }
        })
        .then((contact)=>{
            dispatch(addNewContact(contact.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const addRemoveContact = (contact) => {
    return {type : 'REMOVE_CONTACT',payload : contact}
}

export const startRemoveContact = (id) => {
    return(dispatch)=>{
        axios.delete(`/contacts/${id}`,{
            headers : {
                'x-auth' : localStorage.getItem('contact-token')
            }
        })
        .then((contact)=>{
            dispatch(addRemoveContact(contact.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startUpdateContact = (obj) => {
    return(dispatch)=>{
        axios.put(`/contacts/${obj.id}`,obj.formData,{
            headers : {
                'x-auth' : localStorage.getItem('contact-token')
            }
        })
            .then((response)=>{
                window.location.href = '/contact'
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}