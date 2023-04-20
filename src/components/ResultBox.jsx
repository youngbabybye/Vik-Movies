const ResultBox = ({ chose, chosen }) => {
    return (
        <>
            <div className="container">
                {chose.length !== 0 ? (
                    <div className="result-container">
                        <div className="result-grid" id="result-grid">
                            <div className="movie-poster">
                                <img src={chosen.Poster} alt="poster" />
                            </div>
                            <div className="movie-info">
                                <h3 className="movie-title">{chosen.Title}</h3>
                                <ul className="movie-misc-info">
                                    <li className="year">
                                        Year: {chosen.Year ?? "2010"}
                                    </li>
                                    <li className="rated">
                                        Ratings: {chosen.Rated}
                                    </li>
                                    <li className="released">
                                        Released: {chosen.Released}
                                    </li>
                                </ul>
                                <p className="genre">
                                    <b>Genre:</b> {chosen.Genre}
                                </p>
                                <p className="writer">
                                    <b>Writer:</b> {chosen.Writer}
                                </p>
                                <p className="actors">
                                    <b>Actors:</b> {chosen.Actors}
                                </p>

                                <p className="plot">
                                    <b>Plot:</b> {chosen.Plot}
                                </p>
                                <p className="language">
                                    <b>Language:</b> {chosen.Language}
                                </p>
                                <p className="awards">
                                    <b>
                                        <i className="fas fa-award"></i>
                                    </b>
                                    {chosen.Awards}
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="default">
                        Welcome to <span>Vik Movies</span> - <br /> movie
                        catalog based on <span>OMDb API</span>.{" "}
                    </p>
                )}
            </div>
        </>
    );
};

export { ResultBox };
