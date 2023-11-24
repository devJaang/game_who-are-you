import { Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function CountdownWatch(props) {
    const {isTimeOver, handleTimeOver, time, setTime } = props;

    useEffect(() => {
        const countdown = setInterval(() => {
            setTime((time) => {
                if (time.s >= 0 && time.ms > 0) {
                    return Object.assign({}, { s: time.s, ms: time.ms-1 })
                } else  if (time.s > 0 && time.ms == 0) {
                    return Object.assign({}, { s: time.s-1, ms: 99 })
                } else {
                    clearInterval(countdown);
                    return Object.assign({}, { s: 0, ms: time.ms })
                }
            });
        }, 10);
        return () => clearInterval(countdown)
    }, [isTimeOver]);

    useEffect(()=>{
        if (time.s ===0 && time.ms===0) {
            handleTimeOver(true);
        }
    }, [time]);
    
    return (
        <Paper style={{backgroundColor: (time.s ===0 && time.ms===0) ? "red" : "" }}>
            <Typography fontSize={100}>
                {Number(time.s)}{"."}{Number(time.ms)}
            </Typography>
        </Paper>
    );
}

export default CountdownWatch;