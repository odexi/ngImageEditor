import { ImageService } from './../services/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocontrast',
  templateUrl: './autocontrast.component.html',
  styleUrls: ['./autocontrast.component.css']
})
export class AutocontrastComponent implements OnInit {




  constructor(private imageService: ImageService) { }

  private getMaxPixelValue(){
    return Math.max.apply(null, this.imageService.pixels[1 * 4]);
  }
  private getMinPixelValue(){
    return Math.min.apply(null, this.imageService.pixels[1 * 4]);
  }

  private autoContrast = () => {
    //this.contrast = parseInt(this.contrast);
    //this.brightness = parseInt(this.brightness);
    for (var i = 0; i < this.imageService.numPixels; i++) {
      
      
    }
console.log(this.getMaxPixelValue());
    this.imageService.context.clearRect(0, 0, this.imageService.canvas.width, this.imageService.canvas.height);
    this.imageService.context.putImageData(this.imageService.imageData, 0, 0);

  };

  ngOnInit() {
    this.imageService.functions.autoContrast = this.autoContrast;
    this.imageService.functions.getMaxPixelValue = this.getMaxPixelValue;
  }

}
