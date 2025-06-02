import Cell from "./Cell"
import {useEffect, useState} from "react";

export default function Home() {
  const [words, setWord] = useState(["", "", "", "", ""]);
  const [idx, setIdx] = useState(0);
  const [colors, setColors] = useState(Array(5).fill(Array(5).fill("#3f3f40"))) //5x5 list of colors
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    fetch('/data/db.json')
      .then((res) => res.json())
      .then(json => {
        const rand = Math.floor(Math.random() * json.words.length);
        setAnswer(json.words[rand])
      })
  }, []);

  const targetWord = answer;
  console.log("TARGET WORD: " + targetWord)


  function handleClick(text)
  {
    if(words[idx].length == 5)
      return;
    
    const newWords = [...words];
    newWords[idx] = newWords[idx] + text;
    setWord(newWords);

    console.log(words);

  }

  function submit(word)
  {
    const newColors = colors.map(row => [...row])

    if(word == targetWord)
    {
      console.log("WORD GUESSED! WORDLE!")

      for(var i = 0; i < word.length; i++)   
        newColors[idx][i] = "green";

      alert("YOU WIN! WORDLE!")
      window.location.reload();
      return;
    }
    else
    {
      for(var i = 0; i < word.length; i++)
      {
        if(word[i] == targetWord[i]) //take care of all of the correct cells
          newColors[idx][i] = "green";
        else if(targetWord.includes(word[i]))
          newColors[idx][i] = "#ccb825";
      }


    }
    setColors(newColors);

    if(idx == 4)
    {
      alert("YOU LOSE!")
      window.location.reload();

    }
  }

  useEffect(() => {}, [colors]);
  useEffect(() => {
    function handleKeyDown(event) {
      //console.log("Key pressed:", event.key);
      if (/^[a-zA-Z]$/.test(event.key))
      {
        handleClick((event.key).toUpperCase());
      }
      else if (event.key === "Enter")
      {
        submit(words[idx]);
        setIdx(idx + 1)
      }
      else
      {
        if(words[idx] != "")
        {
          const newWords = [...words];
          newWords[idx] = newWords[idx].slice(0, -1);
          setWord(newWords);
        }
      }


    }
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };

  }, [words, idx]);

  const pageStyle = 
  {
    textAlign: 'center',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "Helvetica",
    color: "white"
  };
  
  return (
    <div style={pageStyle}>
      <h1>WORDLE</h1>
      <div>
        <div>
          <Cell text={words[0][0]} sendDataToParent={handleClick} color={colors[0][0]}></Cell>
          <Cell text={words[0][1]} sendDataToParent={handleClick} color={colors[0][1]}></Cell>
          <Cell text={words[0][2]} sendDataToParent={handleClick} color={colors[0][2]}></Cell>
          <Cell text={words[0][3]} sendDataToParent={handleClick} color={colors[0][3]}></Cell>
          <Cell text={words[0][4]} sendDataToParent={handleClick} color={colors[0][4]}></Cell>
        </div>
        <div>
          <Cell text={words[1][0]} sendDataToParent={handleClick} color={colors[1][0]}></Cell>
          <Cell text={words[1][1]} sendDataToParent={handleClick} color={colors[1][1]}></Cell>
          <Cell text={words[1][2]} sendDataToParent={handleClick} color={colors[1][2]}></Cell>
          <Cell text={words[1][3]} sendDataToParent={handleClick} color={colors[1][3]}></Cell>
          <Cell text={words[1][4]} sendDataToParent={handleClick} color={colors[1][4]}></Cell>
        </div>
        <div>
          <Cell text={words[2][0]} sendDataToParent={handleClick} color={colors[2][0]}></Cell>
          <Cell text={words[2][1]} sendDataToParent={handleClick} color={colors[2][1]}></Cell>
          <Cell text={words[2][2]} sendDataToParent={handleClick} color={colors[2][2]}></Cell>
          <Cell text={words[2][3]} sendDataToParent={handleClick} color={colors[2][3]}></Cell>
          <Cell text={words[2][4]} sendDataToParent={handleClick} color={colors[2][4]}></Cell>
        </div>
        <div>
          <Cell text={words[3][0]} sendDataToParent={handleClick} color={colors[3][0]}></Cell>
          <Cell text={words[3][1]} sendDataToParent={handleClick} color={colors[3][1]}></Cell>
          <Cell text={words[3][2]} sendDataToParent={handleClick} color={colors[3][2]}></Cell>
          <Cell text={words[3][3]} sendDataToParent={handleClick} color={colors[3][3]}></Cell>
          <Cell text={words[3][4]} sendDataToParent={handleClick} color={colors[3][4]}></Cell>
        </div>
        <div>
          <Cell text={words[4][0]} sendDataToParent={handleClick} color={colors[4][0]}></Cell>
          <Cell text={words[4][1]} sendDataToParent={handleClick} color={colors[4][1]}></Cell>
          <Cell text={words[4][2]} sendDataToParent={handleClick} color={colors[4][2]}></Cell>
          <Cell text={words[4][3]} sendDataToParent={handleClick} color={colors[4][3]}></Cell>
          <Cell text={words[4][4]} sendDataToParent={handleClick} color={colors[4][4]}></Cell>
        </div>
        <br></br>
        <div>
          <Cell text="Q" sendDataToParent={handleClick} color="#3f3f40"></Cell>
          <Cell text="W" sendDataToParent={handleClick} color="#3f3f40"></Cell>
          <Cell text="E" sendDataToParent={handleClick} color="#3f3f40"></Cell>
          <Cell text="R" sendDataToParent={handleClick} color="#3f3f40"></Cell>
          <Cell text="T" sendDataToParent={handleClick} color="#3f3f40"></Cell>
          <Cell text="Y" sendDataToParent={handleClick} color="#3f3f40"></Cell>
          <Cell text="U" sendDataToParent={handleClick} color="#3f3f40"></Cell>
          <Cell text="I" sendDataToParent={handleClick} color="#3f3f40"></Cell>
          <Cell text="O" sendDataToParent={handleClick} color="#3f3f40"></Cell>
          <Cell text="P" sendDataToParent={handleClick} color="#3f3f40"></Cell>
        </div>
        <div>
          <Cell text="A" sendDataToParent={handleClick}color="#3f3f40"></Cell>
          <Cell text="S" sendDataToParent={handleClick}color="#3f3f40"></Cell>
          <Cell text="D" sendDataToParent={handleClick}color="#3f3f40"></Cell>
          <Cell text="F" sendDataToParent={handleClick}color="#3f3f40"></Cell>
          <Cell text="G" sendDataToParent={handleClick}color="#3f3f40"></Cell>
          <Cell text="H" sendDataToParent={handleClick}color="#3f3f40"></Cell>
          <Cell text="J" sendDataToParent={handleClick}color="#3f3f40"></Cell>
          <Cell text="K" sendDataToParent={handleClick}color="#3f3f40"></Cell>
          <Cell text="L" sendDataToParent={handleClick}color="#3f3f40"></Cell>
        <div>
          <Cell text="Z" sendDataToParent={handleClick} color="#3f3f40"></Cell>
          <Cell text="X" sendDataToParent={handleClick}color="#3f3f40"></Cell>
          <Cell text="C" sendDataToParent={handleClick}color="#3f3f40"></Cell>
          <Cell text="V" sendDataToParent={handleClick}color="#3f3f40"></Cell>
          <Cell text="B" sendDataToParent={handleClick}color="#3f3f40"></Cell>
          <Cell text="N" sendDataToParent={handleClick}color="#3f3f40"></Cell>
          <Cell text="M" sendDataToParent={handleClick}color="#3f3f40"></Cell>
        </div>
      </div>
    </div>
  </div>
  );
}
