import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UtilitiesService } from '../../../core/service/utilities.service';
import { FileConverter } from '../../../core/utility/file-converter';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {

  public imageUri: SafeUrl;

  private file: File;

  constructor(private dialogRef: MdDialogRef<ImageUploadComponent>,
              private domSanitizer: DomSanitizer,
              private utilities: UtilitiesService) {
  }

  public async onFileUpload(event: any) {
    const files = event.target.files;
    if (files.length <= 0) {
      return;
    }

    this.file = files[0];
    const fileType = this.file.type;
    if (fileType !== 'image/jpeg' && fileType !== 'image/png' && fileType !== 'image/gif') {
      this.utilities.showSnackBar('Only "jpeg", "png" and "gif" images are allowed');
      return;
    }

    const uri = await FileConverter.fileToDataUri(this.file);
    this.imageUri = this.domSanitizer.bypassSecurityTrustUrl(uri);

    console.log('#image-upload: uploaded file', this.file.name);
  }

  public async onDone() {
    const arrayBuffer = await FileConverter.fileToArrayBuffer(this.file);
    this.dialogRef.close({
      name: this.file.name,
      data: arrayBuffer,
      mimeType: this.file.type
    });
  }

}
