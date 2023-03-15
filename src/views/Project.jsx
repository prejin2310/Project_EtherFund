import BackProjects from "../components/BackProjects"
import DeleteProjects from "../components/DeleteProjects"
import ProjectBackers from "../components/ProjectBackers"
import ProjectDetails from "../components/ProjectDetails"
import UpdateProjects from "../components/UpdateProjects"

const Project = () => {
  return (
    <>
      <ProjectDetails />
      <ProjectBackers />
      <UpdateProjects/> 
      <BackProjects />
      <DeleteProjects />
    </>
  )
}

export default Project