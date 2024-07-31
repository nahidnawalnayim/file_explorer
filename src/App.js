import "./styles.css";
import explorer from "./data/data";
import { useState } from "react";
import Folder from "./Folder/Folder";
import useTraverseHook from "./hooks/useTraverseHook";
export default function App() {
  const [explorerData, setExplorerdata] = useState(explorer);
  const { insertNode } = useTraverseHook();

  const handleTree = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerdata(finalTree);
  };

  return (
    <div className="App">
      <h2>Start to see some happen!</h2>

      <Folder handleInsertNode={handleTree} explorer={explorerData} />
    </div>
  );
}
