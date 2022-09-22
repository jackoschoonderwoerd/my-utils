import { Injectable } from '@angular/core';
import {
    Storage,
    ref,
    deleteObject,
    uploadBytes,
    uploadString,
    uploadBytesResumable,
    percentage,
    getDownloadURL,
    getMetadata,
    provideStorage,
    getStorage,
    getBytes,


} from '@angular/fire/storage';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Observable } from 'rxjs';

export class AudioUploadData {
    audioUrl: string;
    audioStoragePath: string;
}

@Injectable({
    providedIn: 'root'
})
export class AudioService {



    private downloadUrlSubject = new BehaviorSubject<string>('')
    downloadUrl$ = this.downloadUrlSubject.asObservable()
    private loadingAudioSubject = new BehaviorSubject<boolean>(false)
    loadingAudio$ = this.loadingAudioSubject.asObservable()

    constructor(
        public storage: Storage
    ) { }

    uploadAudio(folder: string, filename: string, file: File) {
        this.loadingAudioSubject.next(true)
        const storageRef = ref(this.storage, 'audio/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes);
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                console.log(error.message)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downLoadUrl) => {

                    this.downloadUrlSubject.next(downLoadUrl);


                    this.loadingAudioSubject.next(false);


                })
            }
        )
    }
}
