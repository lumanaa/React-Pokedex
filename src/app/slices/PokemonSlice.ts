import { createSlice } from "@reduxjs/toolkit";
import { PokemonTypeInitialState } from "../../scss/utils/Types";
import { getInitialData } from "../reducers/getInitialData";

const initialState: PokemonTypeInitialState = {
    allPokemon: undefined,
};

export const PokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getInitialData.fulfilled, (state, action) => {
            state.allPokemon = action.payload
        })
    },
})

export const { } = PokemonSlice.actions;