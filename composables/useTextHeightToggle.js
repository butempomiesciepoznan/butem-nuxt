export function useTextHeightToggle(initialTextHeight, textContainer) {
  const textHeight = ref(initialTextHeight);
  const isExpanded = ref(false);

  // Function to set the text height
  const setTextHeight = async () => {
    await nextTick(); // Wait for full DOM rendering
    if (textContainer.value) {
      textHeight.value = isExpanded.value
        ? textContainer.value.scrollHeight // Set to full height
        : initialTextHeight;
    }
  };

  const toggleTextLength = () => {
    isExpanded.value = !isExpanded.value;
    setTextHeight();
  };

  return {
    isExpanded,
    textHeight,
    toggleTextLength
  }
}