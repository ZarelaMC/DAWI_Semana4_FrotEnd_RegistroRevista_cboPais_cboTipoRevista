import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../menu/menu.component'
import { AppMaterialModule } from '../../app.material.module';

@Component({
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule, MenuComponent],
  selector: 'app-transaccion-reserva-sala',
  templateUrl: './transaccion-reserva-sala.component.html',
  styleUrls: ['./transaccion-reserva-sala.component.css']
})
export class TransaccionReservaSalaComponent {

}
