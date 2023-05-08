import { Topic } from "../topic/topic";
import { Picture } from "../picture/picture";
import "./navmenu.css";

export function Navmenu() {
  return (
    <div className="navmenu">
      <section className="navmenu__uplayer">
        <section className="navmenu__upcenter">
          <Topic topic={"Contact"} whereDoWeGo={"contact"} />
          <Topic topic={"Technologies"} whereDoWeGo={"technologies"}></Topic>
        </section>
      </section>

      <section className="navmenu__mediumlayer">
        <section className="navmenu__leftlayer">
          <Topic topic={"Language"} whereDoWeGo={"language"}></Topic>
          <Topic topic={"Hobbies"} whereDoWeGo={"hobbies"}></Topic>
        </section>

        <article>
          <Picture></Picture>
        </article>

        <section className="navmenu__rightlayer">
          <Topic topic={"Education"} whereDoWeGo={"education"}></Topic>
          <Topic topic={"Project"} whereDoWeGo={"project"}></Topic>
        </section>
      </section>

      <section className="navmenu__down">
        <Topic topic={"Work Experience"} whereDoWeGo={"experience"}></Topic>
      </section>
    </div>
  );
}
