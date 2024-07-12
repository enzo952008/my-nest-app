import { Test, TestingModule } from '@nestjs/testing';
import { Controller1 } from './controller1.controller';
import { Service1 } from '../service1/service1.service';

describe('Controller1', () => {
  let controller: Controller1;
  let service: Service1;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Controller1],
      providers: [Service1],
    }).compile();

    controller = module.get<Controller1>(Controller1);
    service = module.get<Service1>(Service1);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a new item', () => {
    const newItem = { id: '1', name: 'Item 1' }; // Asegúrate de que el id sea un string si la interfaz lo requiere
    jest.spyOn(service, 'addItem').mockImplementation(() => newItem);

    expect(controller.create(newItem)).toBe(newItem);
    expect(service.addItem).toHaveBeenCalledWith(newItem);
  });

  it('should get all items', () => {
    const items = [{ id: '1', name: 'Item 1' }];
    jest.spyOn(service, 'getAllItems').mockImplementation(() => items);

    expect(controller.findAll()).toBe(items);
    expect(service.getAllItems).toHaveBeenCalled();
  });

  it('should delete all items', () => {
    jest.spyOn(service, 'clearItems').mockImplementation(() => {});

    controller.delete('1');
    expect(service.clearItems).toHaveBeenCalled();
  });
});
