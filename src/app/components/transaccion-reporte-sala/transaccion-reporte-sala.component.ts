import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../menu/menu.component'
import { AppMaterialModule } from '../../app.material.module';

@Component({
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule, MenuComponent],
  selector: 'app-transaccion-reporte-sala',
  templateUrl: './transaccion-reporte-sala.component.html',
  styleUrls: ['./transaccion-reporte-sala.component.css']
})
export class TransaccionReporteSalaComponent {

}
