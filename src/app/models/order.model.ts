export interface Order {
    id: number;
    user_id: number;
    created_at: string;
    modified_at: string;
    items: {
      product_id: number;
      price: number;
      quantity: number;
    }[];
  }
  