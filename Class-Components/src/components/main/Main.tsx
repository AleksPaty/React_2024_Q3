import { MouseEvent, MouseEventHandler, useEffect, useRef, useState } from "react";
import mainStyles from './Main.module.css';
import { CharacterShortInfo } from "../../API/responseTypes";
import { Pagination } from "../UI/Pagination/Pagination";
import { SPLoader } from "../UI/SPLoader/SPLoader";
import { TemplateCard } from "../TemplateCard/TemplateCard";
import { Outlet, useLoaderData, useNavigate, useNavigation } from "react-router-dom";

function Main() {
    const [findData, totalPage] = useLoaderData() as [CharacterShortInfo[], number];
    const [currentPage, setPage] = useState(1);
    const { state } = useNavigation();
    const navigate = useNavigate();
    const detailsBlock = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, -2);
    }, [currentPage])

    // const getSearchData = async(word: string, page: number) => {
    //     const [data, pages] = word.length > 1
    //         ? await PostService.findData(word, page)
    //         : await PostService.getAll(page)

    //     setData(data! as CharacterShortInfo[]);
    //     setTotalPage(pages as number);
    // }

    const changePage = (page: number) => {
        setPage(page);
    }

    const clickCardHandle: MouseEventHandler<HTMLDivElement> = (e: MouseEvent) => {
        const currentElem = e.currentTarget as HTMLDivElement;

        if(detailsBlock.current!.children.length < 1) return;
        if((e.target as HTMLElement).className === currentElem.className) navigate(-1);
    }

    const cards = findData 
        ? findData.map((character) => <TemplateCard key={character.id} data={character}/>)
        : undefined

    return (
        <main className={mainStyles.main}>
            <h2 className={mainStyles.mainTitle}>Result</h2>
            <div className={mainStyles.searchResult}>
                <div className={mainStyles.cards} onClick={clickCardHandle}>
                    { state === 'loading' ? <SPLoader/> : cards ?? <span>Not found</span>}
                </div>
                {
                    <div ref={detailsBlock} className={mainStyles.detailsBlock}>
                        {
                            findData && state === 'loading'
                                ? <SPLoader/>
                                : null
                        }
                        <Outlet />
                    </div>
                }
            </div>
            { 
                totalPage > 1 
                    ? <Pagination pages={totalPage} changePage={changePage} />
                    : <></>
            }
        </main>
    )
}

export default Main;