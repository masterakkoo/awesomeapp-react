import React from "react";
import Cards from "./Cards";
import SD from './SD';
const fav = "amazon";

function Amazon() {
    return (
        <Cards
            image={SD[2].image}
            category={SD[2].category}
            title={SD[2].title}
            link={SD[2].link}
        />
    );
}
export default Amazon;