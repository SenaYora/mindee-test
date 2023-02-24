export interface Item {
  id: number
  name: string;
  description: string;
}

export type ItemWithoutId = Omit<Item, 'id'>;
