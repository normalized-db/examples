export class FileConverter {

  public static fileToArrayBuffer(file: File): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (e) => reject(e);
      fileReader.onabort = (e) => reject(e);

      fileReader.readAsArrayBuffer(file);
    });
  }

  public static toFile(arrayBuffer: ArrayBuffer, mimeType: string, name: string = 'file'): File {
    return new File([new Blob([arrayBuffer], { type: mimeType })], name);
  }

  public static fileToDataUri(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (e) => reject(e);
      fileReader.onabort = (e) => reject(e);

      fileReader.readAsDataURL(file);
    });
  }

  public static arrayBufferToDataUri(arrayBuffer: ArrayBuffer, mimeType: string): Promise<string> {
    return this.fileToDataUri(FileConverter.toFile(arrayBuffer, mimeType));
  }

}
