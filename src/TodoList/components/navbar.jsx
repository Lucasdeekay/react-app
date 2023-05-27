import { useState } from "react";
import Button from "./button";

const getColor = (color) => {
  let bgColor = "bg-";
  let navColor = "navbar navbar-";
  switch (color) {
    case "primary": {
      bgColor += "primary";
      navColor += "primary";
      break;
    }
    case "secondary":
      bgColor += "secondary";
      navColor += "secondary";
      break;
    case "warning":
      bgColor += "warning";
      navColor += "warning";
      break;
    case "danger":
      bgColor += "danger";
      navColor += "danger";
      break;
    case "dark":
      bgColor += "dark";
      navColor += "dark";
      break;
    case "info":
      bgColor += "info";
      navColor += "info";
      break;
    default:
      bgColor += "light";
      navColor += "light";
      break;
  }
  return `${bgColor} ${navColor}`;
};

const NavBar = (props) => {
  const [text, setText] = useState("Add Task");
  const [color, setColor] = useState("primary");

  const swapContent = () => {
    if (text === "Close") {
      setText("Add Task");
      setColor("primary");
    } else {
      setText("Close");
      setColor("danger");
    }
    props.onChange(text);
  };

  return (
    <nav className={getColor(props.bgColor)}>
      <span className="navbar-brand mb-0 h1">{props.children}</span>
      <Button color={color} onClick={swapContent}>
        {text}
      </Button>
    </nav>
  );
};

export default NavBar;
