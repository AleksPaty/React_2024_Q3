import { AllData, CharacterFullInfo, FindData } from "./responseTypes";

export default class PostService {
    static async getAll(page = 1, limit = 8) {
        try {
            const response = await fetch(`https://gsi.fly.dev/characters?page=${page}&limit=${limit}`);
            const data = await response.json() as AllData;

            return data.results;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }

    static async findData(word: string) {
        try {
            const queryNames = [
                'name', 'region', 'vision', 'rarity', 'weapon'
            ];
            let result;
            for (let i = 0; i < queryNames.length; i++) {
                const query = queryNames[i];
                const response = await fetch(`https://gsi.fly.dev/characters/search?${query}=${word}`);
                const data = await response.json() as FindData;

                if(data.total_results > 0) {
                    result = data.results;
                    break
                }
            }
            return result;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }

    static async getFullInfo(id: number) {
        try {
            const response = await fetch(`https://gsi.fly.dev/characters/${id}`);
            const data = await response.json() as {result: CharacterFullInfo};

            return data.result;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
}
