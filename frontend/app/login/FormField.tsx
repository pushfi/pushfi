// FormField.tsx
import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { FormData } from "./validationSchema";
import { FaEye, FaEyeSlash } from "react-icons/fa";
interface FormFieldProps {
	label: string;
	register: UseFormRegister<FormData>;
	name: keyof FormData;
	error?: FieldError;
}

export const FormField: React.FC<FormFieldProps> = ({
	label,
	register,
	name,
	error,
}) => {
	return (
		<>
			<div className="flex flex-col w-full">
				<label className="relative flex  flex-col justify-center">
					<input
						type={label === "Password" ? "password" : "text"}
						className="custom-input"
						placeholder={label}
						{...register(name)}
					/>

					<span className="custom-input-span">
						<p className="custom-input-p">{label}</p>
					</span>
				</label>
				{error && <p className="input-validation-error">{error.message}</p>}
			</div>
		</>
	);
};
