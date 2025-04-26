// ChatButton.js
import React, { useState } from 'react';
import axios from 'axios';

const ChatButton = () => {
  const [response, setResponse] = useState('');

  const handleClick = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/chat', {
        prompt: "Tell me a fun fact about AI!",
      });
      setResponse(res.data.reply);
    } catch (err) {
      console.error(err);
      setResponse('Error fetching response.');
    }
  };

  return (
    <div className="text-center p-4">
      <button 
        onClick={handleClick} 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
      >
        Ask AI
      </button>
      {response && <p className="mt-4">{response}</p>}
    </div>
  );
};

export default ChatButton;
