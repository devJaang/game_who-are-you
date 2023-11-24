import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from "react";

function createData(years, one, two, three, four, five, six, seven, eight, nine, ten) {
    return { years, one, two, three, four, five, six, seven, eight, nine, ten};
}

const rows = [
    createData('00~04년도', 
        'https://music.youtube.com/watch?v=12W5qcG2vXw&feature=shared', 
        'https://music.youtube.com/watch?v=gdj6a0hv0Uk&feature=shared', 
        'https://music.youtube.com/watch?v=0bHHPkJIxiU&feature=shared', 
        'https://music.youtube.com/watch?v=tKv1E7ITA3c&feature=shared',
        'https://music.youtube.com/watch?v=u86tEqfkN4E&feature=shared',
        'https://music.youtube.com/watch?v=NW3v0kCU_CU&feature=shared',
        'https://music.youtube.com/watch?v=2uptloFIgs0&feature=shared',
        'https://music.youtube.com/watch?v=TiALIe_EtwU&feature=shared',
        'https://music.youtube.com/watch?v=NsRHHcTJYUs&feature=shared',
        'https://music.youtube.com/watch?v=QvuhHKLnkE4&feature=shared',
    ),
    createData('05~09년도', 
        'https://music.youtube.com/watch?v=G5hbOrbfSRY&feature=shared', 
        'https://music.youtube.com/watch?v=B52BXG5-NhM&feature=shared', 
        'https://music.youtube.com/watch?v=R7Oo7UTHFHI&feature=shared', 
        'https://music.youtube.com/watch?v=agL-oiDlyYo&feature=shared',
        'https://music.youtube.com/watch?v=qizghQs4K6E&feature=shared',
        'https://music.youtube.com/watch?v=5oU-SkWXa4A&feature=shared',
        'https://music.youtube.com/watch?v=DuLNOlI-LYE&feature=shared',
        'https://music.youtube.com/watch?v=ly-CSYDxIo4&feature=shared',
        'https://music.youtube.com/watch?v=y_UsKW4IBoo&feature=shared',
        'https://music.youtube.com/watch?v=7c3wuDMuCkk&feature=shared',
    ),
    createData('10~14년도', 
        'https://music.youtube.com/watch?v=sdtspSYyQXs&feature=shared', 
        'https://music.youtube.com/watch?v=NY47mqz4yCg&feature=shared', 
        'https://music.youtube.com/watch?v=kLka40yzGWQ&feature=shared', 
        'https://music.youtube.com/watch?v=VX7w5fwdMkI&feature=shared',
        'https://music.youtube.com/watch?v=ZtcM3KhgF-s&feature=shared',
        'https://music.youtube.com/watch?v=KdKucPl2lXA&feature=shared',
        'https://music.youtube.com/watch?v=X9xPDB4v11A&feature=shared',
        'https://music.youtube.com/watch?v=4wV0NEegBRA&feature=shared',
        'https://music.youtube.com/watch?v=uyWdED9FvBM&feature=shared',
        'https://music.youtube.com/watch?v=aeBud69nWb8&feature=shared',
    ),
    createData('15~19년도', 
        'https://music.youtube.com/watch?v=VjYO5fdmWhk&feature=shared', 
        'https://music.youtube.com/watch?v=prWVZFgZ3Zc&feature=shared', 
        'https://music.youtube.com/watch?v=oDOVv8qCREk&feature=shared',
        'https://music.youtube.com/watch?v=PyyT5tHbOLw&feature=shared',
        'https://music.youtube.com/watch?v=Q-erYa8cwnc&feature=shared',

        'https://music.youtube.com/watch?v=VjYO5fdmWhk&feature=shared',
        'https://music.youtube.com/watch?v=ibVIYayLHeU&feature=shared',
        'https://music.youtube.com/watch?v=RRwLiAGZfc0&feature=shared',
        'https://music.youtube.com/watch?v=U9TauN294Gc&feature=shared',
        'https://music.youtube.com/watch?v=fVHsD1lED84&feature=shared',
    ),
    createData('20~23년도', 
        'https://music.youtube.com/watch?v=GOtF5_Ow0_Y&feature=shared', 
        'https://music.youtube.com/watch?v=es6bbfAjk3I&feature=shared', 
        'https://music.youtube.com/watch?v=hh5GKVa8VtM&feature=shared', 
        'https://music.youtube.com/watch?v=dUeqX--Gesc&feature=shared',
        'https://music.youtube.com/watch?v=2Kff0U8w-aU&feature=shared',
        'https://music.youtube.com/watch?v=8mA6jIeojnk&feature=shared',
        'https://music.youtube.com/watch?v=5_Esp-dXcOA&feature=shared',
        'https://music.youtube.com/watch?v=eS-NAO3zmn4&feature=shared',
        'https://music.youtube.com/watch?v=58IEh6YkuzQ&feature=shared',
        'https://music.youtube.com/watch?v=l29XdcD2gTo&feature=shared',
    ),
];

function SelectSong(props) {

    const handleChangeCheckBox = (url) => {
        console.log(url);
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">연도|난이도</TableCell>
                        <TableCell align="center">하1</TableCell>
                        <TableCell align="center">하2</TableCell>
                        <TableCell align="center">하3</TableCell>
                        <TableCell align="center">하4</TableCell>
                        <TableCell align="center">하5</TableCell>
                        <TableCell align="center">상1</TableCell>
                        <TableCell align="center">상2</TableCell>
                        <TableCell align="center">상3</TableCell>
                        <TableCell align="center">상4</TableCell>
                        <TableCell align="center">상5</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row,idx) => (
                        <TableRow
                            key={idx}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center" component="th" scope="row">{row.years}</TableCell>
                            <TableCell align="center"><Checkbox onChange={(e)=>handleChangeCheckBox(row.one)}/></TableCell>
                            <TableCell align="center"><Checkbox onChange={(e)=>handleChangeCheckBox(row.two)}/></TableCell>
                            <TableCell align="center"><Checkbox onChange={(e)=>handleChangeCheckBox(row.three)}/></TableCell>
                            <TableCell align="center"><Checkbox onChange={(e)=>handleChangeCheckBox(row.four)}/></TableCell>
                            <TableCell align="center"><Checkbox onChange={(e)=>handleChangeCheckBox(row.five)}/></TableCell>
                            <TableCell align="center"><Checkbox onChange={(e)=>handleChangeCheckBox(row.six)}/></TableCell>
                            <TableCell align="center"><Checkbox onChange={(e)=>handleChangeCheckBox(row.seven)}/></TableCell>
                            <TableCell align="center"><Checkbox onChange={(e)=>handleChangeCheckBox(row.eight)}/></TableCell>
                            <TableCell align="center"><Checkbox onChange={(e)=>handleChangeCheckBox(row.nine)}/></TableCell>
                            <TableCell align="center"><Checkbox onChange={(e)=>handleChangeCheckBox(row.ten)}/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SelectSong;