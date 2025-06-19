import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedMaterialModule } from '../../shared/modules/shared-material.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    RouterModule,
    DashboardRoutingModule,
    SharedMaterialModule
  ]
})
export class DashboardModule {}
