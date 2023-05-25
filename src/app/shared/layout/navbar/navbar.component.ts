import { AfterViewInit, Component, ElementRef, Host, HostListener, ViewChild } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {

  @ViewChild('dropdown') dropdown!: ElementRef<HTMLDivElement>;
  @ViewChild('generalOptionsFirst') optionsFirst!: ElementRef;
  @ViewChild('generalOptionsSecond') optionsSecond!: ElementRef;
  @ViewChild('navbar') navbar!: ElementRef<HTMLDivElement>;

  screenWidth:number = window.innerWidth;
  isMenuOpen: boolean = false;

  ngAfterViewInit(): void {

    this.toggleDropdownOptions();

  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onresize(): void {
    this.screenWidth = window.innerWidth;
    this.toggleDropdownOptions();
    if (this.screenWidth > 910 && this.isMenuOpen == true) this.toggleMenu();
  }

  toggleDropdownOptions(): void {
    if (this.screenWidth <= 910) {
      this.dropdown.nativeElement.appendChild(this.optionsFirst.nativeElement);
      this.dropdown.nativeElement.appendChild(this.optionsSecond.nativeElement);
    }
    else{
      this.dropdown.nativeElement.removeChild(this.optionsFirst.nativeElement);
      this.dropdown.nativeElement.removeChild(this.optionsSecond.nativeElement)

      this.navbar.nativeElement.appendChild(this.optionsFirst.nativeElement)
      this.navbar.nativeElement.appendChild(this.optionsSecond.nativeElement);
    }
  }
}
