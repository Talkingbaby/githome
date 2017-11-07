import React from 'react';

const SearchBar = (props) => {
    return (
        <form className="form-inline" onSubmit={props.handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    value={props.search}
                    onChange={props.handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default SearchBar;