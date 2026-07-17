import Input from "@/shared/ui/Input/Input";
import Card from "@/shared/ui/Card/Card";
import CardTitle from "@/shared/ui/Card/CardTitle";

export default function LoginForm() {
    return (
        <Card className="w-full max-w-md">
            <CardTitle>Connexion</CardTitle>
            <form className="space-y-4">
                <Input
                    id="email"
                    label="Adresse e-mail"
                    type="email"
                    placeholder="john.doe@example.com"
                />

                <Input
                    id="password"
                    label="Mot de passe"
                    type="password"
                    placeholder="********"
                />

                <button
                    type="submit"
                    className="btn btn-primary w-full mt-4"
                >
                    Se connecter
                </button>
            </form>
        </Card>
    );
}