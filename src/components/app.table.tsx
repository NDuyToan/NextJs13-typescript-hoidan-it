"use client";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import CreateModal from "./create.modal";
interface IProps {
  blogs: IBlog[];
}

const AppTable = (props: IProps) => {
  const { blogs } = props;
  console.log("blogs", blogs);
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);

  return (
    <>
      <div className="mb-3 d-flex justify-content-between">
        <h3>Table Blogs</h3>
        <Button variant="secondary" onClick={() => setShowModalCreate(true)}>
          Add New
        </Button>
      </div>
      <Table bordered hover>
        <thead>
          <tr>
            <td>No</td>
            <td>Title</td>
            <td>Author</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((blog) => (
            <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>{blog.title}</td>
              <td>{blog.author}</td>
              <td>
                <Button>View</Button>
                <Button variant="warning" className="mx-3">
                  Edit
                </Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <CreateModal show={showModalCreate} setShow={setShowModalCreate} />
    </>
  );
};

export default AppTable;
