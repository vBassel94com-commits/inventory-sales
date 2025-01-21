import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // إضافة RouterModule


@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  items: any[] = [];
  newItem: any = { name: '', category: '', quantity: 0, price: 0 };

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemService.getAllItems().subscribe(data => {
      this.items = data;
    });
  }

  addItem(): void {
    if (this.newItem.name && this.newItem.category) {
      this.itemService.saveItem(this.newItem).subscribe(() => {
        this.newItem = { name: '', category: '', quantity: 0, price: 0 };
        this.loadItems();
      });
    }
  }

  deleteItem(id: number): void {
    this.itemService.deleteItem(id).subscribe(() => {
      this.loadItems();
    });
  }
}
