import ListBadge from "./listBadge";

const List = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        <ListBadge key={task.id} title={task.task} time={task.time} onDelete={()=> onDelete(task.id)}/>
      ))}
    </>
  );
};

export default List;
