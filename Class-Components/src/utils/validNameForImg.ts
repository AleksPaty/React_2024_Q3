export const validImageName = (propName: string) => {
    let name = '';
    const arrNames: string[] = propName.split(' ');
    const toLowFirstLetter = (word: string) => word.slice(0, 1).toLowerCase() + word.slice(1);
    
    if(arrNames.length > 1) {
        if(arrNames[0] === 'Traveller') return name = 'traveler-anemo';
        if(arrNames[0] === 'Raiden') return name = 'raiden';
        
        const lowArr = arrNames.map((val) => toLowFirstLetter(val));
        name = lowArr.join('-');
    } else {
        name = toLowFirstLetter(arrNames[0]);
        if(name === 'yae') name = 'yae-miko';
        if(name === 'itto') name = 'arataki-itto';
        if(name === 'kuki') name = 'kuki-shinobu';
    }
   return name;
}