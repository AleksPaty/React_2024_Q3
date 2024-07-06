import { Component } from "react";
import mainStyles from './Main.module.css';
import PostService from "../../API/PostService";
import { CharacterShortInfo } from "../../API/responseTypes";
import CharacterCart from "../CharacterCart/CharacterCart";

class Main extends Component<{requestWord: string}> {
    state = {
        findData: null as CharacterShortInfo[] | null,
    };

    componentDidMount(): void {
        this.getSearchData(this.props.requestWord);
    }
    componentDidUpdate(prevProps: {requestWord: string}): void {
        if(prevProps.requestWord !== this.props.requestWord) {
            this.getSearchData(this.props.requestWord);
        }
    }

    async getSearchData(word: string) {
        const data = word.length > 1
            ? await PostService.findData(word)
            : await PostService.getAll()

        this.setState({ findData: data });
    }

    render() {
        const cards = this.state.findData?.map((character) => {
            return <CharacterCart key={character.id} data={character}/>
        })

        return (
            <main className={mainStyles.main}>
                <h2 className={mainStyles.mainTitle}>Result</h2>
                <div className={mainStyles.cards}>{cards}</div>
            </main>
        )
    }
}

export default Main;