import { Component } from '@angular/core';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [CartSummaryComponent, RouterLink],
  templateUrl: './navi.component.html',
})
export class NaviComponent {}
