import { useState } from "react";
import NepaliTextBox from "./NepaliTextBox";
import NepaliTextBoxTest from "./NepaliTextBoxTest";
import "./NepaliTextBox.css";

const testCases = [
  {
    label: "Basic Introduction",
    input: "mero naam sakar ho",
    expected: "मेरो नाम सकर हो",
  },
  {
    label: "Another Name",
    input: "mero naam namita ho",
    expected: "मेरो नाम नमिता हो",
  },
  {
    label: "Location",
    input: "ma butawal ma basdachu",
    expected: "म बुतवल म बस्दछु",
  },
  {
    label: "Complex Sentence",
    input: "nepal ko rajakumari sundar chha",
    expected: "नेपाल को राजकुमारी सुन्दर छ",
  },
  {
    label: "Numbers and Special Characters",
    input: "ma 25 barsha ko chu. om namah shivaya.",
    expected: "म २५ बर्ष को छु। ॐ नमः शिवाय।",
  },
  {
    label: "Complex Consonants",
    input: "ksha kshya tra gya shri",
    expected: "क्ष क्ष्य त्र ज्ञ श्री",
  },
];

function App() {
  const [currentText, setCurrentText] = useState("");
  const [activeTab, setActiveTab] = useState<"demo" | "test">("demo");

  const TabButton = ({
    label,
    isActive,
    onClick,
  }: {
    label: string;
    isActive: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      style={{
        padding: "0.75rem 1.5rem",
        backgroundColor: isActive ? "#4CAF50" : "#f5f5f5",
        color: isActive ? "white" : "#333",
        border: "1px solid #ddd",
        borderRadius: "8px 8px 0 0",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: isActive ? "600" : "400",
        marginRight: "0.5rem",
        transition: "all 0.2s ease",
      }}
    >
      {label}
    </button>
  );

  return (
    <div className="demo-container">
      <div className="demo-header">
        <h1>🇳🇵 Nepali TextBox Demo</h1>
        <p>Real-time conversion from romanized Nepali to Unicode Nepali</p>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <TabButton
          label="📖 Demo & Examples"
          isActive={activeTab === "demo"}
          onClick={() => setActiveTab("demo")}
        />
        <TabButton
          label="🧪 Advanced Testing"
          isActive={activeTab === "test"}
          onClick={() => setActiveTab("test")}
        />
      </div>

      {activeTab === "demo" && (
        <>
          <div className="instructions">
            <h3>📖 How to Use</h3>
            <ul>
              <li>
                <strong>Type naturally:</strong> Write romanized Nepali text and
                watch it convert to Nepali Unicode in real-time
              </li>
              <li>
                <strong>Edit anywhere:</strong> Place your cursor anywhere in
                the text and continue typing - conversion works seamlessly
              </li>
              <li>
                <strong>Word boundaries:</strong> Conversion happens at word
                boundaries (spaces, punctuation)
              </li>
              <li>
                <strong>Longest match:</strong> The system uses the longest
                matching substring for accurate conversion
              </li>
              <li>
                <strong>Mixed editing:</strong> You can mix Nepali and English
                text freely
              </li>
            </ul>
          </div>

          <div>
            <h2>🚀 Interactive Demo</h2>
            <p>Try typing any romanized Nepali text below:</p>
            <NepaliTextBox
              value={currentText}
              onChange={setCurrentText}
              placeholder="Type here: mero naam sakar ho..."
              rows={6}
            />

            <div
              style={{
                marginTop: "1rem",
                padding: "1rem",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <strong>Current Output:</strong>
              <div
                style={{
                  marginTop: "0.5rem",
                  fontSize: "1.2rem",
                  fontFamily:
                    '"Noto Sans Devanagari", "Segoe UI", Arial, sans-serif',
                  color: "#2e7d32",
                  fontWeight: "500",
                }}
              >
                {currentText || "(Start typing to see conversion...)"}
              </div>
            </div>
          </div>

          <div className="test-section">
            <h3>🧪 Test Cases</h3>
            <p>Here are some example conversions to test:</p>

            {testCases.map((testCase, index) => (
              <div key={index} className="test-case">
                <span className="test-case-label">{testCase.label}:</span>
                <div className="test-case-input">
                  <strong>Input:</strong> {testCase.input}
                </div>
                <div className="test-case-output">
                  <strong>Expected:</strong> {testCase.expected}
                </div>
                <button
                  onClick={() => setCurrentText(testCase.input)}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    marginTop: "0.5rem",
                  }}
                >
                  Try This Example
                </button>
              </div>
            ))}
          </div>

          <div className="test-section">
            <h3>✨ Features Demonstrated</h3>
            <ul>
              <li>
                <strong>Real-time Conversion:</strong> Text converts as you type
              </li>
              <li>
                <strong>Cursor Preservation:</strong> Your cursor position is
                maintained during conversion
              </li>
              <li>
                <strong>Partial Text Editing:</strong> Edit text anywhere
                without breaking existing conversions
              </li>
              <li>
                <strong>Word Boundary Detection:</strong> Smart conversion that
                respects word boundaries
              </li>
              <li>
                <strong>Longest Match Algorithm:</strong> Uses the most specific
                conversion rules first
              </li>
              <li>
                <strong>Mixed Content Support:</strong> Seamlessly handles
                Nepali, English, numbers, and punctuation
              </li>
            </ul>
          </div>
        </>
      )}

      {activeTab === "test" && <NepaliTextBoxTest />}

      <div style={{ marginTop: "2rem", textAlign: "center", color: "#666" }}>
        <p>Built with React + TypeScript + Vite</p>
        <p>Ready to be integrated into any React project! 🎉</p>
      </div>
    </div>
  );
}

export default App;
