export interface FeaturePoint {
  text: string;
}

export interface SectionContent {
  id: string;
  headline: string;
  subHeadline: string;
  body: string;
  points?: FeaturePoint[];
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean; // If true, image is on the left
  theme?: 'light' | 'dark' | 'primary';
}
