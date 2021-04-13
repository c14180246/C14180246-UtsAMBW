import { Injectable } from '@angular/core';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core'

const { Camera } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor() { }

  public async tambahfoto(){
    const Foto = await Camera.getPhoto({
      resultType : CameraResultType.Uri,
      source : CameraSource.Camera,
      quality: 100
    });
    console.log(Foto);
  }
}
