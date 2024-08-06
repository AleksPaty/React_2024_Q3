export const validateWord = (word: string) => {
    let trimWord = word.trimEnd().trimStart();
    if(trimWord.includes('4') || trimWord.includes('four')) trimWord = '4_start';
    if(trimWord.includes('5') || trimWord.includes('five')) trimWord = '5_start';

    return trimWord;
}