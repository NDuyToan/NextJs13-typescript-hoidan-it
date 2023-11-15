"use client";
import React from "react";
import Table from "react-bootstrap/Table";

const AppTable = () => {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <td>#</td>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Username</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default AppTable;
