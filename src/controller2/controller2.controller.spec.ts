import { Test, TestingModule } from '@nestjs/testing';
import { Service2 } from 'src/service2/service2.service';
import { Controller2 } from './controller2.controller';


describe('Controller2', () => {
  let controller: Controller2;
  let service2: Service2;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Controller2],
      providers: [Service2],
    }).compile();

    controller = module.get<Controller2>(Controller2);
    service2 = module.get<Service2>(Service2);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('sum', () => {
    it('should calculate the sum of numbers', () => {
      const numbers = [1, 2, 3];
      const expectedSum = 6;
      jest.spyOn(service2, 'sum').mockReturnValue(expectedSum);

      const result = controller.sum({ numbers });

      expect(result).toBe(expectedSum);
      expect(service2.sum).toHaveBeenCalledWith(numbers);
    });
  });

  describe('findMax', () => {
    it('should find the maximum number', () => {
      const numbers = [1, 3, 2];
      const expectedMax = 3;
      jest.spyOn(service2, 'findMax').mockReturnValue(expectedMax);

      const result = controller.findMax({ numbers });

      expect(result).toBe(expectedMax);
      expect(service2.findMax).toHaveBeenCalledWith(numbers);
    });
  });

  describe('filterEvenNumbers', () => {
    it('should filter even numbers', () => {
      const numbers = [1, 2, 3, 4, 5];
      const expectedFilteredNumbers = [2, 4];
      jest.spyOn(service2, 'filterEvenNumbers').mockReturnValue(expectedFilteredNumbers);

      const result = controller.filterEvenNumbers({ numbers });

      expect(result).toEqual(expectedFilteredNumbers);
      expect(service2.filterEvenNumbers).toHaveBeenCalledWith(numbers);
    });
  });
});
