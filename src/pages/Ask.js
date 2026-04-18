import { useState } from "react";
import { askQuestion } from "../api";

function Ask() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    const res = await askQuestion(question);
    setAnswer(res.data.answer);
  };

  return (
    <div>
      <h2>Ask AI</h2>
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask about books..."
      />
      <button onClick={handleAsk}>Ask</button>

      <p>{answer}</p>
    </div>
  );
}

export default Ask;