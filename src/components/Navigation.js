import React from "react";

function Navigation(props) {
    const { currentPage, setCurrentPage } = props;

    return (
        <nav>
            <ul className="flex-row">
                <li className={currentPage === "about" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentPage("about")}>About</span>
                </li>
                <li className={currentPage === "about" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentPage("project")}>Project</span>
                </li>
                <li className={currentPage === "about" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentPage("contact")}>Contact</span>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;