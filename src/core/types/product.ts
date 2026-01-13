export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  salePrice?: number;
  isWishlisted?: boolean;
};

export interface ProductSliderProps {
  items: Product[];
  slidesPerView?: number;
  showNavigation?: boolean;
}
