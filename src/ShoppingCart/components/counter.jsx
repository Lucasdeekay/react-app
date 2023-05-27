const formatCount = (counter) => {
  return counter.value <= 0 ? "Zero" : counter.value;
};

const getBadge = (counter) => {
  let badge = "m-2 badge badge-";
  badge += counter.value === 0 ? "warning" : "primary";
  return badge;
};


const Counter = ({ counter, onIncrement, onDecrement, onDelete }) => {
  return ( 
    <div>
        <span className={getBadge(counter)}>{formatCount(counter)}</span>
        <button
          onClick={() => onIncrement(counter.id)}
          className="btn btn-sm btn-success m-2"
        >
          Increment
        </button>
        <button
          onClick={() => onDecrement(counter.id)}
          className="btn btn-sm btn-dark m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-sm btn-danger m-2"
        >
          Delete
        </button>
      </div>
   );
}
 
export default Counter;
