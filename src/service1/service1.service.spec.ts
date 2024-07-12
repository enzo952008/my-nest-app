import { Test, TestingModule } from '@nestjs/testing';
import { Controller1 } from 'src/controller1/controller1.controller';
import { Service1 } from './service1.service';
import { Item } from './item.interface'; // Asegúrate de importar la interfaz correcta

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
    const newItem: Item = { id: '1', name: 'Item 1' }; // Asegúrate de que el id sea de tipo string
    jest.spyOn(service, 'addItem').mockImplementation(() => newItem);

    expect(controller.create(newItem)).toBe(newItem);
    expect(service.addItem).toHaveBeenCalledWith(newItem);
  });

  it('should get all items', () => {
    const items: Item[] = [{ id: '1', name: 'Item 1' }]; // Asegúrate de que el id sea de tipo string
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

