import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  name:string = "Rapide"
  logo :string = "bon"
  site:string = "wildcodeschool.fr"

  
}
