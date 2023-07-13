import { Button, Modal } from 'antd';

export default function DeleteModal({ isModalOpen, setIsModalOpen, deleteProject, id }) {

  const showModal = () => {
    setIsModalOpen(isModalOpen);
  };

  const handleOk = () => {
      deleteProject(id);
      setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure you want to delete this project?</p>
      </Modal>
    </>
  );
};