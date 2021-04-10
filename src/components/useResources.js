import React, { useState, useEffect } from "react";
import axios from "axios";

const useResources = async ({ resourceName }) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/${resourceName}`
  );

  const [resources, setResources] = useState(response);
};

export default useResources;
