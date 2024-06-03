import { API_KEY } from "@env"

const BASE_URL = "https://api.api-ninjas.com/v1/exercises";
const MUSCLES = [
    'abdominals',
    'abductors',
    'adductors',
    'biceps',
    'calves',
    'chest',
    'forearms',
    'glutes',
    'hamstrings',
    'lats',
    'lower_back',
    'middle_back',
    'neck',
    'quadriceps',
    'traps',
    'triceps',
];

const TYPES = ['cardio', 'olympic_weightlifting', 'plyometrics', 'power_lift', 'strength', 'stretching', 'strongman'];

const DIFFICULTIES = ['beginner', 'intermediate', 'expert'];

const createUrlFromParams = (searchType, query) => {
    switch (searchType) {
        case 'name':
            return `${BASE_URL}?name=${query}`;
        case "muscle":
            return `${BASE_URL}?muscle=${query}`;
        case "type":
            return `${BASE_URL}?type=${query}`;
        case "difficulty":
            return `${BASE_URL}?difficulty=${query}`;
        default:
            return BASE_URL;
    }
}

const fetchExercises = async (searchType, query) => {
    const url = createUrlFromParams(searchType, query);
    const response = await fetch(
        url,
        {
            headers: {
                "X-Api-Key": API_KEY,
            },
        }
    );

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.exercises;
};

export { fetchExercises, MUSCLES, TYPES, DIFFICULTIES };