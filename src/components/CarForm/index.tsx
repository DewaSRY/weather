import {
  ChangeEvent,
  FC,
  FormEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  PropsWithChildren,
  useState,
} from "react";
import useFormCar from "@context/FormCar/useFormCar";

const initInputs = {
  name: "",
  price: 0,
};

interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  const { handelSettCarArray } = useFormCar();
  const [initInput, setInitInput] = useState<typeof initInputs>(initInputs);
  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInitInput((prev) => ({ ...prev, [name]: value }));
  };
  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handelSettCarArray(initInput);
  };
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      {children}
      <form onSubmit={handelSubmit} action="">
        <Inputs
          label="name"
          type="text"
          onChange={handelChange}
          value={initInput.name}
          name="name"
        />
        <Inputs
          label="price"
          type="number"
          onChange={handelChange}
          value={initInput.price}
          name="price"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default index;
interface InputsProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
type InputsComponents = FC<InputsProps> & PropsWithChildren;
const Inputs: InputsComponents = ({ label, ...resProps }) => {
  return (
    <div>
      {label}
      <input
        {...resProps}
        className={`${resProps.className ? resProps.className : ""}`}
      />
    </div>
  );
};
