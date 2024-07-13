import { useEffect, useState } from "react";
import mainStyles from './Main.module.css';
import PostService from "../../API/PostService";
import { CharacterShortInfo } from "../../API/responseTypes";
import CharacterCart from "../CharacterCart/CharacterCart";

function Main({requestWord}: {requestWord: string}) {
    const [findData, setData] = useState<CharacterShortInfo[] | []>([]);

    useEffect(() => {
        getSearchData(requestWord);
    }, [requestWord])

    const getSearchData = async(word: string) => {
        const data = word.length > 1
            ? await PostService.findData(word)
            : await PostService.getAll()

        setData(data!);
    }

    const cards = findData?.map((character) => {
        return <CharacterCart key={character.id} data={character}/>
    })

    return (
        <main className={mainStyles.main}>
            <h2 className={mainStyles.mainTitle}>Result</h2>
            <div className={mainStyles.cards}>{cards}</div>
        </main>
    )
}

export default Main;