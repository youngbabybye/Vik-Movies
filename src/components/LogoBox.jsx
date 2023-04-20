const LogoBox = ({ icon }) => {
    return (
        <>
            <div className="logo">
                <div className="container">
                    <div className="logo_icon">
                        <img className="icon" src={icon} alt="icon" />
                        <p>
                            <span>Vik</span> Movies
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export { LogoBox };
