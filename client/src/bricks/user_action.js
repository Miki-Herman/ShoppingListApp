import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const AddUser = ({ addUser }) => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUserName, setNewUserName] = useState('');

  const handleShowAddUserModal = () => setShowAddUserModal(true);
  const handleCloseAddUserModal = () => setShowAddUserModal(false);

  const handleAddUser = () => {
    // You can perform validation here before adding the user
    if (newUserName.trim() === '') {
      // Handle validation error
      return;
    }

    // Add the new user with role 'Invited'
    addUser({ name: newUserName, role: 'Invited' });

    // Reset form values and close the modal
    setNewUserName('');
    handleCloseAddUserModal();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShowAddUserModal}>
        Add User
      </Button>

      <Modal show={showAddUserModal} onHide={handleCloseAddUserModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUserName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user name"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddUserModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddUser}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddUser;
