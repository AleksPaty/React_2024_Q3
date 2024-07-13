import { useCallback, useEffect, useState } from "react";
import { Biotype, CharacterFullInfo, CharacterShortInfo } from "../../API/responseTypes";
import style from './CharacterCart.module.css';
import PostService from "../../API/PostService";
import BioBlock from "../UI/bioBlock/BioBlock";

function CharacterCart({data}: {data: CharacterShortInfo}) {
    const [character, setCharacter] = useState(data as CharacterFullInfo);
    const [bioInfo, setBio] = useState({} as Biotype);
    const [isBio, setBioBoolean] = useState(true);

    const getFullInfo = useCallback(async(id: number) => {
        const data = await PostService.getFullInfo(id);
        setCharacter(data);
        setBio(postBioProps(data));
    }, [])

    useEffect(() => {
        getFullInfo(data.id);
    }, [data.id, getFullInfo])

    const postBioProps = (data: CharacterFullInfo): Biotype => {
        const props = {
            real_name: data.real_name,
            birthday: data.birthday,
            constellation: data.constellation,
            region: data.region,
            affiliation: data.affiliation,
            special_dish: data.special_dish,
            release_day: data.release_day
        }
        return props;
    }

    const swapBio = (value: boolean) => {
        setBioBoolean(value);
    }

    const imageUrlBield = (characterName: string): string => {
        const name = characterName.slice(0, 1).toLowerCase() + characterName.slice(1);
        return `https://genshin.jmp.blue/characters/${name}/icon.png`;
    }

    return (
        <div className={style.card}>
            <h3>{character.name}</h3>
            <div>
                <img src={imageUrlBield(character.name)} alt={character.id.toString()} />
            </div>
            <section>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th className={style.leftPartHead}>Quality</th>
                            <th className={style.rightPartHead}>Weapon</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={style.leftPartBody}>{data.rarity}</td>
                            <td className={style.rightPartBody}>{data.weapon}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th className={style.leftPartHead}>Element</th>
                            <th className={style.rightPartHead}>Model Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={style.leftPartBody}>{character.vision}</td>
                            <td className={style.rightPartBody}>{character.model_type}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <ul className={style.switchBlock}>
                <li className={style.switchItem} onClick={() => swapBio(true)}>Bio</li>
                <li className={style.switchItem} onClick={() => swapBio(false)}>Voice Actors</li>
            </ul>
            {
                isBio
                    ? <BioBlock isBio={isBio} data={bioInfo} />
                    : <BioBlock isBio={isBio} data={character.voice_actors[0]} />
            }
        </div>
    )
}

export default CharacterCart