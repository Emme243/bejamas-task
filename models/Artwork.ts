export interface Artwork {
  id: string;
  category: string;
  createdAt: string;
  description: string;
  isBestseller: boolean;
  isFeatured: boolean;
  name: string;
  price: number;
  details: ArtworkDetails;
}

interface ArtworkDetails {
  height: number;
  id: number;
  recommendations: [RecommendedArtwork];
  size: number;
  src: ImageSrc;
  width: number;
}

interface RecommendedArtwork {
  name: string;
  src: ImageSrc;
}

interface ImageSrc {
  landscape: string;
  large2x: string;
  large: string;
  medium: string;
  original: string;
  portrait: string;
  small: string;
  tiny: string;
}

export interface DisplayedArtworkResponse {
  data: Artwork[];
  total: number;
}
