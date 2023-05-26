import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  screenwidth: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(): void{
    this.screenwidth = window.innerWidth;
  }

}
