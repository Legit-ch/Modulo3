import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `<h2>Dashboard protegido</h2><p>Solo usuarios logueados pueden ver esto.</p>`
})
export class DashboardComponent {}
