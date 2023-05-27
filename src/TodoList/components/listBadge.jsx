import Button from "./button";

const ListBadge = (props) => {
  return (
    <div className="my-3 p-3 bg-white rounded box-shadow">
      <div className="media text-muted pt-3">
        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <div className="d-flex justify-content-between align-items-center w-100">
            <strong className="text-gray-dark">{props.title}</strong>
            <Button type="button" color="danger" size="short" onClick={props.onDelete}>
              <i className="bi bi-x-lg text-white"></i>
            </Button>
          </div>
          <span className="d-block">{props.time}</span>
        </div>
      </div>
    </div>
  );
};

export default ListBadge;
