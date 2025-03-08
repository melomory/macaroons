import {Component, Input, OnInit} from '@angular/core';
import {FeatureType} from "../../types/feature.type";

@Component({
  selector: 'feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  @Input() feature!: FeatureType;
  @Input() featureNumber: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
