export default function CardItem({
    title
}: {
    title: string;
}) {
    return(
        <div className="card">
            <h2>{title}</h2>
            <p>This is a simple card component.</p>
        </div>
    );
}