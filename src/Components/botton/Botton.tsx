import { ComponentProps } from "react";

type Tvariant = "success" | "primery" | "danger" | "warning"|"shopCart";

type TButton = ComponentProps<"button"> & {
  variant?: Tvariant;
};

function Button({ children, variant,...rest }: TButton) {  
  return (
    <button {...rest} className={checkVariant(variant)}>
      {children}
    </button>
  );
}

export default Button;

function checkVariant(variant?: Tvariant) {
  if (variant === "success") {
    return "sm:mt-5 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded";
  } else if (variant === "primery") {
    return "bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded";
  } else if (variant === "danger") {
    return "bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-5 rounded";
  } else if (variant === "warning") {
    return "bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded";
  }

}
