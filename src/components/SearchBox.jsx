const SearchBox = ({
    setDisplay,
    setValue,
    setChose,
    display,
    search,
    value,
}) => {
    return (
        <>
            <div
                className="search-container"
                onClick={() => {
                    setDisplay("");
                }}
            >
                <div className="search-element">
                    <h3>Search Movie:</h3>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Movie Title ..."
                        id="movie-search-box"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />

                    <div className={"search-list " + display}>
                        {search &&
                            search.map((response) => (
                                <div
                                    key={response.imdbID}
                                    className="search-list-item"
                                    id={response.imdbID}
                                    onClick={(e) => {
                                        setChose(response.imdbID);
                                        setValue("");
                                    }}
                                >
                                    <div
                                        className="search-item-thumb"
                                        id={response.imdbID}
                                    >
                                        <img src={response.Poster} alt="back" />
                                    </div>
                                    <div className="search-item-info">
                                        <h3>{response.Title}</h3>
                                        <p>{response.Year}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export { SearchBox };
