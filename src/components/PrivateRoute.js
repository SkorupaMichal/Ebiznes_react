import React from "react";
import {Route, Redirect} from 'react-router-dom'
import {inject,observer} from "mobx-react";
import {useAuth} from "../context/auth";
function PrivateRoute({component:Component,...rest}){
    //const {authTokens} = useAuth()

    return (
        <Route
            {...rest} render={(props)=>
            rest.basketStore.userIdentity? (
            <Component {...props}/>
            ):(
                <Redirect to='/login'/>
            )
        }/>
    )
}
export default inject('basketStore')(observer(PrivateRoute))