import { useState, useEffect } from "react";
import "./App.css";

import icon from "./image/vm_icon.svg";

import { LogoBox } from "./components/LogoBox";
import { SearchBox } from "./components/SearchBox";
import { ResultBox } from "./components/ResultBox";

function App() {
    const [value, setValue] = useState("");
    const [search, setSearch] = useState([]);
    const [chose, setChose] = useState("");
    const [chosen, setChosen] = useState([]);
    const [display, setDisplay] = useState("");

    const BASE_URL = `https://omdbapi.com/?s=${value.replace(
        " ",
        "+"
    )}&page=1&apikey=ef5e205b`;

    window.addEventListener("click", (event) => {
        if (event.target.className !== "form-control") {
            setDisplay("hide-search-list");
        }
    });

    useEffect(() => {
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((data) => {
                setSearch(data.Search);
                fetch(
                    `https://www.omdbapi.com/?i=${chose}&plot=full&apikey=ef5e205b`
                )
                    .then((res) => res.json())
                    .then((data) => {
                        setChosen(data);
                    });
            });
    }, [chose, BASE_URL]);
    return (
        <>
            <div className="wrapper">
                <LogoBox icon={icon} />
                <SearchBox
                    value={value}
                    search={search}
                    setChose={setChose}
                    setDisplay={setDisplay}
                    display={display}
                    setValue={setValue}
                />

                <ResultBox chose={chose} chosen={chosen} />
            </div>
        </>
    );
}

export default App;
