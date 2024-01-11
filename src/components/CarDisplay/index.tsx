import { FC, Fragment, HTMLAttributes, PropsWithChildren } from "react";
import useFormCar from "@context/FormCar/useFormCar";
interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  const { carArray } = useFormCar();
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      {carArray.map((v, id) => (
        <Fragment key={id}>
          <div>
            {v.name} - {v.price} $
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default index;
