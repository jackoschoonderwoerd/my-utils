import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AudioService } from './audio.service';

@Component({
    selector: 'app-audio',
    templateUrl: './audio.component.html',
    styleUrls: ['./audio.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudioComponent implements OnInit {



    @ViewChild('audioPlayerContainer') audioPlayerContainer: ElementRef;
    loadingAudio: boolean = false;

    constructor(
        public audioService: AudioService,
        private cd: ChangeDetectorRef
    ) { }


    ngOnInit(): void {
        this.cd.detectChanges();
        this.audioService.loadingAudio$.subscribe((status: boolean) => {
            this.loadingAudio = status
            console.log('LOADINGAUDIO: ', this.loadingAudio)
        })
    }
    onUploadAudio(e) {


        const file = e.target.files[0]
        console.log(file);
        const fileName = e.target.files[0].name
        const folder = `audio`
        this.audioService.uploadAudio(folder, fileName, file)

        this.audioService.downloadUrl$.subscribe((downloadUrl: string) => {
            console.log(downloadUrl)

            this.onAddControlsToPlayer(downloadUrl);
        })
    }


    onAddControlsToPlayer(downloadUrl) {
        this.audioPlayerContainer.nativeElement.innerHTML = `
            <audio controls>
                <source src = ${downloadUrl} type="audio/mpeg">
            </audio>
        `

    }
    toggleLoadingAudio() {
        this.loadingAudio = !this.loadingAudio
    }

    showLoadingAudio() {
        console.log(this.loadingAudio)
    }
}
