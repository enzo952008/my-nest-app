import { Injectable } from '@nestjs/common';
import { Item } from './item.interface';

@Injectable()
export class Service1 {
  private items: Item[] = []; // Usa la interfaz Item para definir el tipo del array de items

  // Función para agregar un elemento
  addItem(item: Item): Item {
    this.items.push(item);
    return item;
  }

  // Función para obtener todos los elementos
  getAllItems(): Item[] {
    return this.items;
  }

  // Función para eliminar todos los elementos
  clearItems(): void {
    this.items = [];
  }
}
