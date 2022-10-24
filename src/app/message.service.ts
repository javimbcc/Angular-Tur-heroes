import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  mensajes: string[] = [];
  add(message: string) {
    this.mensajes.push(message);
  }

  clear() {
    this.mensajes = [];
  }


}
