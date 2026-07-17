type CardProps = {
    children: React.ReactNode;
    className?: string;
};

export default function CardTitle({children, className = ""}: CardProps) {
    return (
        <h1 className={`card-title justify-center text-2xl mb-6 ${className}`}>
            {children}
        </h1>
    );
}