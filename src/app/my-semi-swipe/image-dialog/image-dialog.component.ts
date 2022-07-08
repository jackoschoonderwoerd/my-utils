
import { Component, ComponentFactoryResolver, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-image-dialog',
    templateUrl: './image-dialog.component.html',
    styleUrls: ['./image-dialog.component.scss'],
    // encapsulation: ViewEncapsulation.None
})
export class ImageDialogComponent implements OnInit {

    imagePath: string;
    imageWidth: number;
    imageHeight: number;
    containerWidth: number;
    containerHeight: number;
    windowWidth: number;
    windowHeight: number
    portrait: boolean;
    landscape: boolean;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit(): void {
        this.imagePath = this.data.imagePath;
        this.imageWidth = this.data.imageWidth;
        this.imageHeight = this.data.imageHeight;
        // this.containerWidth = this.data.containerWidth;
        // this.containerHeight = this.data.containerHeight;
        this.windowWidth = this.data.windowWidth
        this.windowHeight = this.data.windowHeight;
        console.log('this.imagePath: ', this.imagePath)
        // console.log('this.containerWidth: ', this.containerWidth)
        // console.log('this.containerHeight: ', this.containerHeight)
        console.log('this.imageWidth: ', this.imageWidth)
        console.log('this.imageHeight: ', this.imageHeight);
        console.log('this.windowWidth: ', this.windowWidth);
        console.log('this.windowHeight: ', this.windowHeight);
        this.determinePosition()
    }

    determinePosition() {
        const imageRatio = this.imageWidth / this.imageHeight;

        console.log('imageRatio: ', imageRatio)
        // const containerRatio = this.containerWidth / this.containerHeight;
        // console.log('containerRatio: ', containerRatio)
        const windowRatio = this.windowWidth / this.windowHeight
        console.log('windowRatio: ', windowRatio)
        if(this.imageHeight > this.imageWidth) {
            console.log('portrait')
            this.portrait = true;
            this.landscape = false;
            if(imageRatio > windowRatio) {
                
                return (this.containerWidth) + 'px';
            } else {
                console.log(this.imageWidth)
                return (this.containerWidth - 150) + 'px';
            }
        } else {
            console.log('landscape')
            this.landscape = true;
            this.portrait = false;
            // return (this.containerHeight) + 'px';
            return '100vw';
            
        }
    }
}
