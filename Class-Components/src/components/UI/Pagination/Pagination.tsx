import { MouseEvent, MouseEventHandler, useMemo } from "react";
import Button from "../button/Button";
import style from "./Pagination.module.css";

interface PaginationType {
    pages: number;
    changePage: (page: number) => void
}

export function Pagination({pages, changePage}: PaginationType) {
    const btnElems = useMemo(() => {
        return Array.from(
            Array(pages), 
            (v, i) => v = <Button style={style.pagination} key={i} type="button">{i + 1}</Button>
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