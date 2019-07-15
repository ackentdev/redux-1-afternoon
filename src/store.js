import { createStore } from "redux";

const initialState = {
    name: '',
    category: '',
    authorLast: '',
    authorFirst: '',
    ingredients: [],
    instructions: [],
    recipes: []
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_AUTHOR_LAST = "UPDATE_AUTHOR_LAST";
export const UPDATE_AUTHOR_FIRST = "UPDATE_AUTHOR_FIRST";
export const ADD_INGREDIENT = "UPDATE_INGREDIENT";
export const ADD_INSTRUCTION = "ADD_INSTRUCTION";
export const ADD_RECIPE = "ADD_RECIPE";
export const CLEAR_INPUTS = "CLEAR_INPUTS";
export const DELETE_CARD = "DELETE_CARD";

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_NAME: 
            return { ...state, name: payload };
        case UPDATE_CATEGORY:
            return { ...state, category: payload };
        case UPDATE_AUTHOR_LAST:
            return { ...state, authorLast: payload };
        case UPDATE_AUTHOR_FIRST:
            return { ...state, authorFirst: payload };
        case ADD_INGREDIENT:
            return { ...state, ingredients: [...state.ingredients, payload]};
        case ADD_INSTRUCTION:
            return { ...state, instructions: [...state.instructions, payload]};
        case ADD_RECIPE:
            const { name, category, authorFirst, authorLast, ingredients, instructions} = state;
            const recipe = { name, category, authorFirst, authorLast, ingredients, instructions};
            const newRecipes = [...state.recipes, recipe];
            return { ...state, recipes: newRecipes };
        case CLEAR_INPUTS:
            return {...state, name: '', category: '', authorFirst: '', authorLast: '', ingredients: [], instructions: []}
        case DELETE_CARD:
            return {...state, recipes: payload }
        default:
            return state;
    }
};

export default createStore(reducer);