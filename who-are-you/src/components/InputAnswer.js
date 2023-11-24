import { Grid, Paper, TextField } from "@mui/material";
import React from "react";


function InputAnswer(props){
    const {inputAnswer, isTimeOver, handleChangeTextField, handleKeyDown} = props;

    
    return (
            <Paper>
                <TextField 
                    id="outlined-basic"
                    label="정답 입력" 
                    variant="outlined"
                    autoComplete="off"
                    value={inputAnswer}
                    autoFocus={!isTimeOver}
                    focused={true}
                    onKeyDown={(e)=>handleKeyDown(e)}
                    onChange={(e)=>handleChangeTextField(e)}
                />
            </Paper>
    );
}

export default InputAnswer;