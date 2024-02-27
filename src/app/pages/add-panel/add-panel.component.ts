import { Component } from '@angular/core';
import { CarAddComponent } from '../car-add/car-add.component';
import { ColourAddComponent } from '../colour-add/colour-add.component';
import { BrandAddComponent } from '../brand-add/brand-add.component';
import { NaviComponent } from '../navi/navi.component';

@Component({
  selector: 'app-add-panel',
  standalone: true,
  imports: [CarAddComponent , ColourAddComponent , BrandAddComponent , NaviComponent],
  templateUrl: './add-panel.component.html',
  styleUrl: './add-panel.component.scss'
})
export class AddPanelComponent {
}
