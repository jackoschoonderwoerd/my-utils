import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    Firestore,
    addDoc,
    collection,
    collectionData,
    collectionGroup,
    doc,
    docData,
    deleteDoc,
    updateDoc,
    DocumentReference,
    setDoc,
    orderBy,
    query
} from '@angular/fire/firestore';

export interface AuthItem {
    name: string
}

@Injectable({
    providedIn: 'root'
})


export class AuthItemsService {

    constructor(private fs: Firestore) { }

    addAuthItem(userEmail: string, authItem: AuthItem) {
        console.log(userEmail, authItem)
        const authItemRef = collection(this.fs, `auth/${userEmail}/items`);
        return addDoc(authItemRef, authItem)
    }
    deleteAuthItem(id: string) {
        const authItemRef = doc(this.fs, `auth/data/items/${id}`);
        return deleteDoc(authItemRef)
    }

    getAuthItems() {
        const authItemsRef = collection(this.fs, 'auth/data/items')
        return collectionData(authItemsRef, { idField: 'id' }) as Observable<AuthItem[]>
    }
}
