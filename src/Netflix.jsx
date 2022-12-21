import React from "react";
import Cards from "./Cards";
import SD from './SD';
const fav = "netflix";

function Netflix() {
    return (
        <Cards
            image={SD[1].image}
            category={SD[1].category}
            title={SD[1].title}
            link={SD[1].link}
        />
    );
}
export default Netflix;