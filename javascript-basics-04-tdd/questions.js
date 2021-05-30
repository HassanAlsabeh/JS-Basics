
const stringSize = (text) => {
        return text.length;
}
const replaceCharacterE = (text) => {
        return text.replace("e"," ");
}
const concatString = (text1, text2) => {
        return text1+text2;
}
const showChar5 = (text) => {
        return text[4];
}
const showChar9 = (text) => {
        return text(0,9);
}
const toCapitals = (text) => {
        return text.toUpperCase();
}
const toLowerCase = (text) => {
        return text.toLowerCase()
}
const removeSpaces = (text) => {
        return text.trim();
}
const IsString = (text) => {
       return typeof text == typeof "";
}

const getExtension = (text) => {
        
}
const countSpaces = (text) => {
        return text.split(" ").length-1;  
}
const InverseString = (text) => {
        return text.split("").reverse().join("");
}   

const power = (x, y) => {
        return  Math.pow(x, y)
}
const absoluteValue = (num) => {
       return Math.abs(-5)
}
const absoluteValueArray = (array) => {
        return array.map(Math.abs);
}   
const circleSurface = (radius) => {

}
const hypothenuse = (ab, ac) => {

}
const BMI = (weight, height) => {
         
         var Height1 = Math.pow(height, 2);
        var roundedResult = weight/Height1;

         return roundedResult;
}

const createLanguagesArray = () => {
        var names = ["Html","CSS","Java","PHP"];
        return names
}

const createNumbersArray = () => {
        let myVar = [0,1,2,3,4,5];
        return myVar
}

const replaceElement = (languages) => {
     languages[2] = "Javascript";
    return languages;
}

const addElement = (languages) => {
        
}

const addNumberElement = (numbers) => {
      numbers.unshift(-1);
      numbers.unshift(-2);
      return numbers;
}

const removeFirst = (languages) => {
      languages.shift();
      return languages; 
}

const removeLast = (languages) => {
         languages.pop();
         return languages;
}

const convertStrToArr = (social_arr) => {
        return social_arr.split(",");
}

const convertArrToStr = (languages) => {
        return languages.toString();
}

const sortArr = (social_arr) => {
         return social_arr.sort();
}

const invertArr = (social_arr) => {
    
}