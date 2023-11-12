import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Icon from '@mdi/react';
import Stack from 'react-bootstrap/Stack';
import { mdiPencil, mdiHome } from '@mdi/js';

function Header() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("Svatomartinská hostina");

  const openInput = () => setShow(true);
  const closeInput = () => setShow(false);

  const handleSave = () => {
    // Zde můžete provést akce potřebné k uložení změn, např. odeslat na server
    closeInput(); // Skryje formulář po uložení
  };

  return (
    <Stack direction="horizontal" gap={3}>
      {!show && (
        <h1>
          {name}{' '}
          <Button variant="light" onClick={openInput}>
            <Icon path={mdiPencil} size={1} />
          </Button>
        </h1>
      )}

      {show && (
        <>
          <Form.Control
            placeholder={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button variant="success" onClick={handleSave} style={{ marginRight: "50%" }}>
            Save
          </Button>
        </>
      )}
        <div className="p-2 ms-auto">
            <Button variant="light">
                <Icon path={mdiHome} size={1} />
            </Button>
        </div>
    </Stack>
  );
}

export default Header;