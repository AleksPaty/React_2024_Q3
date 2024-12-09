import { LoaderFunctionArgs } from "react-router-dom";
import PostService from "../../API/PostService";
import { validateWord } from "../../utils/validation";

export async function cardsLoader({ request, params } : LoaderFunctionArgs) {
    const url = new URL(request.url);
    const search = url.searchParams.get('search');
    const page = url.searchParams.get('page') || params.pageNumber?.split('=')[1];

    return search 
        ? await PostService.findData(validateWord(search), Number(page) || 1)
        : await PostService.getAll(Number(page) || 1)
}