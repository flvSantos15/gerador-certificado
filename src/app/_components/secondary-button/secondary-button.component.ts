import { Component, Input } from '@angular/core';
import { NgStyle } from "../../../../node_modules/@angular/common/index";

@Component({
  selector: 'app-secondary-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.css'
})
export class SecondaryButtonComponent {
  @Input() textBotao: string = ''
  @Input() phClass: string = ''
  @Input() disabled: boolean = false
}
