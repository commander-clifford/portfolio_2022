export const addNonBreakingSpace = (componentRoot) => {
  // get all p elements in the DOM
  const paragraphs = componentRoot.getElementsByTagName('p');

  console.log('-paragraphs',paragraphs);

  // iterate over each p element
  for (let i = 0; i < paragraphs.length; i++) {
    // get the text content of the paragraph
    const text = paragraphs[i].textContent.trim();

    // split the text into an array of words
    const words = text.split(' ');

    // check that the paragraph has at least two words
    if (words.length > 1) {
      // remove the last word from the array
      const lastWord = words.pop();

      // join the remaining words back together into a string
      const remainingText = words.join(' ');

      // add the non-breaking space and the last word back into the string
      const newText = `${remainingText}&nbsp;${lastWord}`;

      // set the new text content of the paragraph
      paragraphs[i].innerHTML = newText;
    }
  }
}
