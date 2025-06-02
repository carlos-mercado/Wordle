'use client';
import React from 'react';

function Cell({text, sendDataToParent, color})
{
    function handleClick(){
        sendDataToParent(text)
    }

    const cellStyle = {
        verticalAlign: "middle",
        height: "8.5vh",
        width: "8vh",
        color: "white",
        backgroundColor: color,
        display: "inline-block",
        justifyContent: "center", // horizontal center
        alignItems: "center", // vertical center
        borderRadius: "10px",
        margin: "5px",
        fontFamily: "Helvetica",
        fontSize: "25px",
        lineHeight: '8.25vh',
    };

    if (text == " " || text == undefined)
    {
        cellStyle.cursor = "default"
        return(
            <div style={cellStyle} onClick={() => {}}>
                {" "}
            </div>
        )
    }
    else
    {
        cellStyle.cursor = "pointer";
        return(
            <div style={cellStyle} onClick={handleClick}>
                {text}
            </div>
        );
    }

}



export default Cell;