type CardProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Card({children, className = ""}: CardProps) {
    return (
        <div className={`card bg-base-100 shadow-xl ${className}`}>
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}