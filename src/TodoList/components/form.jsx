import { useState } from "react";

import Input from "./input";
import Button from "./button";

const Form = (props) => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleClick = () => {
    setTask("");
    setTime("");
    setReminder(false);
  }
 
  return (
    <form className={props.display} onSubmit={(e) => props.onSubmit(e, task, time, reminder, handleClick)}>
      <Input
        type="task"
        id="task"
        name="task"
        placeholder="Add Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required={true}
      >
        Task
      </Input>
      <Input
        type="datetime"
        id="datetime"
        name="datetime"
        placeholder="Add Day & Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required={true}
      >
        Day & Time
      </Input>
      <Input
        type="checkbox"
        id="reminder"
        name="reminder"
        checked={reminder}
        value={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)}
      >
        Remind Me
      </Input>
      <Button
        color="dark"
        size="short"
        width="100"
        type="submit"
      >
        Save Task
      </Button>
    </form>
  );
};

export default Form;
