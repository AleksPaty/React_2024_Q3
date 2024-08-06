import { Biotype } from "../../../API/responseTypes";
import style from './BioBlock.module.css';

interface BioProps {
    isBio: boolean;
    data: Biotype | VoiceType
}
type VoiceType = {
    Chinese: string,
    English: string,
    Japanese: string,
    Korean: string,
}

function BioBlock({isBio, data}: BioProps) {
    const createElems = (data: Biotype | VoiceType): JSX.Element[] => {
        const bioProps = Object.keys(data)

        const bioElems = bioProps.map((val, i) => {
            const title = val.split('_').join(' ');
            let value: string = data[val as keyof (typeof data)] || '-';
            if(val === 'release_day') value = value.slice(0, 10);

            return (
                <div key={i} className={style.infoLine}>
                    <h4 className={style.bioTitle}>{title[0].toUpperCase() + title.slice(1)}</h4>
                    <p>{value}</p>
                </div>
            )
        })
        return bioElems;
    }

    return (
        <div>
            {
                isBio 
                    ? createElems(data as Biotype)
                    : createElems(data as VoiceType)
            }
        </div>
    )
}

export default BioBlock;