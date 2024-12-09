export const getLocalData = (key = 'Search'): string | null => {
    const previousWord = localStorage.getItem(key);
    return previousWord;
}

export const setLocalData = (value: string, key = 'Search'): void => {
    localStorage.setItem(key, value);
}

export const removeLocalData = (key = 'Search'): void => {
    localStorage.removeItem(key);
}