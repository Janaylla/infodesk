import React from "react";
import { DivSearch } from '../../GlobalStyle'
import Button from '../Button/Button'
const Search = () => {
    // Room, Studio, Apartment, Price, Place e Description
    return (
        <DivSearch>
            <form>
                <h4>Topic</h4>
                <div className="checkbox">
                <label>
                    <input type="checkbox" />
                    Room
                </label>
                <label>
                    <input type="checkbox" />
                    Studio
                </label>
                <label>
                    <input type="checkbox" />
                    Apartment
                </label>
                </div>
                <h4>Date</h4>
                <input type="date"/>
                <Button>
                    Filter
                </Button>
            </form>
        </DivSearch>
    )
};

export default Search;
