import { Injectable } from '@angular/core';
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
import { Observable, BehaviorSubject } from 'rxjs';


export interface Definition {
    id?: string;
    item: string;
    definition: string
}
export interface Command {
    id?: string;
    command: string,
    effect: string
}

@Injectable({
    providedIn: 'root'
})


export class GitService {

    private definitsionsSubject = new BehaviorSubject<Definition[]>([])
    public definitions$ = this.definitsionsSubject.asObservable()

    constructor(private fs: Firestore) { }

    addDefinition(definition: Definition) {
        const definitionRef = collection(this.fs, 'git/data/definitions');
        return addDoc(definitionRef, definition)
    }
    getDefinitions() {
        const definitionsRef = collection(this.fs, 'git/data/definitions');
        return collectionData(definitionsRef, { idField: 'id' })
    }
    editDefinition(definition: Definition) {
        console.log(definition)
        const definitionRef = doc(this.fs, `git/data/definitions/${definition.id}`)
        return setDoc(definitionRef, definition)
    }
    deleteDefinition(id: string) {
        const definitionRef = doc(this.fs, `git/data/definitions/${id}`);
        return deleteDoc(definitionRef)
    }

    addCommand(command: Command) {
        const commandRef = collection(this.fs, 'git/data/commands');
        return addDoc(commandRef, command);
    }
    getCommands() {
        const commandsRef = collection(this.fs, 'git/data/commands');
        return collectionData(commandsRef, { idField: 'id' }) as Observable<Command[]>
    }
    editCommand(command: Command) {
        const commandRef = doc(this.fs, `git/data/commands/${command.id}`)
        return setDoc(commandRef, command);
    }
    deleteCommand(id: string) {
        const commandRef = doc(this.fs, `git/data/commands/${id}`);
        return deleteDoc(commandRef)
    }

}
