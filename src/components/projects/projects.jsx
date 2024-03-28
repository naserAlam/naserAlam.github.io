import Card from "../utils/card/card";
import { PROJECT_LIST } from "./project_list";

function Projects() {
  return (
    <section
      id="projects"
      className="lg:px-20 ssm:px-5 py-10 min-h-screen bg-gray-100"
    >
      <div className="py-5 mb-10 flex flex-col items-center">
        <h1 className="pb-5 text-4xl font-sans font-semibold uppercase text-gray-900">
          Projects
        </h1>
        <hr className=" bg-gray-500 w-20 flex-grow h-0.5" />
      </div>

      <div className="grid gap-y-10 gap-x-5 lg:grid-cols-2 ssm:grid-cols-1">
        {PROJECT_LIST.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
