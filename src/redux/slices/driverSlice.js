import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDrivers = createAsyncThunk(
    'driver/fetchDriversStatus',
    async () => {
        const { data } = await axios.get(
            'https://6a00bacc36fb6ad04de071d1.mockapi.io/drivers?sortBy=team_name&order=asc'
        );
        return data;
    }
)

const initialState = {
    items: [],
    status: 'loading' // 'loading' | 'success' | 'error'
}

const driverSlice = createSlice({
    name: 'driver',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDrivers.pending, (state) => {
                state.status = 'loading';
                console.log('Загрузка водителей...');
                state.items = [];
            })
            .addCase(fetchDrivers.fulfilled, (state, action) => {
                state.status = 'success';
                console.log('Водители успешно загружены');
                state.items = action.payload;
            })
            .addCase(fetchDrivers.rejected, (state) => {
                state.status = 'error';
                state.items = [];
                console.log('Ошибка при загрузке водителей');
            })
    }
})

export const {setItems} = driverSlice.actions
export default driverSlice.reducer
