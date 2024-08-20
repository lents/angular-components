import { Component } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { MACHINES } from '../../models/machine';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  machines = MACHINES;
}
