import { useState } from "react";

function Folder({ handleInsertNode, explorer }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const newFolderManage = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const createFolder = (e) => {
    if (e.keyCode == 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div>
        <div
          onClick={() => setExpand(!expand)}
          style={{
            display: "flex",
            gap: 5,
            backgroundColor: "aliceblue",
            margin: 5,
          }}
        >
          <span> 📂 {explorer.name}</span>
          <button onClick={(e) => newFolderManage(e, true)}> 📂 +</button>
          <button onClick={(e) => newFolderManage(e, false)}> 🗒️ +</button>
        </div>
        <div></div>
        <div style={{ display: expand ? "block" : "none", marginLeft: 20 }}>
          {showInput.visible && (
            <div>
              <span>{showInput.isFolder ? "📂" : "🗒️"}</span>

              <input
                type="text"
                onKeyDown={createFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                autoFocus
              />
            </div>
          )}

          {explorer.items.map((exp) => {
            return (
              <Folder handleInsertNode={handleInsertNode} explorer={exp} />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div>🗒️ {explorer.name}</div>;
  }
}

export default Folder;
