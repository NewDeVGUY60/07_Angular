import { Component } from '@angular/core';
import { Skill } from '../models/skill.model';
import { SkillComponent } from '../skill/skill.component';
import { Input } from '@angular/core';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent {
  constructor(public skill :SkillComponent){}
  @Input()lastName: string = "Chuck"
  @Input()firstName: string ="Noris"
  @Input()age: number = 50
  @Input()gender: string = "male"
  @Input() bio: string = "Ranger,motiver et puissant"
  @Input() skills:string[] = [this.skill.logo,this.skill.name,this.skill.site]
}
