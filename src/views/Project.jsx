import BackProjects from "../components/BackProjects"
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
    </>
  )
}

export default Project