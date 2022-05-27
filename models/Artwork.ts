export interface Artwork {
  id: string;
  createdAt: string;
  category: string;
  description: string;
  imageUrl: string;
  isBestseller: boolean;
  isFeatured: boolean;
  name: string;
  price: number;
}

export interface DisplayedArtworkResponse {
  data: Artwork[];
  total: number;
}
