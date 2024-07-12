import { Test, TestingModule } from '@nestjs/testing';
import { Service2 } from './service2.service';

describe('Service2', () => {
  let service: Service2;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Service2],
    }).compile();

    service = module.get<Service2>(Service2);
  });

  it('debería calcular la suma de números', () => {
    const numbers = [1, 2, 3, 4, 5];
    const sumResult = service.sum(numbers);
    expect(sumResult).toBe(15);
  });

  it('debería encontrar el número máximo en el array', () => {
    const numbers = [3, 1, 9, 4, 2];
    const maxResult = service.findMax(numbers);
    expect(maxResult).toBe(9);
  });

  it('debería lanzar un error al intentar encontrar el máximo en un array vacío', () => {
    const emptyArray: number[] = [];
    expect(() => service.findMax(emptyArray)).toThrowError('El array no debe estar vacío');
  });

  it('debería filtrar los números pares del array', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const filteredNumbers = service.filterEvenNumbers(numbers);
    expect(filteredNumbers).toEqual([2, 4, 6]);
  });
});
