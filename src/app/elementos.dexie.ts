import Dexie, { Table } from 'dexie';
import { Injectable } from '@angular/core';

export interface Elemento {
  id?: number;
  nombre: string;
}

@Injectable({ providedIn: 'root' })
export class ElementosDexieDB extends Dexie {
  elementos!: Table<Elemento, number>;

  constructor() {
    super('ElementosDB');
    this.version(1).stores({
      elementos: '++id,nombre'
    });
  }
}
