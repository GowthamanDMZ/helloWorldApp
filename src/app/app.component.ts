import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloWorldApp';
  visible = true;
  counter = 0;
  testObj = {
    'uiLang' : ['html','css','javascript'],
    'backendLang' : ['java','python','.net']
  };
  testArray = [
    {'name' : 'html', 'type':'uiLang'},
    {'name' : 'java', 'type':'backendLang'},
    {'name' : 'javascript', 'type':'uiLang'},
    {'name' : 'python', 'type':'backendLang'}
  ];

  toggleDiv(){
    this.visible = !this.visible;
  }

  startCounter(){
    this.counter++;
  }
}
