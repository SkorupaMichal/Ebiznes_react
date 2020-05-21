import {observable, computed, reaction, action, decorate} from 'mobx';

export default class UserStore{

    user = null
    setUser(user){
        this.user = user;
    }
    get userIdentity(){
        return this.user
    }
}
decorate(UserStore,{
    userIdentity:computed,
    user:observable,
    setUser:action,
})