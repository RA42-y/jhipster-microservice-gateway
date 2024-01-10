import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 7642,
};

export const sampleWithPartialData: IProduct = {
  id: 326,
  name: 'studious but',
};

export const sampleWithFullData: IProduct = {
  id: 26591,
  name: 'on afore but',
  price: 1629.21,
};

export const sampleWithNewData: NewProduct = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
