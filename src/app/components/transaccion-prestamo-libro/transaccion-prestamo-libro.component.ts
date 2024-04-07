import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../menu/menu.component'
import { AppMaterialModule } from '../../app.material.module';

@Component({
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule, MenuComponent],
  selector: 'app-transaccion-prestamo-libro',
  templateUrl: './transaccion-prestamo-libro.component.html',
  styleUrls: ['./transaccion-prestamo-libro.component.css']
})
export class TransaccionPrestamoLibroComponent {

}
