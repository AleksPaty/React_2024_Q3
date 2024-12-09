import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../components/main/Main";
import { ErrorPage } from "../pages/ErrorPage";
import CharacterCart from "../components/CharacterCart/CharacterCart";
import { characterDetailLoader } from "../components/CharacterCart/loader";
import { cardsLoader } from "../components/main/loader";
import { ROUTES } from "./path";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/:pageNumber?',
          element: <Main/>,
          loader: cardsLoader,
          shouldRevalidate: ({ currentUrl }) => {
            return !currentUrl.pathname.includes('detail');
          },
          children: [
            {
              path: ROUTES.detail,
              element: <CharacterCart />,
              loader: characterDetailLoader
            }
          ]
        }
      ]
    }
])