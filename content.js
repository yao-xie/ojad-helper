// Get all elements by class name midashi_wrapper
const elements = document.getElementsByClassName( "midashi_wrapper" );

if(elements){
  for( let i = 0 ; i < elements.length ; i ++ ) {
    const wrapper = elements[i]

    // Get the word
    const content = wrapper.getElementsByTagName('p')[0].innerHTML;
    const word = content.split('・')[0]; // Split it since content contains both 辞書形 & ます形

    // Add translation
    const translation = document.createElement('p');
    // Use the same styling as the publish information in an article's header
    translation.classList.add('color-secondary-text', 'type--caption');
    translation.textContent = `translation`;
    wrapper.insertAdjacentElement('afterend', translation);
  
    // Add button to open Jisho for more details
    const button1 = document.createElement("button");
    button1.innerText = '🇨🇳';
    button1.addEventListener('click', () => {
      // var newUrl = `https://jisho.org/search/${word}`;
      var newUrl = `https://dict.hujiang.com/jp/jc/${word}`;
      window.open(newUrl) 
    });
    wrapper.insertAdjacentElement('afterend', button1);

    // Add button to open Jisho for more details
    const button2 = document.createElement("button");
    button2.innerText = '🇯🇵';
    // button2.style.backgroundColor = "white";
    button2.addEventListener('click', () => {
      // var newUrl = `https://jisho.org/search/${word}`;
      var newUrl = `https://kotobank.jp/word/${word}`;
      window.open(newUrl) 
    });
    wrapper.insertAdjacentElement('afterend', button2);
    
  }
}