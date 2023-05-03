import "./topic.css";
import { Link } from "react-router-dom";
import { Propstype } from "./propstype/propstype";

export function Topic(propsTopicLayer: Propstype) {
  const slash = "/";
  let topic = slash + propsTopicLayer.whereDoWeGo;

  return (
    <Link to={topic}>
      <article className="topic">{propsTopicLayer.topic}</article>
    </Link>
  );
}
