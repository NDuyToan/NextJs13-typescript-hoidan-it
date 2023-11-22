"use client";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import useSWR from "swr";
import { toast } from "react-toastify";
import { mutate } from "swr";

interface IProps {
  show: boolean;
  setShow: (v: boolean) => void;
  blog: IBlog | null;
  setBlog: (blog: IBlog) => void;
}

export interface IBlog {
  id: number;
  title: string;
  author: string;
  content: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function UpdateModal(props: IProps) {
  const { show, setShow, blog, setBlog } = props;

  const handleClose = () => {
    setShow(false);
    setBlog &&
      setBlog({
        author: "",
        content: "",
        title: "",
        id: 0,
      });
  };

  const handleSubmit = () => {
    fetch(`http://localhost:8000/blogs/${blog?.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        if (res) {
          handleClose();
          toast.success("Updated success!");
          mutate("http://localhost:8000/blogs");
        } else {
          handleClose();
          toast.error("Updated Failed!");
          mutate("http://localhost:8000/blogs");
        }
      });
  };

  const handleInputChange = (name: string, value: string) => {
    blog &&
      setBlog({
        ...blog,
        [name]: value,
      });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                value={blog?.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                value={blog?.author}
                onChange={(e) => handleInputChange("author", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="..."
                value={blog?.content}
                onChange={(e) => handleInputChange("content", e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;
