import React, { useState } from "react";
import NepaliTextBox from "./NepaliTextBox";

// Test component to demonstrate cursor-based editing
export const NepaliTextBoxTest: React.FC = () => {
  const [testText, setTestText] = useState("");

  const testScenarios = [
    {
      title: "Basic Conversion Test",
      description: 'Type "mero naam sakar ho" and see real-time conversion',
      instruction: "Try typing: mero naam sakar ho",
    },
    {
      title: "Mid-word Editing Test",
      description:
        'First type "naam", then go to middle of "नाम" and type "mero"',
      instruction:
        'Step 1: Type "naam" → "नाम". Step 2: Place cursor between ना and म, then type "mero"',
    },
    {
      title: "Complex Text Test",
      description: "Test with longer sentences and mixed content",
      instruction: "Try: ma butawal ma basdachu ra mero umar 25 barsha ho",
    },
  ];

  return (
    <div style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h2>🧪 Nepali TextBox Advanced Testing</h2>

      <div style={{ marginBottom: "2rem" }}>
        <h3>Interactive Test Area</h3>
        <NepaliTextBox
          value={testText}
          onChange={setTestText}
          placeholder="Start testing here..."
          rows={8}
        />

        <div
          style={{
            marginTop: "1rem",
            padding: "1rem",
            backgroundColor: "#f0f8ff",
            borderRadius: "8px",
            border: "1px solid #d0e7ff",
          }}
        >
          <strong>Live Result:</strong>
          <div
            style={{
              marginTop: "0.5rem",
              fontSize: "1.3rem",
              fontFamily: '"Noto Sans Devanagari", Arial, sans-serif',
              color: "#2c5aa0",
              minHeight: "1.5rem",
            }}
          >
            {testText || "(Type something to see the conversion...)"}
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h3>Test Scenarios</h3>
        {testScenarios.map((scenario, index) => (
          <div
            key={index}
            style={{
              marginBottom: "1.5rem",
              padding: "1.5rem",
              backgroundColor: "#fafafa",
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
            }}
          >
            <h4 style={{ color: "#333", marginBottom: "0.5rem" }}>
              {scenario.title}
            </h4>
            <p style={{ color: "#666", marginBottom: "1rem" }}>
              {scenario.description}
            </p>
            <div
              style={{
                padding: "1rem",
                backgroundColor: "#e8f5e8",
                borderRadius: "6px",
                fontFamily: "monospace",
                fontSize: "0.9rem",
                border: "1px solid #c3e6c3",
              }}
            >
              <strong>Instructions:</strong> {scenario.instruction}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          padding: "1.5rem",
          backgroundColor: "#fff3cd",
          borderRadius: "8px",
          border: "1px solid #ffd60a",
        }}
      >
        <h4 style={{ color: "#856404" }}>🎯 Key Features Being Tested:</h4>
        <ul style={{ color: "#856404", marginBottom: 0 }}>
          <li>
            <strong>Real-time conversion:</strong> Watch text convert as you
            type
          </li>
          <li>
            <strong>Cursor preservation:</strong> Your cursor stays where it
            should
          </li>
          <li>
            <strong>Mid-text editing:</strong> Insert text anywhere without
            breaking existing conversions
          </li>
          <li>
            <strong>Word boundary detection:</strong> Smart conversion that
            respects word boundaries
          </li>
          <li>
            <strong>Longest substring matching:</strong> Uses most specific
            rules first
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NepaliTextBoxTest;
