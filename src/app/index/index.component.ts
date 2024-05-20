import { Component } from '@angular/core';
import { CurrencyConversionService } from '../services/currency-conversion.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  dolares: number;
  resultado: number;
  rateCordobas: number;
  fechaFormateada: string;
  mostrarResultados: boolean;
  mostrarImagen: boolean;

  constructor(private currencyService: CurrencyConversionService) {
    this.dolares = 0;
    this.resultado = 0;
    this.rateCordobas = 0;
    this.fechaFormateada = '';
    this.mostrarResultados = false;
    this.mostrarImagen = true;
  }

  async procesar() {
    try {
      // Mostrar los resultados
      this.mostrarImagen = false;
      this.mostrarResultados = true;
      // Obtener la tasa de conversión de dólares a córdobas
      const rates = await this.currencyService.getRates('USD');
      this.rateCordobas = rates['NIO']; // Obtener la tasa de conversión a córdobas

      // Realizar la conversión
      this.resultado = this.dolares * this.rateCordobas;

      // Obtener la fecha actual
      const fechaActual = new Date();
      const dia = fechaActual.getDate().toString().padStart(2, '0');
      const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Los meses comienzan en 0
      const anio = fechaActual.getFullYear().toString(); // Asegúrate de convertir a string

      // Concatenar las partes de la fecha
      this.fechaFormateada = `${anio}-${mes}-${dia}`;



    } catch (error) {
      console.error('Error al procesar la conversión:', error);
    }
  }
}
