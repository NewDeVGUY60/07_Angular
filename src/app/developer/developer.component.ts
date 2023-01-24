import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';


@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent {

  developer : Developer ={ lastName: "Chuck",
  firstName:"Noris",
  age: 50,
  gender:  "male",
   bio:  "Ranger,motiver et puissant",
       skills : [
    { name : 'Javascript', logo : 'js.png', site : 'http//js.com' },
    { name : 'Angular' , logo : 'angular.png', site : 'http//angular.io' }
  ]
}
}
