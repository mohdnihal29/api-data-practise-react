import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resourceName }) => {
  const [resourceList, setResourceList] = useState([]);

  const fetchResources = async (resourceName) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resourceName}`
    );
    setResourceList(response.data);
  };

  useEffect(() => {
    fetchResources(resourceName);
  }, [resourceName]);

  return (
    <ul>
      {resourceList.map((resource) => (
        <li key={resource.id}>{resource.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
