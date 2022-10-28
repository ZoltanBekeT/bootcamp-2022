export interface Car {
  id?: number;
  model?: string;
  firstRegistration?: string;
  origin?: string;
  description?: string;
  carDetails?: {
    Displacement?: number;
    acceleration?: number;
    cylinders?: number;
    horsepower?: number;
    kmPerGallon?: number;
    weight?: number;
  };
}
