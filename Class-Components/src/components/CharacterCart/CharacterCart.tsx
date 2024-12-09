import { useEffect, useState } from "react";
import { Biotype, CharacterFullInfo } from "../../API/responseTypes";
import style from './CharacterCart.module.css';
import BioBlock from "../UI/bioBlock/BioBlock";
import { validImageName } from "../../utils/validNameForImg";
import { useLoaderData, useNavigate } from "react-router-dom";
import Button from "../UI/button/Button";

function CharacterCart() {
    const character = useLoaderData() as CharacterFullInfo;
    const navigate = useNavigate()
    const [bioInfo, setBio] = useState({} as Biotype);
    const [isBio, setBioBoolean] = useState(true);

    useEffect(() => {
        setBio(postBioProps(character));
    }, [character])

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
        const name = validImageName(characterName);
        return `https://genshin.jmp.blue/characters/${name}/icon.png`;
    }

    const closeHandle = () => {
        navigate(-1);
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
                            <td className={style.leftPartBody}>{character.rarity}</td>
                            <td className={style.rightPartBody}>{character.weapon}</td>
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
            <Button type='submit' style={style.closeBtn} onClick={closeHandle}>Close</Button>
        </div>
    )
}

export default CharacterCart