import { Component,Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input()
  text!: string;
  @Input()
  color!: string;

  @Output() btnClick = new EventEmitter();

  onClick(){
   this.btnClick.emit();
  }
}
