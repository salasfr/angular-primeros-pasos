import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.template.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = [
    'spiderman',
    'ironman',
    'hulk',
    'she hulk',
    'thor',
  ];

  public deleteHero?: string;

  public removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
    console.log(this.deleteHero);
  }
}
