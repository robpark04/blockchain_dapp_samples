import React from 'react';
import "../../styles/css/spinner.css";

const Spinner = () => {
    return (
        <div className="loaders">
            <div className="loader">
                <div className="loader-inner ball-spin-fade-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <span>
                Please open MetaMask, then select Activities and Approve requests to continue.
            </span>
        </div>
    );
};

export default Spinner;
