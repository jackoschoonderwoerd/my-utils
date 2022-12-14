import { Injectable } from '@angular/core';


import {
    Auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    user
} from '@angular/fire/auth';
import { jsonEval } from '@firebase/util';
import { BehaviorSubject, from, map, Observable, pipe, tap } from 'rxjs';

const AUTH_DATA = 'auth_data'

export interface AuthUser {
    id?: string;
    email: string;
    password?: string;

}

@Injectable({
    providedIn: 'root'
})


export class AuthService {

    authUser: AuthUser
    // private isLoggedInSubject = new BehaviorSubject<boolean>(false);
    // public isLoggedIn$ = this.isLoggedInSubject.asObservable();
    private loggedInUserSubject = new BehaviorSubject<any>(null)
    public loggedInUser$ = this.loggedInUserSubject.asObservable()


    constructor(private auth: Auth) {

        const user = JSON.parse(localStorage.getItem(AUTH_DATA));

        if (user) {
            console.log(user);
            this.loggedInUserSubject.next(user)
        }

    }


    signUp(user: AuthUser) {
        return from(createUserWithEmailAndPassword(this.auth, user.email, user.password))
        // .then(res => console.log(res))
        // .catch(err => console.log(err))
    }

    logIn(authUser: AuthUser) {
        console.log(authUser)
        return signInWithEmailAndPassword(this.auth, authUser.email, authUser.password)
            .then((fireAuthUser: any) => {
                console.log(fireAuthUser._tokenResponse.idToken);
                console.log(fireAuthUser.user.email)
                this.authUser = {
                    email: fireAuthUser.user.email
                }
                this.loggedInUserSubject.next(this.authUser);
                localStorage.setItem(AUTH_DATA, JSON.stringify(this.authUser))
                return authUser
            })
    }
    getAuthUser() {
        return this.authUser
    }



    // logIn(authUser: AuthUser) {
    //     console.log(authUser)
    //     return from(signInWithEmailAndPassword(this.auth, authUser.email, authUser.password))
    //         .pipe(
    //             tap((fireAuthUser: any) => {
    //                 console.log(fireAuthUser)
    //                 const user: AuthUser = {
    //                     email: fireAuthUser.user.email
    //                 }
    //                 this.loggedInUserSubject.next(user);
    //                 localStorage.setItem(AUTH_DATA, JSON.stringify(user))
    //             })
    //         )
    // }

    logOut() {
        console.log('logout')
        // this.isLoggedInSubject.next(false);
        this.loggedInUserSubject.next(null);
        localStorage.removeItem('auth_data')
        this.auth.signOut()
    }
}
