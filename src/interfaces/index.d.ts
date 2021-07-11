export interface envrionmentDetails {
  envVariable: string;
  dialect: string;
}

export interface queryParamsI {
  column: string;
  condition: string;
}

export interface queryParamsII {
  column: string;
  values: string;
}

export interface queryParamsIII extends queryParamsI {
  limit?: string;
  offset?: string;
  orderBy?: string;
}

export interface queryParamsIV {
  column: string;
  condition: string;
  values: string;
  columnII?: string;
  valuesII?: string;
}

export interface objectLiteral {
  [props: string]: any;
}

export interface UserData {
  id: number;
  email: string;
}

export interface AvailableCars {
  name: string;
  car_number: string;
  phone_number: string;
  latitude: string;
  longitude: string;
}
