import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: 'list.template.html',
  styleUrl: 'list.styles.css',
})
export class ListComponent {
  @Input() public characterList: Character[] = [
    {
      name: 'trunks',
      power: 10,
    },
  ];

  @Output() public onDeleteId: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDeleteId.emit(id);
  }
}
