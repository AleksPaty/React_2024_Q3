export const ROUTES = {
    home: '/',
    cards: (search: string | null) => {
        if (search) {
            return location.search
                ? location.href.split('&')[0] + search
                : `/${search.slice(1)}`;
        }
        if (!search) return '/';
    },
    detail: 'detail/:characterId',
}