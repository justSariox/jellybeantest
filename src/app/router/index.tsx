import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import {
    MainPage,
    Bean,
    Beans,
    Combinations,
    Fact,
    Facts,
    History,
    Recipe,
    Recipes,
    NotFound,
} from "@/pages";
import { CustomLayout } from "@/components";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <CustomLayout />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '*',
                element: <NotFound />
            },
            {
                path: '/beans',
                element: <Beans />,
            },

            {
                path: '/beans/:beanId',
                element: <Bean />
            },
            {
                path: '/facts',
                element: <Facts />,
            },

            {
                path: '/facts/:factId',
                element: <Fact />
            },
            {
                path: '/recipes',
                element: <Recipes />,
            },
            {
                path: '/recipes/:recipeId',
                element: <Recipe />
            },
            {
                path: '/combinations',
                element: <Combinations />
            },
            {
                path: '/history',
                element: <History />
            },



        ]
    }
]


const router = createBrowserRouter(routes)

export const Router = () => {
    return <RouterProvider router={router} />
}