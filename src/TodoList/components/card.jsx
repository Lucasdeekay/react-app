import NavBar from "./navbar";

const Card = (props) => {

  return (
    <div className="mx-auto" width="200px">
      <div className="card">
      <NavBar bgColor="info" onChange={props.onChange}>Todo List</NavBar>
      <div className="card-body">{props.children}</div>
    </div>
    </div>
  );
};

export default Card;
