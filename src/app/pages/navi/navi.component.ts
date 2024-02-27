import { Component, Inject, inject } from '@angular/core';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [CartSummaryComponent, RouterLink , ],
  templateUrl: './navi.component.html',
})
export class NaviComponent {

  protected readonly autherService = inject(AuthService);
  protected readonly router = inject(Router);

  authen = this.autherService.authentication

  logout() {
    this.autherService.logout()
    this.router.navigate(["/home/cars"])
  }

}
