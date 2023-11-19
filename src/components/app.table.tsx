"use client";
import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
interface IProps {
  blogs: IBlog[];
}

const AppTable = (props: IProps) => {
  const { blogs } = props;
  console.log("blogs", blogs);

  return (
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
  );
};

export default AppTable;
