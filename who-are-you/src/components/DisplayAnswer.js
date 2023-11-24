import React from "react";

import { green } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import { Paper } from "@mui/material";

function DisplayAnswer (props) {

    const {isTimeOver, answerState} = props;

    const displayIcon = () => {

        if (isTimeOver && answerState) {
            return (
                <CircleOutlinedIcon style={{fontSize:55 , color:green[500]}} />
            );
        } else if (isTimeOver && !answerState) {
            return (
                <ClearOutlinedIcon style={{fontSize:55, color:red[500]}} />
            );
        } else {
            return (<QuestionMarkOutlinedIcon style={{fontSize:55}}/>);
        }
    }

    return (
        <Paper>
            {displayIcon()}
        </Paper>
    );
}
export default DisplayAnswer;