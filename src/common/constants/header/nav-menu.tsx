import { Link } from "react-router-dom";

export const NavItems = [
    {
        title: 'Beans',
        label: (
            <Link to='/beans'>Beans</Link>
        ),
    },
    {
        title: 'Facts',
        label: (
            <Link to='/facts'>Facts</Link>
        )
    },
    {
        title: 'Recipes',
        label: (
            <Link to='/recipes'>Recipes</Link>
        )
    },
    {
        title: 'History',
        label: (
            <Link to='/history'>History</Link>
        ),
    },
    {
        title: 'Combinations',
        label: (
            <Link to='/combinations'>Combinations</Link>
        ),
    },
]