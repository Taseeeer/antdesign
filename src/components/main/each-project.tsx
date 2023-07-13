import { useState } from 'react';
import { EditOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Logo from '../../assets/logo.png'
import { getFormattedResult } from '../../utils/getCurrentTime';
import DeleteModal from '../popups/delete-modal';

export default function EachProject({ project, deleteProject, updateProjectName }) {

  const { name } = project;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showUpdateInput, setShowUpdateInput] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>(name);


  const getNewProjectName = (e) => {
      setNewName(e.target.value);
  }

  const updateProject = (name, id) => {
      setShowUpdateInput(false);
      updateProjectName(newName, id);
  }

    return (
        <>
        <div className="new-project-outer">
            <div className="name-edit">
                <img src={Logo} alt="Logo" />
                { !showUpdateInput && <p>{project.name}</p> } 
                { showUpdateInput
                    &&
                    (
                    <>
                    <Input 
                        placeholder="Name your project" 
                        className="project-input"
                        value={newName}
                        onChange={(e) => getNewProjectName(e)}
                        
                        />
                    <CheckOutlined onClick={() => updateProject(project.name, project.id)} />
                    </>
                    )
                } 
                
                <EditOutlined style={{ fontSize: "1.2rem", cursor: "pointer", color: "#000000B2"}} onClick={() => setShowUpdateInput(!showUpdateInput)} />
            </div>
            <span>{ getFormattedResult() }</span>
            <DeleteOutlined style={{ fontSize: "1.2rem", cursor: "pointer", color: "#000000B2"}} onClick={() => setIsModalOpen(true)} />
            <DeleteModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} deleteProject={deleteProject} id={project.id} />
        </div>
        </>
    )
}