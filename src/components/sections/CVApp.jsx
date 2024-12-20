export default function CVApp({person}) {

    const separator = {
        border: "1px solid black",
        width: "90%",
        margin: "0 0 0 20px"
    }

    return (
        <section className ="cv-section">
            <div className="container large-container">
                <div className="cv-basic-info-section">
                    <label label="cv-name" className="basic-info-label">
                        <div className="basic-info-output cv-name-output">CV GENERATOR</div>
                    </label>
                    <div className="cv-basic-info-grid">
                        <label label="cv-email" className="basic-info-label">
                            <div className="basic-info-output cv-email-output"></div>
                        </label>
                        <label label="cv-number" className="basic-info-label">
                            <div className="basic-info-output cv-number-output"></div>
                        </label>
                        <label label="cv-address" className="basic-info-label">
                            <div className="basic-info-output cv-address-output"></div>
                        </label>
                    </div>
                </div>
                <div className="cv-education-section">
                    <h2 className="section-title">Education</h2>
                    <div style={separator}></div>
                    <div className="cv-flex-container">
                        <div>
                            <label label="cv-degree">
                                <div className="cv-degree"></div>
                            </label>
                        </div>
                        <div>
                            <label label="cv-uni-dates">
                                <div className="cv-uni-dates"></div>
                            </label>
                        </div>
                    </div>
                    <label label="cv-university">
                        <div className="cv-university"></div>
                    </label>
                </div>
                <div className="cv-experience-section">
                    <h2 className="section-title">Experience</h2>
                    <div style={separator}></div>
                    <div className="cv-flex-container">
                        <label label="cv-role">
                            <div className="cv-role"></div>
                        </label>
                        <label label="cv-role-dates">
                            <div className="cv-role-dates"></div>
                        </label>
                    </div>
                    <label label="cv-company">
                        <div className="cv-company"></div>
                    </label>
                    <label label="cv-role-description">
                        <div className="cv-role-description"></div>
                    </label>
                </div>
            </div>
        </section>
    )
}