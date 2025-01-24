import { useGlobalContext } from "../contexts/GlobalContext.jsx";
import Card from "../components/Card.jsx";

export default function movies() {
    const { movies } = useGlobalContext();
    return (
        <section className="container py-4">
            <div className="row g-3">
                {movies.map((book) => (
                    <div className="col-12 col-md-6 col-lg-4" key={book.id}>
                        <Card data={book} />
                    </div>
                ))}
            </div>
        </section>
    );
}