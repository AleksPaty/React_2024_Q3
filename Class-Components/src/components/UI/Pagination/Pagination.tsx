import { MouseEvent, MouseEventHandler, useMemo } from "react";
import Button from "../button/Button";
import style from "./Pagination.module.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../router/path";

interface PaginationType {
    pages: number;
    changePage: (page: number) => void
}

export function Pagination({pages, changePage}: PaginationType) {
    const btnElems = useMemo(() => {
        return Array.from(
            Array(pages), 
            (v, i) => v = <Button style={style.pagination} key={i} type="button">
                <NavLink to={`${ROUTES.cards(`&page=${i + 1}`)}`} className={style.link}>{i + 1}</NavLink>
            </Button>
        );
    }, [pages]);

    const changePageHandle: MouseEventHandler<HTMLDivElement> = (e: MouseEvent) => {
        if(e.target instanceof HTMLButtonElement) {
            changePage(Number(e.target.textContent))
        }
    }

    return (
        <div className={style.paginationWpar} onClick={changePageHandle}>
            {btnElems}
        </div>
    )
}