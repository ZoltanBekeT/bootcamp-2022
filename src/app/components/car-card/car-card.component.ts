import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
})
export class CarCardComponent implements OnInit {
  @Input() titleInput?: string;
  @Input() contentInput?: string;
  @Input() yearInput?: string;

  constructor() {}

  ngOnInit(): void {}

  onDelete(): void {}

  onDetails(): void {}
}
