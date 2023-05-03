import AppRouter from "../approuter/approuter";
import { Header } from "../header/header";
import { Navmenu } from "../navmenu/navmenu";
import "./app.css";

export default function App() {
  return (
    <>
      <Header></Header>
      <nav className="app__main">
        <Navmenu></Navmenu>
      </nav>
      <section className="app_infodisplay">
        <div className="app_infodisplaybox">
          <AppRouter></AppRouter>
        </div>
      </section>
    </>
  );
}
