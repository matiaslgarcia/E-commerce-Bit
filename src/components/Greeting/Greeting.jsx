import "./greeting.css";

export const Greeting = (props) => {
  return <h1 className="greeting-style"> {props.greeting}</h1>;
};
