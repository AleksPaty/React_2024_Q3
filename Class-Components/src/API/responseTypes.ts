export interface CharacterShortInfo {
    id: number;
    name: string;
    rarity: string;
    vision: string;
    weapon: string;
    wiki_url: string;
}

export interface Biotype {
    real_name: string,
    birthday: string,
    constellation: string,
    region: string[],
    affiliation: string[],
    special_dish: string,
    release_day: string,
}

export interface CharacterFullInfo extends CharacterShortInfo {
    title: string[];
    real_name: string;
    model_type: string;
    birthday: string;
    constellation: string;
    region: string[];
    affiliation: string[];
    special_dish: string;
    how_to_obtain: string[];
    release_day: string;
    release_version: string;
    category: string;
    voice_actors: [
        {
            English: string,
            Chinese: string,
            Japanese: string,
            Korean: string
        }
    ],
}

export interface AllData {
    page: number;
    results: CharacterShortInfo[];
    supported_attributes: string;
    total_pages: number;
    total_results: 1
}

export interface FindData  extends AllData{
    supported_attributes: string;
}