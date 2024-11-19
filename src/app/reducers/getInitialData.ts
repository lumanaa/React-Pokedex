import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pokemonsRoute } from "../../scss/utils/constants";

export const getInitialData = createAsyncThunk("pokemon/initialData", async () => {
    try {
        const { data } = await axios.get(pokemonsRoute);
        return data.results;
    } catch (err) {
        console.log(err);
    }
})