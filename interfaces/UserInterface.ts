export type Genre = string;

export interface User {
  id: number;
  name: string;
  genre: Genre;
  cercle: string[];
  image1: boolean | void;
  image2: boolean | void;
  image3: boolean | void;
  image4: boolean | void;
  image5: boolean | void;
  image6: boolean | void;
  age: number;
  location: string;
  on: boolean;
  quality: boolean;
  medaille: boolean;
  partenaire: string | boolean;
  distance: number;
  ptCommun: number;
}
