import { LoaderFunctionArgs } from "react-router-dom";
import PostService from "../../API/PostService";
import { validateWord } from "../../utils/validation";

export async function cardsLoader({ request } : LoaderFunctionArgs) {
    const url = new URL(request.url);
    const search = url.searchParams.get("search");

    return search 
        ? await PostService.findData(validateWord(search))
        : await PostService.getAll()
}