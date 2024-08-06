import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../components/main/Main";
import { ErrorPage } from "../pages/ErrorPage";
import CharacterCart from "../components/CharacterCart/CharacterCart";
import { characterDetailLoader } from "../components/CharacterCart/loader";
import { cardsLoader } from "../components/main/loader";
import { ROUTES } from "./puth";

export const router = createBrowserRouter([
    {
      path: ROUTES.home,
      element: <App/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: ROUTES.home,
            element: <Main/>,
            loader: cardsLoader,
            children: [
              {
                path: ROUTES.detail,
                element: <CharacterCart />,
                loader: characterDetailLoader
              }
            ]
        },
      ]
    }
])