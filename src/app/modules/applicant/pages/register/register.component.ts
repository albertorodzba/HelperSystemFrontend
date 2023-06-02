import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit {
  @ViewChild('progressBar') progressBar!: ElementRef <HTMLDivElement>;
  currentForm: number = 1;
  totalForms: number = 4;
  progress: number = 100/4;
  
  ngAfterViewInit(): void {
    this.setProgress(this.progress);
  }
  

  previousForm(){
    if(this.currentForm > 1){
      this.progress = (100/this.totalForms*this.currentForm) - (100/this.totalForms)
      this.currentForm --;
      this.setProgress(this.progress);
    }
    console.log(this.progress)
  }
  nextForm(){
    if(this.currentForm < 4){
      this.currentForm++;
      this.progress = 100/this.totalForms*this.currentForm;
      this.setProgress(this.progress);
    }
    console.log(this.currentForm);
  }

  setProgress(progress: number){
    this.progressBar.nativeElement.style.width = progress+"%";
    console.log(progress+"%")
  }
}
