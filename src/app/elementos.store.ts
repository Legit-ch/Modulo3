import { createAction, createReducer, on, props, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

export interface Elemento {
  id: number;
  nombre: string;
}

export const addElemento = createAction('[Elemento] Add', props<{ elemento: Elemento }>());

export interface ElementosState {
  elementos: Elemento[];
}

export const initialState: ElementosState = {
  elementos: []
};

export const elementosReducer = createReducer(
  initialState,
  on(addElemento, (state, { elemento }) => ({
    ...state,
    elementos: [...state.elementos, elemento]
  }))
);

@Injectable({ providedIn: 'root' })
export class ElementosStoreService {
  constructor(private store: Store<{ elementos: ElementosState }>) {}

  addElemento(elemento: Elemento) {
    this.store.dispatch(addElemento({ elemento }));
  }
}
