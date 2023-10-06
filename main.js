function findLongestWord(sentence){
    function countVowels(word){
        const vowels ='aeiouAEIOU';
        let count=0;
        for(let i=0;i<word.length;i++)
        {
            if(vowels.includes(word[i])){
                count++
            }
        }
        return count
    }

    const words = sentence.split(/\s+/);//split by space
    let longestWord='';
    let maxWordLength=0;
    let maxVowelCount=0;
     for(const word of words){
        const cleanedWord = word.replace(/[^a-zA-Z]/g,'');
        const wordLength =cleanedWord.length;
        const vowelCount = countVowels(cleanedWord);
    
     if((wordLength > maxWordLength)||(wordLength === maxWordLength && vowelCount>maxVowelCount)){
        longestWord = cleanedWord;
        maxWordLength = wordLength;
        maxVowelCount = vowelCount
    } }
    return longestWord;
} 

//exemple
const sentence = "Smart people learn from everything and everyone, average people from their  aaaaaeeeekkooh stupid people already, have all the answers"
const longestWord = findLongestWord(sentence);
console.log(longestWord)