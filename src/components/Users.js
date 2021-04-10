import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = ({ resourceName }) => {
  const [resources, setResources] = useState([]);

  const fetchResources = async (resourceName) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resourceName}`
    );

    setResources(response.data);
  };

  useEffect(() => {
    fetchResources(resourceName);
  }, [resourceName]);

  return (
    <ul>
      {resources.map((resources) => (
        <li key={resources.id}>{resources.name}</li>
      ))}
    </ul>
  );
};

export default Users;
