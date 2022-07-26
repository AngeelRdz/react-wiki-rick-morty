import React, { useEffect, useState } from "react";
import CardLocation from "../components/CardLocationAll/CardLocationAll";
import Pagination from "../components/Pagination/Pagination";
import Filter from "../components/FilterLocationAll/Filter";

const Location = () => {
    let [pageNumber, updatePageNumber] = useState(1);
    let [fetchedData, updateFetchedData] = useState([]);
    let [type, updateType] = useState("");
    let { info, results } = fetchedData;

    let api = `https://rickandmortyapi.com/api/location?page=${pageNumber}&type=${type}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            console.log('data location all', data);

            updateFetchedData(data);
        })();
    }, [api]);  

    return (
        <div className="App">
            <h1 className="text-center mb-3">Locations Alls</h1>
            <h5 className="text-center">
                Total de locaciones: {info ? info.count : 'Ninguno'}
            </h5>
            <div className="container">
                <div className="row">
                    <Filter
                        updateType={updateType}
                        updatePageNumber={updatePageNumber}
                    />
                    <div className="col-lg-8 col-12">
                        <div className="row">
                            <CardLocation results={results} />
                        </div>
                    </div>
                </div>
            </div>
            <Pagination
                info={info}
                pageNumber={pageNumber}
                updatePageNumber={updatePageNumber}
            />
        </div>
    );
};

export default Location;
