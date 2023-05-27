const Input = (props) => {
  if (props.type === "checkbox") {
    return (
      <div className="form-group">
        <div className="form-check">
          <input
            className="form-check-input"
            type={props.type}
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.onChange}
          />
          <label className="form-check-label" htmlFor={props.id}>
            <b>{props.children}</b>
          </label>
        </div>
      </div>
    );
  } else {
    return (
      <div className="form-group">
        <label htmlFor={props.id}>
          <b>{props.children}</b>
        </label>
        <input
          type={props.type}
          className="form-control"
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          required
          onChange={props.onChange}
        />
      </div>
    );
  }
};

export default Input;
