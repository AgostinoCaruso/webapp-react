import { Link } from "react-router-dom";
const apiUrl = "http://localhost:5137";
function Card({ data }) {
    const imgPath = "http://localhost:3000/img/" + data.image;
    return (
        <>
            <div className="card">
                <img className="card-img-top" src={imgPath} alt={data.title} />
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <h5 className="card-title">{data.author}</h5>
                    <p className="card-text">{data.abstract}</p>
                    <Link to={`${apiUrl}/movies/${data.id}`} className="btn btn-primary">Visualizzami</Link>
                </div>
            </div>
        </>
    );
}

export default Card;