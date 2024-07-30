import { useEffect, useState } from "react"
import { getLocalData, removeLocalData, setLocalData } from "../utils/localStorageManage"

export const useLocalStore = (init: string): [string, React.Dispatch<React.SetStateAction<string>>] => {
    const [searchWord, setSearchWord] = useState(getLocalData() || init);

    useEffect(() => {
        const saveWord = getLocalData();
        if (saveWord !== searchWord && searchWord) setLocalData(searchWord);
        if (saveWord && !searchWord) removeLocalData();      
    }, [searchWord])

    return [searchWord, setSearchWord];
}