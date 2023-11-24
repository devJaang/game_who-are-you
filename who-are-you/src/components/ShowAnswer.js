import { Paper, TextField } from "@mui/material";
import React from "react";


function ShowAnswer(props){

    const {answer, isTimeOver} = props;

    return (
        <Paper>
            <TextField 
                id="outlined-basic"
                label="" 
                variant="outlined"
                disabled={true}
                value={isTimeOver ? answer : "정답" }
            />
        </Paper>
    );
}

export default ShowAnswer;