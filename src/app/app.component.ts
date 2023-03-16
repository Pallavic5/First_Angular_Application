import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
//Here Using Interpolation Data Binding
  ngOnInit(): void{
    this.title="Hello From Bridgelabz.";
  }
}
