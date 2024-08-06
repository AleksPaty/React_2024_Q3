import { useState } from "react";
import { CharacterShortInfo } from "../../API/responseTypes";
import { validImageName } from "../../utils/validNameForImg";
import style from "./TemplateCard.module.css";
import { SPLoader } from "../UI/SPLoader/SPLoader";
import { Link } from "react-router-dom";

export function TemplateCard({data}: {data: CharacterShortInfo}) {
    const [isLoad, setIsLoad] = useState(false);

    const validNameImage = (characterName: string): string => {
        return validImageName(characterName);
    }

    const img = new Image();
    img.src = `https://genshin.jmp.blue/characters/${validNameImage(data.name)}/card`;
    img.onload = () => setIsLoad(true);

    return (
        isLoad
          ? (<div className={style.card}>
                <Link to={`detail/${data.id}`}>
                    <h3>{data.name}</h3>
                    <div>
                        <img 
                            className={style.img}
                            src={img.src} alt={`${data.id}`}
                        />
                    </div>
                </Link>
            </div>)
          : <SPLoader/>
    )
}