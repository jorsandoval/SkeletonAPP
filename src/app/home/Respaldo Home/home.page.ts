import { Component } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private animationCtrl: AnimationController) {

  }

  ngOnInit(){}
  ngAfterViewInit() {
    const animation =
      this.animationCtrl.create()
        .addElement(document.querySelector('.pac-man'))
        .duration(2500)
        .iterations(20)
        .fromTo('transform','translateX(0px)','translateX(800px)')
        .fromTo('opacity','1','0');
      animation.play();
  }


}
