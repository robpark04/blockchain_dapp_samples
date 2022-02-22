import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import UnlockModal from "./Unlock/unlockModal";

import {
    CONNECTION_CONNECTED,
    CONNECTION_DISCONNECTED,
    CONFIGURE,
} from "../constants/constants";
import { dispatcher, emitter } from "../utils";
import { useAppSelector } from "../hooks/hooks";
import { getNet } from "../stores/netReducer";

const Navbar = () => {
    const net = useAppSelector(getNet);

    const [showAddress, setShowAddress] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);

    const [account, setAccount] = React.useState(net.account);

    function addressString(address) {
        return address.substring(0, 6) +
            "..." +
            address.substring(
                address.length - 4,
                address.length
            );
    }

    useEffect(() => {
        emitter.on(CONNECTION_CONNECTED, connectionConnected);
        emitter.on(CONNECTION_DISCONNECTED, connectionDisconnected);

        return () => {
            emitter.removeListener(CONNECTION_CONNECTED, connectionConnected);
            emitter.removeListener(
                CONNECTION_DISCONNECTED,
                connectionDisconnected
            );
        };
    }, []);

    function connectionConnected() {
        setAccount(net.account);
        dispatcher.dispatch({ type: CONFIGURE, content: {} });
    }

    function connectionDisconnected() {
    }

    function addressClicked() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }

    function renderModal() {
        return <UnlockModal closeModal={closeModal} modalOpen={showModal} />;
    }

    return (
        <nav className="navbar py-2 navbar-expand navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <Link
                className="navbar-brand ml-4 d-flex align-items-center justify-content-center"
                to="/"
            >
                Token Exchange
            </Link>
            <button
                id="sidebarToggleTop"
                style={{ display: "none" }}
                className="btn btn-link rounded-circle mx-3"
            >
                <i className="fas fa-bars"></i>
            </button>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    {!net.account.address && (
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            onClick={() => {
                                addressClicked();
                            }}
                        >
                            <span className="d-none d-lg-inline profiler-name small">
                                Connect your wallet
                            </span>
                        </a>
                    )}
                    {net.account.address && (
                        <>
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                onClick={() => {
                                    addressClicked();
                                }}
                            >
                                <span className="d-none d-lg-inline profiler-name small">
                                    <span className="online"></span>
                                    {addressString(net.account.address)}
                                </span>
                            </a>
                            {showAddress ? (
                                <div
                                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in profile-set show"
                                    aria-labelledby="userDropdown"
                                >
                                    <a className="nav-link" href="#">
                                        {addressString(net.account.address)}
                                        <h5>Mainnet Etherium Network</h5>
                                    </a>
                                    <a
                                        className="nav-link text-center"
                                        href="#"
                                    >
                                        Disconnect
                                    </a>
                                </div>
                            ) : null}
                        </>
                    )}
                </li>
            </ul>
            {showModal && renderModal()}
        </nav>
    );
};

export default Navbar;
