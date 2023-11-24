import { Paper, TextField } from "@mui/material";
import React from "react";

const directoryPath = ["/images/person/", "/images/animal/", "/images/landmark/"]

function Picture(props){
    const {orderNum, selectedMenuIndex, selectedMenu} = props;

    console.log(selectedMenu[orderNum]);


    return (
        <Paper>
            {
                selectedMenu.length > 0 
                &&
                <img src={directoryPath[selectedMenuIndex]+selectedMenu[orderNum]+".webp"} height="500rem"></img>
            }
        </Paper>
    )
}

export default Picture;