<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# NepaliTextBox Project Instructions

This is a TypeScript React project for a Nepali text conversion component that converts romanized Nepali text to Unicode Nepali in real-time.

## Key Components:

- `NepaliTextBox`: Main component that handles real-time conversion
- `nepaliMapping`: Contains the romanized to Unicode mapping
- Real-time conversion logic that handles cursor positioning and partial text conversion

## Conversion Rules:

- Convert romanized Nepali to Unicode using the longest matching substring
- Preserve cursor position during conversion
- Handle partial conversions when cursor is in the middle of text
- Support seamless typing experience with live conversion

## Technology Stack:

- React 18
- TypeScript
- Vite for build tooling
- CSS for styling
