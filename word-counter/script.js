const updateCharacterCount = () => {
  const textarea = document.getElementById("words");
  const characterCountElement = document.getElementById("num_words");

  // Current number of text in textarea
  const text = textarea.value;

  const num_text = text.length;

  // Update character count
  characterCountElement.textContent = `${num_text}`;
};

updateCharacterCount();
