import type {InputHTMLAttributes} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
};

export default function Input({label, id, ...props}: InputProps) {
    return (
        <fieldset className="fieldset w-full">
            <label
                htmlFor={id}
                className="fieldset-label"
            >
                {label}
            </label>

            <input
                id={id}
                className="input input-bordered w-full"
                {...props}
            />
        </fieldset>
    );
}