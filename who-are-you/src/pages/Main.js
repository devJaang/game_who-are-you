import { Button, Container, Grid, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import CountdownWatch from "../components/CountdownWatch";
import DisplayAnswer from "../components/DisplayAnswer";
import InputAnswer from "../components/InputAnswer";
import ShowAnswer from "../components/ShowAnswer";
import TopMenuList from "../components/TopMenuList";
import Picture from "../components/Picture";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SelectSong from "../components/SelectSong";

const person_test = [
    "침착맨",
    "빠니보틀",
    "주우재"
];

const animal = ["원숭이", "염소", "올빼미", "개구리", "펭귄", "펠리컨", "도롱뇽", "두더지", "박쥐", "양"];

const landmark = [
    '63빌딩', '만리장성', '동궁과월지', '콜로세움', '이과수폭포', '불의정원', '성산일출봉', '자유의여신상', '공업탑', '치첸이트사', '남산서울타워',
    '우유니사막', '성심당', '안동하회마을', '스톤헨지', '우포늪', '모아이', '경포대', '앙코르와트', '빅벤', '감천문화마을', '피사의사탑', '83타워',
    '붉은요새', '강원랜드', '나이아가라폭포', '세종호수공원', '노이슈반슈타인성', '서울대', '천지연폭포', '경북북부교도소', '빅토리아폭포',
    '롯데월드타워', '석굴암', '마리나베이샌즈호텔', '미사리조정경기장', '사그라다파밀리아대성당', '양화대교', '젠네모스크', 'DDP', '오페라하우스', '마창대교', '하롱베이',
    '해동용궁사', '영남알프스', '트레비분수', '금문교', '전주한옥마을', '루브르박물관', '타지마할', '에펠탑', '광교호수공원', '마추픽추',
    '부르즈할리파', '태화강국가정원',
];
const person = [
    "김윤아", "정용화", "이경영", "사나", "시우민", "해린", "메시", "이홍기", '박해일', "카리나", '지연',
    '남규리', '기안84', '효린', '한승연', '최민식', '지코', '류현진', '강승윤', '가인', '정은지', '우지',
    '이대호', '박찬호', '조권', '우사인볼트', '청하', '박지성', '손석구', '택연', '류승룡', '규현', '박세리',
    '혜리', '강민경', '하정우', '태연', '화사', '이명박', '소연', '강다니엘', '마이클조던', '이강인', '김채원',
    '안정환', '예지', '문재인', '육성재', '미미', '유정', '황정민', '이미주', '지수', '유이', '조나단',
    '수지', '현아', '로버트다우니주니어', '한선화', '덱스', '슈카월드', '윤도현', '페이커', '엄지', '윤두준', '손흥민',
    '안유진', '소희', '김윤석', '산다라박', '슬기', '민호', "크리스탈", "솔지", "산들", '전지현', "태양"
];

const s = 3;
const ms = 99;

function Main() {
    const [time, setTime] = useState({ s: s, ms: ms });
    const [answerState, setAnswerState] = useState(false);
    const [isTimeOver, setIsTimeOver] = useState(false);
    const [inputAnswer, setInputAnswer] = useState("");
    const [answer, setAnswer] = useState("");
    const [orderNum, setOrderNum] = useState(0);
    const [selectedMenuIndex, setSelectedMenuIndex] = useState();
    const [selectedMenu, setSelectedMenu] = useState([]);

    useEffect(() => {
        /*setAnswer((answer)=>{
            return selectedMenu[orderNum];
        })*/
    }, [])

    useEffect(() => {
        if (selectedMenuIndex == 0) {
            setSelectedMenu((selectedMenu) => {
                return person;
            });
            setOrderNum((orderNum) => { return 0 });
        } else if (selectedMenuIndex == 1) {
            setSelectedMenu((selectedMenu) => {
                return animal;
            })
            setOrderNum((orderNum) => { return 0 });
        } else if (selectedMenuIndex == 2) {
            setSelectedMenu((selectedMenu) => {
                return landmark;
            })
            setOrderNum((orderNum) => { return 0 });
        } else if (selectedMenuIndex == 3) {
        }
    }, [selectedMenuIndex]);


    useEffect(() => {
        if (isTimeOver) {
            setAnswerState((answerState) => {
                return (answer === inputAnswer);
            })
        }
    }, [isTimeOver]);

    const handleChangeTextField = (e) => {
        setInputAnswer((inputAnswer) => {
            return e.target.value;
        });
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.nativeEvent.isComposing) {
            e.preventDefault();
            handleClickBackOrNextBtn(1);
        }
    }
    const handleTimeOver = (boolean) => {
        setIsTimeOver((isTimeOver) => {
            return (boolean);
        })
    }

    const handleClickBackOrNextBtn = (direction) => {
        if (orderNum === 0 && direction === -1) {
            setOrderNum((orderNum) => { return 0 });
        } else if (orderNum === selectedMenu.length - 1 && direction === 1) {
            setOrderNum((orderNum) => { return orderNum });
        } else {
            setInputAnswer((inputAnswer) => { return ""; })
            setAnswer((answer) => { return selectedMenu[orderNum + direction] });
            setOrderNum((orderNum) => { return orderNum + direction });
            setTime((time) => { return { s: s, ms: ms } })
            setIsTimeOver((isTimeOver) => { return false });
            setAnswerState((answerState) => { return false });
        }
    }

    return (
        <Container>
            <Grid container justifyContent="center" alignItems="center" style={{ border: "solid black 2px"}}>
                <Grid item xs={12}>
                    <TopMenuList selectedMenuIndex={selectedMenuIndex} setSelectedMenuIndex={setSelectedMenuIndex} />
                </Grid>
            </Grid>

            {(selectedMenu.length > 0 && selectedMenuIndex < 3) &&
                <React.Fragment>
                    <Grid container justifyContent="center" alignItems="center" style={{ border: "solid black 1px" }}>
                        <Grid item xs={2}>
                            <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={() => handleClickBackOrNextBtn(-1)}>
                                이전
                            </Button>
                        </Grid>
                        <Grid item xs={8}>
                            <CountdownWatch time={time} setTime={setTime} isTimeOver={isTimeOver} handleTimeOver={handleTimeOver}></CountdownWatch>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={() => handleClickBackOrNextBtn(1)}>
                                다음
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center" style={{ border: "solid black 1px" }}>
                        <Grid item style={{ backgroundColor: "green" }}>
                            <Picture orderNum={orderNum} selectedMenuIndex={selectedMenuIndex} selectedMenu={selectedMenu}></Picture>
                        </Grid>
                    </Grid>
                </React.Fragment>
            }

            {selectedMenuIndex == 3 &&
                <React.Fragment>
                    <SelectSong/>
                </React.Fragment>
            }

            {/* <Grid container style={{border : "solid blue 2px", backgroundColor:"green"}}>
                <Grid item xs={5}>
                    <InputAnswer 
                        inputAnswer={inputAnswer}
                        isTimeOver={isTimeOver}
                        handleChangeTextField={handleChangeTextField}
                        handleKeyDown={handleKeyDown}
                    />
                </Grid>
                
                <Grid item xs={2}>
                    <DisplayAnswer isTimeOver={isTimeOver} answerState={answerState}/>
                </Grid>
                
                <Grid item xs={5}>
                    <ShowAnswer answer={selectedMenu[orderNum]} isTimeOver={isTimeOver}/>
                </Grid>
            </Grid> */}

        </Container>
    );
}
export default Main;