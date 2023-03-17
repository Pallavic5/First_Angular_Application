import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  
  //Here applying property data binding
  imgUrl="../assets/Bridgelabz_Logo.jpg";

  //Here applying event binding
  url="https://www.bridgelabz.com";
  
  //Specify userName as String Type in the App Component Model for forms module
  userName: string = "";

  //Applying regex here
  nameError: string = "";

//Here Using Interpolation Data Binding
  ngOnInit(): void{
    this.title="Hello From Bridgelabz.";
  }
  //event binding is used to handle the events raised from the DOM like button click, mouse move etc.
  onClick($event:any){
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
//Applying regex on input event binding
  onInput($event:any){
    console.log("Change Event Occurred!", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError="";
      return;
    }
    this.nameError="Name is Incorrect!";
  }
}
