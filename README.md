## 🕵️ KMP String Search Visualization

Welcome to the **KMP String Search Visualization** tool! Dive deep into the string searching algorithm using our visualization tool that highlights the occurrences of a pattern in a given text. Along with that, visualize the frequency of these occurrences using an interactive bar chart!

live preview at https://dnapattern.netlify.app/

### 🌟 Features
- **🔍 String Match**: Use the KMP algorithm to find all occurrences of a pattern in a given text.
- **🔖 Text Highlight**: Easily identify pattern occurrences in the text with a highlighted background.
- **📊 Visual Chart**: Get an overview of the occurrences with a grouped bar chart representation.

### 📋 Usage
1. **Input Text & Pattern**:
   - Enter your main text in the `text` field.
   - Provide the pattern you want to search in the `pattern` field.

2. **Execute Search**:
   - Click the button to initiate the KMP search.

3. **View Results**:
   - The main text will be displayed with the pattern occurrences highlighted.
   - At the bottom, a grouped bar chart showcases the frequency of these occurrences of the pattern.

### 🔎 Behind the Scenes

The provided JavaScript code employs the Knuth-Morris-Pratt (KMP) algorithm for string search. The `computeLPSArray` function calculates the Longest Prefix Suffix values, aiding the `KMPSearch` function to bypass portions of the text for an optimized search. The primary function, `kmpMatch`, drives the entire process, rendering both results and the chart visualization.

### 🚀 Getting Started
- Integrate the provided JavaScript code into your HTML project.
- Design the HTML to have the necessary input fields (`text` and `pattern`) along with a button to start the search.
- Dedicate a space (`result`) to showcase the highlighted text results.
- Embed a canvas element (`myChart`) for bar chart visualization.

### 🤝 Contributions

Open to collaboration! 🤗 For significant modifications, please open an issue first to discuss your plans or ideas.

### 📜 License
[MIT](https://choosealicense.com/licenses/mit/)

### 📣 Feedback
Your feedback is invaluable to us! 💭 If this tool proves handy or you have any suggestions, please do share. Let's refine this tool together! 🎉
