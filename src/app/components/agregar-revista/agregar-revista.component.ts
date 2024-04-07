import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../app.material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule, MenuComponent],
  selector: 'app-agregar-revista',
  templateUrl: './agregar-revista.component.html',
  styleUrls: ['./agregar-revista.component.css']
})
export class AgregarRevistaComponent {

}
