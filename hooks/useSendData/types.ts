export interface PredictData {
  name: string;
  health: string;
  diabetes: boolean;
  heartDisease: boolean;
  asthma: boolean;
}

export interface PredictResponse {
  Asthma: string;
  Diabetes: string;
  Heart: string;
  GoodHealth: string;
}

export interface PredictRequest {
  sex: string;
  age: string;
  height: string;
  weight: string;
  sleeptime: string;
  physicalactivity: boolean;
  smoking: boolean;
  alcoholdrinking: boolean;
  physicalhealth: string;
  mentalhealth: string;
}
