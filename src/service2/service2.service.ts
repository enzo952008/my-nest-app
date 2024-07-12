import { Injectable } from '@nestjs/common';

@Injectable()
export class Service2 {
  private items: any[] = [];

  // Función para calcular la suma de una lista de números
  sum(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  // Función para encontrar el elemento máximo en una lista de números
  findMax(numbers: number[]): number {
    if (numbers.length === 0) {
      throw new Error('El array no debe estar vacío');
    }
    return Math.max(...numbers);
  }

  // Función para filtrar números pares de una lista
  filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
  }
}
