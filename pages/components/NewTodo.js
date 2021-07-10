import { Form, Button, Modal, Alert } from "react-bootstrap";

const NewTodo = ({ show, setShow, setTitle, createTodo, isLoading, error }) => {
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => createTodo()}
            disabled={isLoading}
          >
            {isLoading ? "...Loading" : "Add Todo"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewTodo;
