export interface Product {
  id: string;
  name: string;
  elaborationTypeId: string;
  elaborationType?: {
    id: string;
    name: string;
  };
  state: string;
  quantity: number;
  dateCreated: string;
}
