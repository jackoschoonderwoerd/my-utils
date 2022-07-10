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

export interface User {
    id?: string;
    email: string;
    password?: string;

}

@Injectable({
    providedIn: 'root'
})


export class AuthService {

    private isLoggedInSubject = new BehaviorSubject<boolean>(false);
    public isLoggedIn$ = this.isLoggedInSubject.asObservable()


    constructor(private auth: Auth) {
        const user = localStorage.getItem(AUTH_DATA);

        if (user) {
            this.isLoggedInSubject.next(true)
        }
    }

    signup(user: User) {
        createUserWithEmailAndPassword(this.auth, user.email, user.password)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    logIn(user: User) {
        return from(signInWithEmailAndPassword(this.auth, user.email, user.password))
            .pipe(
                tap((fireAuthUser: any) => {
                    console.log(fireAuthUser)
                    const user: User = {
                        email: fireAuthUser.user.email
                    }
                    this.isLoggedInSubject.next(true);
                    localStorage.setItem(AUTH_DATA, JSON.stringify(user))
                })
            )
    }
    logout() {
        console.log('logout')
        this.isLoggedInSubject.next(false);
        localStorage.removeItem('auth_data')
    }
}
