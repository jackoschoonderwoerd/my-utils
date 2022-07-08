import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MySemiSwipeService {

    @Output() sequence = new EventEmitter<string>();

    imagePaths: string[] = [
        'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
        'https://images7.memedroid.com/images/UPLOADED860/5c6e0e4fc64e3.jpeg',
        'https://firebasestorage.googleapis.com/v0/b/cafedeengelbewaarder-20.appspot.com/o/exhibitions%2Ftuya-street%2FTuya_Promo01_resampled.png?alt=media&token=7d13a020-4635-4eaa-8670-08653391b605',
        'https://firebasestorage.googleapis.com/v0/b/cafedeengelbewaarder-20.appspot.com/o/exhibitions%2Ftuya-street%2FTuya_Promo02.jpg?alt=media&token=0c2dc5bf-d75d-449a-9b6e-92e991b3865b',
        'https://firebasestorage.googleapis.com/v0/b/cafedeengelbewaarder-20.appspot.com/o/exhibitions%2Ftuya-street%2FTuya_Promo06.jpg?alt=media&token=eb19e0d4-e339-433d-8324-03ad769a5217',
        'https://firebasestorage.googleapis.com/v0/b/cafedeengelbewaarder-20.appspot.com/o/exhibitions%2Ftuya-street%2FTuya_Promo08.jpg?alt=media&token=58138d34-cd53-4b7d-9c86-715fda6e51a0',
        'https://firebasestorage.googleapis.com/v0/b/cafedeengelbewaarder-20.appspot.com/o/exhibitions%2Ftuya-street%2FTuya_Promo10.jpg?alt=media&token=a9e28980-df1a-45b6-853f-c5b8b70b750b',
        'https://firebasestorage.googleapis.com/v0/b/cafedeengelbewaarder-20.appspot.com/o/exhibitions%2Ftuya-street%2FTuya_Promo07.jpg?alt=media&token=2d5682eb-7407-424e-a85b-9230a404aaaf',
        'https://firebasestorage.googleapis.com/v0/b/cafedeengelbewaarder-20.appspot.com/o/exhibitions%2Ftuya-street%2FTuya_Promo03.jpg?alt=media&token=bd9d5c8f-d310-4ab6-a948-a534e012c0ab'
    ]

    constructor() { }

    getImagePaths() {
        return this.imagePaths
    }
    previous() {
        this.sequence.emit('previous');
    }
    next() {
        this.sequence.emit('next');
    }
}
