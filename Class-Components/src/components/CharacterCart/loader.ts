import { LoaderFunctionArgs } from "react-router-dom";
import PostService from "../../API/PostService";

export async function characterDetailLoader({params}: LoaderFunctionArgs<string>) {
    return await PostService.getFullInfo(Number(params.characterId));
}