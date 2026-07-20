import type {FieldErrors, FieldValues} from "react-hook-form";

interface FormErrorsProps<T extends FieldValues> {
    errors: FieldErrors<T>;
}


export default function FormErrors<T extends FieldValues>({errors}: FormErrorsProps<T>) {
    return (
        <>
            {Object.values(errors).map((error, index) => (
                <div key={index} className="text-error text-sm">
                    {error?.message?.toString()}
                </div>
            ))}
        </>
    );
}