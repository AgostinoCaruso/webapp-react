function Movie(){

    const apiUrl = "http://localhost:3000";

    const imgPath = "http://localhost:3000/img/" + data.image;

    const { id } = useParams();
    const [ movie, setmovies ] = useState(null);
    useEffect(getData, [id]);
    function getData() {
        axios
            .get(`${apiUrl}/movies/${id}`)
            .then((res) => {
                console.log(res.data.items);
                setmovies(res.data.items);
            })
            .catch((error) => {
                console.log(error);
                navigate("/errors");
            });
    }

    return (
        <>
        <h1>Sono il film: {id}</h1>
        {movie ? (
            <div className="card">
            <img className="card-img-top" src={imgPath} alt={movie.title} />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <h5 className="card-title">{movie.author}</h5>
                <p className="card-text">{movie.abstract}</p>
                <Link to={`${apiUrl}/movie/${movie.id}`} className="btn btn-primary">Visualizzami</Link>
            </div>
        </div>
        ) : (
            <p>Caricamento in corso...</p>
        )}
    </>

    );
}

export default Movie;