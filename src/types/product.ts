export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface ProductSliderProps {
  items: Product[];
  slidesPerView?: number;
  showNavigation?: boolean;
}
