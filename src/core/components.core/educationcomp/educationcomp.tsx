import "./educationcomp";
import { PropsTypeEducationComp } from "./propstype/propstype";
export function Educationcomp(propsEducationComp: PropsTypeEducationComp) {
  return (
    <section className="educationcomp">
      <div className="educationcomp__date">
        {propsEducationComp.startYear} . {propsEducationComp.startMonth} -{" "}
        {propsEducationComp.endYear} . {propsEducationComp.endMonth}
      </div>
      <div className="educationcomp__certificate">
        {propsEducationComp.certificate}
      </div>
      <div className="educationcomp__trainingcenter">
        {propsEducationComp.trainingCenter}, {propsEducationComp.city}
      </div>
      <hr className="educationcomp__hr" />
    </section>
  );
}
