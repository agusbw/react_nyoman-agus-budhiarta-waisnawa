import thumbnail from "../../../assets/img-thumbnail.png";

export default function Card() {
  return (
    <div className="card pb-2">
      <img src={thumbnail} className="card-img-top" alt="img-thumbnail" />
      <div className="card-body position-relative">
        <p className="card-text text-dark mb-5">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <a
          href="#"
          className="btn btn-outline-secondary text-dark position-absolute bottom-0 start-0 mx-3"
        >
          Detail View
        </a>
        <p className="text-secondary position-absolute bottom-0 end-0 mx-3">
          9 mins
        </p>
      </div>
    </div>
  );
}
