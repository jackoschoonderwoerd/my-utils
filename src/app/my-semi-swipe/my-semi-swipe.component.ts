import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { MySemiSwipeService } from './my-semi-swipe.service';


@Component({
    selector: 'app-my-semi-swipe',
    templateUrl: './my-semi-swipe.component.html',
    styleUrls: ['./my-semi-swipe.component.scss']
})
export class MySemiSwipeComponent implements OnInit, AfterViewInit {

    imagePaths: string[] = [];
    imagePath: string;
    imageIndex: number = 0;
    @ViewChild('image') private image: ElementRef;
    public windowWidth: any;
    public windowHeight: any;

    constructor(
        private mySemiSwipeService: MySemiSwipeService,
        private dialog: MatDialog) { }

    ngOnInit(): void {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        console.log(this.windowWidth, this.windowHeight)
        this.imagePaths = this.mySemiSwipeService.getImagePaths(),
            this.imagePath = this.imagePaths[this.imageIndex]
        this.mySemiSwipeService.sequence.subscribe((sequence) => {
            if (sequence === 'next') {
                this.nextImage()
            } else if (sequence === 'previous') {
                this.previousImage();
            }
        })
    }

    onLoad(image: any) {
        const imageHeight = image.naturalHeight;
        const imageWidth = image.naturalWidth;
        const containerHeight = image.height
        const containerWidth = image.width;
        const dialogRef = this.dialog.open(ImageDialogComponent, {
            data:  {
                imagePath: this.imagePaths[this.imageIndex],
                imageHeight,
                imageWidth,
                containerHeight,
                containerWidth,
                windowWidth: this.windowWidth,
                windowHeight: this.windowHeight

            },
            panelClass: 'fullscreen'
        })
        
        dialogRef.afterClosed().subscribe(instruction => {
            if(instruction === 'next') {
                this.nextImage()
            } else if(instruction === 'previous') {
                this.previousImage()
            }
        })
    }

    

    ngAfterViewInit(): void {

    }

    addListener() {

    }

    nextImage() {
        if (this.imageIndex < this.imagePaths.length - 1) {
            this.imageIndex += 1;
        } else {
            this.imageIndex = 0;
        }
        this.imagePath = this.imagePaths[this.imageIndex]
    }
    previousImage() {
        if (this.imageIndex > 0) {
            this.imageIndex -= 1;
        } else {
            this.imageIndex = this.imagePaths.length - 1;
        }
        this.imagePath = this.imagePaths[this.imageIndex]
    }

    clickRight() {
        // this.img.src = null;
        // if (this.activeImageIndex < this.imagePaths.length - 1) {
        //     this.activeImageIndex += 1;

        // } else {
        //     this.activeImageIndex = 0;
        // }
        // this.img.src = this.imagePaths[this.activeImageIndex]
        // console.log(this.img.height, this.img.width);
        // const dialogRef = this.dialog.open(ImageDialogComponent, {
        //     data: {
        //         filePath: this.imagePaths[this.activeImageIndex],
        //         imageHeight: this.imgHeight,
        //         imageWidth: this.imgWidth
        //     },
        //     panelClass: 'fullscreen',
        // });

        // dialogRef.afterClosed().subscribe(data => {
        //     console.log(data);
        //     if(data === 'next') {
        //         this.clickRight()
        //     }
        // })
        // console.log(this.activeImageIndex)
        // this.img.src = this.imagePaths[this.activeImageIndex];
    }


    clickLeft() {
        // if (this.activeImageIndex > 0) {
        //     this.activeImageIndex -= 1;
        // } else {
        //     this.activeImageIndex = this.imagePaths.length - 1
        // }
        // const dialogRef = this.dialog.open(ImageDialogComponent, {
        //     data: {
        //         filePath: this.imagePaths[this.activeImageIndex],
        //     },
        //     panelClass: 'fullscreen',
        // });

        // dialogRef.afterClosed().subscribe(data => {
        //     console.log(data);
        //     if(data === 'previous') {
        //         this.clickLeft()
        //     }
        // })

    }



}
