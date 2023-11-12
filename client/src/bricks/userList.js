import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiWindowClose } from '@mdi/js';
import { Table, Button, Modal } from 'react-bootstrap';
import AddUser from './user_action';

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Creator', role: 'Creator' },
    { id: 2, name: 'User 1', role: 'Invited' },
    { id: 3, name: 'User 2', role: 'Invited' },
    // Add more users as needed
  ]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    handleCloseDeleteModal();
  };

  const handleShowDeleteModal = (id) => {
    setUserToDelete(id);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setUserToDelete(null);
    setShowDeleteModal(false);
  };

  const addUser = (newUser) => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
  };

  return (
    <div style={{ background: '#f5f5f5', padding: '10px', borderRadius: '8px' }}>
      <Table borderless style={{ background: '#f5f5f5' }}>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div>{user.name}</div>
              </td>
              <td>
                <div>{user.role}</div>
              </td>
              <td>
                {user.role !== 'Creator' && (
                  <Button variant="danger" onClick={() => handleShowDeleteModal(user.id)}>
                    <Icon path={mdiWindowClose} size={1} />
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deleteUser(userToDelete)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <AddUser addUser={addUser} />
    </div>
  );
};

export default UserList;
