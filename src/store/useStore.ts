import {create} from "zustand";
import {persist} from "zustand/middleware";

type State = {
  cars: Car[] | [];
  setCars: (data: Car[] | []) => void;
};

export const useStore = create<State>()(
  persist(
    (set) => ({
      cars: [],
      setCars: (data: Car[] | []) => set(() => ({ cars: data })),
    }),
    {
      name: "global-store",
    },
  ),
);
