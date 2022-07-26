import React from "react";
import FilterBTN from "../../Filter/FilterBTN";

const Types = ({ updateType, updatePageNumber }) => {
    let types = [
        "Planet",
        "Dimension",
        "Cluster",
        "Space station",
        "Microverse",
        "TV",
        "Resort",
        "Fantasy town",
        "Dream",
        "unknown",
        "Game",
        "Menagerie",
        "Daycare",
        "Dwarf planet (Celestial Dwarf)",
        "Miniverse",
        "Teenyverse",
        "Box",
        "Spacecraft",
        "Artificially generated world",
        "Machine",
        "Arcade",
        "Quadrant",
        "Quasar",
        "Mount",
        "Liquid",
        "Convention",
        "Woods",
        "Diegesis",
        "Non-Diegetic Alternative Reality",
        "Nightmare",
        "Asteroid",
        "Acid Plant",
        "Reality",
        "Death Star",
        "Base",
        "Elemental Rings",
        "Human",
        "Space",
        "Hell",
        "Police Department",
        "Consciousnes",
        "Country",
        "Consciousness",
        "Memory"
    ];

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                >
                    Tipo
                </button>
            </h2>
            <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {types.map((items, index) => {
                        return (
                            <FilterBTN
                                name="type"
                                index={index}
                                key={index}
                                updatePageNumber={updatePageNumber}
                                task={updateType}
                                input={items}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Types;
