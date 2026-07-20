import Input from "@/shared/ui/Input/Input";
import Card from "@/shared/ui/Card/Card";
import CardTitle from "@/shared/ui/Card/CardTitle";
import {useForm} from "react-hook-form";
import type {LoginRequest} from "@/features/auth/models/LoginRequest";
import {useLogin} from "@/features/auth/hooks/useLogin";
import FormErrors from "@/shared/ui/Form/FormErrors";
import {Navigate} from "react-router-dom";
import {useSession} from "@/app/session/useSession";

export default function LoginForm() {

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting }
    } = useForm<LoginRequest>();

    const { authenticate } = useLogin();

    const { authenticated } = useSession();

    const onSubmit = async (data: LoginRequest) => {
        try {
            await authenticate(data);
        } catch (e) {
            if (e instanceof Error) {
                setError("root", {
                    message: e.message,
                });
            }
        }
    };

    if (authenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <Card className="w-full max-w-md">
            <CardTitle>Connexion</CardTitle>

            <FormErrors errors={errors} />

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    id="email"
                    label="Adresse e-mail"
                    type="email"
                    placeholder="john.doe@example.com"
                    {...register("email", {
                        required: "L'adresse e-mail est obligatoire",
                    })}
                />

                <Input
                    id="password"
                    label="Mot de passe"
                    type="password"
                    placeholder="********"
                    {...register("password")}
                />

                <button
                    type="submit"
                    className="btn btn-primary w-full mt-4"
                >
                    {isSubmitting ? "Connexion en cours..." : "Se connecter"}
                </button>
            </form>
        </Card>
    );
}