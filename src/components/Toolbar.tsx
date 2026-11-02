import React from "react";

interface ToolbarProps {
  setColor: (color: string) => void;
  setBrushSize: (size: number) => void;
  setTool: (tool: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ setColor, setBrushSize, setTool }) => {
  return (
    <div className="toolbar">
      <button onClick={() => setTool("brush")}>Brush</button>
      <label>
        Color:
        <input
          type="color"
          onChange={(e) => setColor(e.target.value)}
        />
      </label>
      <label>
        Brush Size:
        <input
          type="number"
          min="1"
          max="50"
          defaultValue="5"
          onChange={(e) => setBrushSize(Number(e.target.value))}
        />
      </label>
      <button onClick={() => setTool("eraser")}>Erase</button>  
    </div>
  );
};

export default Toolbar;