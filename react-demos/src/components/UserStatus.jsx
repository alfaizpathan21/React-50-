import React from 'react'

const UserStatus = (props) => {

 if(props.loggedIn && props.isAdmin){
    return <h2> welcome admin</h2>
 }else{
    return <h1  > user wlc</h1>
 }
}

export default UserStatus
