import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  constructor(private authService: AuthService) {}

    logout() {
     this.authService.logout();
     window.location.href = '/login'; // Redirige a la página de login
  }

}
