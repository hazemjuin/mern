import React, { useState } from 'react';

const BoxGenerator = () => {
  const [color, setColor] = useState('');
  const [size, setSize] = useState({ width: 100, height: 100 });
  const [boxes, setBoxes] = useState([]);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize({
      ...size,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddBox = (e) => {
    e.preventDefault();
    if (color) {
      const newBox = {
        color,
        size,
      };
      setBoxes([...boxes, newBox]);
      setColor('');
    }
  };

  return (
    <div>
      <h1>Box Generator</h1>
      <form onSubmit={handleAddBox}>
        <label>
          Color:
          <input
            type="text"
            value={color}
            onChange={handleColorChange}
          />
        </label>
        <br />
        <label>
          Width:
          <input
            type="number"
            name="width"
            value={size.width}
            onChange={handleSizeChange}
          />
        </label>
        <label>
          Height:
          <input
            type="number"
            name="height"
            value={size.height}
            onChange={handleSizeChange}
          />
        </label>
        <button type="submit">Add Box</button>
      </form>
      <div className="box-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="box"
            style={{
              backgroundColor: box.color,
              width: `${box.size.width}px`,
              height: `${box.size.height}px`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BoxGenerator;

