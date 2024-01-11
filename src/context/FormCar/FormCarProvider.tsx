import { FC, HTMLAttributes, PropsWithChildren, useState } from "react";
import { formCar, CarProps } from "./useFormCar";
interface FormCarProviderProps extends HTMLAttributes<HTMLDivElement> {}
type FormCarProviderComponents = FC<FormCarProviderProps> & PropsWithChildren;
const FormCarProvider: FormCarProviderComponents = ({ children }) => {
  const [carArray, setCarArray] = useState<CarProps[]>([]);

  const handelSettCarArray = (data: CarProps) => {
    setCarArray((prev) => [...prev, data]);
  };
  return (
    <formCar.Provider
      value={{
        carArray,
        handelSettCarArray,
      }}
    >
      {children}
    </formCar.Provider>
  );
};

export default FormCarProvider;
