//1.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//2.
import axios from "axios";

//3.
const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

//6. membuat method untuk melakukan reques ke API backend yaitu login
//6.1 async membawa data user dan thunkAPI berguna untuk error handling,
export const LoginUser = createAsyncThunk("user/LoginUser",async(user, thunkAPI) => {
    try {
        const response = await axios.post('http://localhost:5000/login', {
            email: user.email,
            paddword: user.password
        });
        return response.data 
    } catch (error) {
        if(error.response){
             //7.cek respon errornya dan ambil msg dari backend
            const message = error.response.data.msg
            return thunkAPI.rejectWithValue(message);
        }
    }
});


//4.
export const authSlice = createSlice({
    name: "auth",
    initialState,
    //5. pada reducer membuat sebuah method berfungsi mereset statenya yaitu isi const initialState:
    //yang di reset adalah initialState nya lagi, nilainya akan di kembalikan ke statenya
    reducers:{
        reset: (state) => initialState
    },
    //8.
    extraReducers:(builder) => {
        builder.addCase(LoginUser.pending,(state) =>{
            //9. disaat pending maka set loadingnya menjadi true
            state.isLoading = true;
        });
        //10.jika berhasil maka ambil statenya dan action
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            //11. jika berhasil set loadingnya menjadi false
            state.isLoading = false;
            state.isSuccess = true;
            //12. masukan state usernya dan ambil datanya dari action.payload, 
            //karena kita punya data di dlm payloadnya yg di return dr return response.data 
            state.user = action.payload;
        });
        //13. disaat terjadi error, rejected artinya terdapat error, 
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});

//14. export function reset sebagai action
export const {reset} = authSlice.actions;

export default authSlice.reducer;