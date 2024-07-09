import { Link } from "react-router-dom";

export const NavItems  = [
    {
        title: 'Beans',
        label: (
            <Link to='/beans'>Beans</Link>
        ),
        key: 1
    },
    {
        title: 'Facts',
        label: (
            <Link to='/facts'>Facts</Link>
        ),
        key: 2
    },
    {
        title: 'Recipes',
        label: (
            <Link to='/recipes'>Recipes</Link>
        ),
        key: 3
    },
    {
        title: 'History',
        label: (
            <Link to='/history'>History</Link>
        ),
        key: 4
    },
    {
        title: 'Combinations',
        label: (
            <Link to='/combinations'>Combinations</Link>
        ),
        key: 5
    },
]