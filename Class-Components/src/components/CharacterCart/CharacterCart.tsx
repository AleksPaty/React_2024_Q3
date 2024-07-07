import { Component } from "react";
import { Biotype, CharacterFullInfo, CharacterShortInfo } from "../../API/responseTypes";
import style from './CharacterCart.module.css';
import PostService from "../../API/PostService";
import BioBlock from "../UI/bioBlock/BioBlock";

class CharacterCart extends Component<{data: CharacterShortInfo}> {
    state = {
        character: this.props.data as CharacterFullInfo,
        bioInfo: {} as Biotype,
        isBio: true,
    }
    
    componentDidMount(): void {
        this.getFullInfo(this.props.data.id);
    }

    async getFullInfo(id: number) {
        const data = await PostService.getFullInfo(id);
        this.setState({character: data, bioInfo: this.postBioProps(data)});
    }

    swapBio() {
        const newBioState = this.state.isBio ? false : true;
        this.setState({...this.state, isBio: newBioState});
    }

    postBioProps(data: CharacterFullInfo) {
        const props = {
            real_name: data.real_name,
            birthday: this.state.character.birthday,
            constellation: this.state.character.constellation,
            region: this.state.character.region,
            affiliation: this.state.character.affiliation,
            special_dish: this.state.character.special_dish,
            release_day: this.state.character.release_day
        }
        return props;
    }

    render() {
 
        return (
            <div className={style.card}>
                <h3>{this.state.character.name}</h3>
                <div></div>
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
                                <td className={style.leftPartBody}>{this.props.data.rarity}</td>
                                <td className={style.rightPartBody}>{this.props.data.weapon}</td>
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
                                <td className={style.leftPartBody}>{this.state.character.vision}</td>
                                <td className={style.rightPartBody}>{this.state.character.model_type}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <ul className={style.switchBlock}>
                    <li className={style.switchItem} onClick={this.swapBio.bind(this)}>Bio</li>
                    <li className={style.switchItem} onClick={this.swapBio.bind(this)}>Voice Actors</li>
                </ul>
                {
                    this.state.isBio
                        ? <BioBlock isBio={this.state.isBio} data={this.state.bioInfo} />
                        : <BioBlock isBio={this.state.isBio} data={this.state.character.voice_actors[0]} />
                }
            </div>
        )
    }
}

export default CharacterCart