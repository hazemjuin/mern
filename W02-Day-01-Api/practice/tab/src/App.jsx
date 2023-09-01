import React from 'react';
import Tabs from './components/Tabs'; // Make sure to import your Tabs component
import './App.css'; // Import your CSS file

function App() {
  const items = [
    {
      label: 'Tab 1',
      content: 'This is the content for Tab 1',
      callback: () => console.log('Tab 1 clicked!'),
    },
    {
      label: 'Tab 2',
      content: 'This is the content for Tab 2',
      callback: () => console.log('Tab 2 clicked!'),
    },
    {
      label: 'Tab 3',
      content: 'This is the content for Tab 3',
      callback: () => console.log('Tab 3 clicked!'),
    },
  ];

  return (
    <div className="App">
      <Tabs items={items} />
    </div>
  );
}

export default App;