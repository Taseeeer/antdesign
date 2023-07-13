import { useState } from 'react';
import { Input } from 'antd';
import Logo from '../../assets/logo.png'
import EachProject from './each-project';

export default function Project({ show, setShow, allProjects, setAllProjects }) {

    const [projectName, setProjectName] = useState<string>("");

    const getProjectName = e => {
        setProjectName(e.target.value);
    }

    const addNewProject = () => {
        setShow(!show);
        setProjectName("");
        setAllProjects((prevProject) => [...prevProject, { id: allProjects.length+1, name: projectName }]);
    }

    const updateProjectName = (newName, id) => {
        console.log(newName, id);
        const index = allProjects.findIndex(project => project.id === id);
        const updateProject = allProjects[index].name = newName;
    }

    const deleteProject = (id: string) => {
        const filteredProjects = allProjects.filter(project => project.id !== id);
        setAllProjects(filteredProjects);
    }

    return (
        <>
            { show && 
            (
                <div className="add-project">
                    <img src={Logo} alt="Logo" />
                    <Input 
                        placeholder="Name your project" 
                        className="project-input"
                        value={projectName} 
                        onPressEnter={addNewProject}
                        onChange={getProjectName} />
                </div>
            ) 
            }

            {
                allProjects?.map(eachProject => (
                    <EachProject project={eachProject} key={eachProject.id} updateProjectName={updateProjectName} deleteProject={deleteProject} />
                ))
            }
        </>
    )
}