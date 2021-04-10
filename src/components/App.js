import React, { useState } from "react";
import { render } from "react-dom";
import ResourceList from "./ResourceList";

const App = () => {
  const [resourceName, setResourceName] = useState("posts");

  return (
    <React.Fragment>
      <button onClick={() => setResourceName("posts")}>posts</button>
      <button onClick={() => setResourceName("todos")}>todos</button>
      <ResourceList resourceName={resourceName} />
    </React.Fragment>
  );
};
export default App;
