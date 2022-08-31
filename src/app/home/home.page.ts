import { Component } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private usuario: string = this.router.getCurrentNavigation().extras.state.user;

  constructor(private animationCtrl: AnimationController
    , private activeroute: ActivatedRoute,
    private router: Router) {
    this.activeroute.queryParams.subscribe(params => {
      console.log(this.router.getCurrentNavigation());
    });
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const animation =
      this.animationCtrl.create()
        .addElement(document.querySelector('.pac-man'))
        .duration(2500)
        .iterations(20)
        .fromTo('transform', 'translateX(0px)', 'translateX(800px)')
        .fromTo('opacity', '1', '0');
    animation.play();
  }


}
