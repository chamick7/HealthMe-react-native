import { atom, Getter, Setter } from "jotai";
import { PredictData, PredictRequest } from "../hooks/useSendData/types";
import { GenderType } from "../utils/enum";

export const canContinueAtom = atom<boolean>(false);
export const stepAtom = atom<number>(0);
export const nameAtom = atom<string>("");
export const ageAtom = atom<string>("");
export const genderAtom = atom<GenderType | null>(null);
export const heightAtom = atom<number>(130);
export const weightAtom = atom<number>(50);
export const sleepAtom = atom<number>(6);
export const exerciseAtom = atom<boolean | null>(null);
export const smokeAtom = atom<boolean | null>(null);
export const drinkAtom = atom<boolean | null>(null);
export const metalHealthAtom = atom<number>(15);
export const physicalHealthAtom = atom<number>(15);

export const predictRequestAtom = atom<PredictRequest>((get) => {
  return {
    sex: get(genderAtom)!,
    age: get(ageAtom),
    height: get(heightAtom).toString(),
    weight: get(weightAtom).toString(),
    sleeptime: get(sleepAtom).toString(),
    physicalactivity: get(exerciseAtom)!,
    smoking: get(smokeAtom)!,
    alcoholdrinking: get(drinkAtom)!,
    physicalhealth: get(physicalHealthAtom).toString(),
    mentalhealth: get(metalHealthAtom).toString(),
  };
});

export const predictDataAtom = atom<PredictData | null>(null);

export const resetAtom = atom(null, (get: Getter, set: Setter) => {
  set(canContinueAtom, false);
  set(stepAtom, 0);
  set(nameAtom, "");
  set(ageAtom, "");
  set(genderAtom, null);
  set(heightAtom, 130);
  set(weightAtom, 50);
  set(sleepAtom, 6);
  set(exerciseAtom, null);
  set(smokeAtom, null);
  set(drinkAtom, null);
  set(metalHealthAtom, 15);
  set(physicalHealthAtom, 15);
  set(predictDataAtom, null);
});
