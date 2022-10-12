export type Beer = {
  name: string;
  tagline: string;
  image_url: string;
  description: string;
  food_pairing: string[];
  contributed_by: string;
  brewers_tips: string;
  ibu: number;
  id: number;
  volumne: {
    value: number;
    unit: string;
  };
  abv: number;
};
