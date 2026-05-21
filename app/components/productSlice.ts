import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Product = {
  id: string;
  title: string;
  price: string;
  rating: number;
  badge: {
    text: string;
    variant: "light" | "dark" | "white";
  };
  imageUrl: string;
  specifications: {
    material: string;
    glaze?: string;
    size: string;
    weight: string;
  };
  careInstructions: string;
  gallery: string[];
  designDetails: {
    title: string;
    description: string;
    imageUrl: string;
  }[];
};

interface ProductState {
  selectedProduct: Product | null;
}

const initialState: ProductState = {
  selectedProduct: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<Product>) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
