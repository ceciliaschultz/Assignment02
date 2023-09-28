// Assignment 02
// Maria Cecilia Schultz

/*
Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). 
If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. 
If the user enters anything but those four language codes, the application should default to English. 
The result should be (for example):
Hello World translated in French is: Bonjour le monde
*/
function wordTranslator() {
  let languageCode = prompt("Language code (es = Spanish, de = German, en= English, fr=French): ");

  let word = "Hello World";
  let language;

  switch (languageCode) {
    case "es":
        translatedWord="Hola Mundo";
        language = "Spanish";
        break;
    case "de":
        translatedWord="Hallo Welt";
        language= "German";
        break;
    case "fr":
        translatedWord="Bonjour le monde";
        language= "French";
        break;
    default:
        language="English";
        translatedWord=word;
        break;
  }
  console.info(`${word} in ${language} is: ${translatedWord}`);
}
