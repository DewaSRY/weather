import { FC, HTMLAttributes, PropsWithChildren } from "react";
import FormCarProvider from "@context/FormCar/FormCarProvider";
// import { useFormCarProps } from "@context/FormCar/useFormCar";
import CarForm from "@components/CarForm";
import CarDisplay from "@components/CarDisplay";
interface CardsContainerProps extends HTMLAttributes<HTMLDivElement> {}
type CardsContainerComponents = FC<CardsContainerProps> & PropsWithChildren;
const CardsContainer: CardsContainerComponents = () => {
  return (
    <FormCarProvider>
      <CarForm />
      <CarDisplay />
    </FormCarProvider>
  );
};

export default CardsContainer;
