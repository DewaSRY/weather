import { createContext, useContext } from "react";

const formCar = createContext({
  carArray: [] as CarProps[],
  handelSettCarArray: (_car: CarProps) => {},
});

export default function useFormCar() {
  const context = useContext(formCar);
  if (!context) throw Error("there not inside the provider");
  return context;
}
export { formCar };

export type useFormCarProps = ReturnType<typeof useFormCar>;

export interface CarProps {
  name: string;
  price: number;
}
