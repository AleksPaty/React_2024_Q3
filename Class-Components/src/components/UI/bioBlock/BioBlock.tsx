import { Component } from "react";
import { Biotype } from "../../../API/responseTypes";
import style from './BioBlock.module.css';

type VoiceType = {
    Chinese: string,
    English: string,
    Japanese: string,
    Korean: string,
}

class BioBlock extends Component<{isBio: boolean, data: Biotype | VoiceType}> {

    createElems(data: Biotype | VoiceType) {
        const bioProps = Object.keys(this.props.data)

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

    render() {
        return (
            <div>
                {
                    this.props.isBio 
                        ? this.createElems(this.props.data as Biotype)
                        : this.createElems(this.props.data as VoiceType)
                }
            </div>
        )
    }
}

export default BioBlock;