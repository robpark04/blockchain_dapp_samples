import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import UnlockModal from "./Unlock/unlockModal.jsx";

import {
    CONNECTION_CONNECTED,
    CONNECTION_DISCONNECTED,
    CONFIGURE,
} from "../constants/constants.jsx";
import { dispatcher, emitter } from "../utils";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getNet } from "../stores/netSlice";

const Navbar = () => {
    const net = useAppSelector(getNet);

    const [showAddress, setShowAddress] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);

    const [account, setAccount] = React.useState(net.account);
    const [address, setAddress] = React.useState(null);

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

    useEffect(() => {
        let address = null;
        if (account && account.address) {
            address =
                account.address.substring(0, 6) +
                "..." +
                account.address.substring(
                    account.address.length - 4,
                    account.address.length
                );
        }
        setAddress(address);
    }, [account]);

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
        <nav className="navbar navbar-expand navbar-light bg-customdark topbar mb-4 static-top shadow navbar-default">
            <Link
                className="sidebar-brand d-flex align-items-center justify-content-center"
                to="/"
            >
                Keyko Color-Token
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
                    {!address && (
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
                    {address && (
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
                                    {address}
                                </span>
                            </a>
                            {showAddress ? (
                                <div
                                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in profile-set show"
                                    aria-labelledby="userDropdown"
                                >
                                    <a className="nav-link" href="#">
                                        {address}
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
