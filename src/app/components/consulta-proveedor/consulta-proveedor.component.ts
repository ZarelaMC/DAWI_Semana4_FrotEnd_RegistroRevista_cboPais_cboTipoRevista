import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../app.material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule, MenuComponent],
  selector: 'app-consulta-proveedor',
  templateUrl: './consulta-proveedor.component.html',
  styleUrls: ['./consulta-proveedor.component.css']
})
export class ConsultaProveedorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
