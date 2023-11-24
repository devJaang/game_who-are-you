import { FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";


function TopMenuList(props) {

    const {selectedMenuIndex, setSelectedMenuIndex} = props;

    const handleChangeRadio = (e) => {
        setSelectedMenuIndex(e.target.value);
    }

    return (
        <Paper /*style={{ backgroundColor: "blue" }}*/>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">주제</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={(e)=>handleChangeRadio(e)}
                >
                    <FormControlLabel value="1" control={<Radio />} label="동물(몸풀기10개)" />
                    <FormControlLabel value="0" control={<Radio />} label="인물(77개 예명or본명)"/>
                    <FormControlLabel value="2" control={<Radio />} label="랜드마크(건물,장소 등 55개)" />
                    {/*<FormControlLabel value="3" control={<Radio />} label="노래맞추기(하:노래제목 | 상:가수+노래제목)" />*/}
                </RadioGroup>
            </FormControl>
        </Paper>
    );

}
export default TopMenuList;