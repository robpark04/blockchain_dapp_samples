import React, { useEffect } from "react";
import { ModalProvider } from "@area2k/use-modal";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Authenticated from "./routes/Authenticated";
import Explorer from "./routes/Explorer/index";
import MyTokens from "./routes/Explorer/mytokens";

import "./styles/css/app.css";

import { injected } from "./stores/connectors.jsx";
import { CONNECTION_CONNECTED } from "./constants/constants.jsx";
import { setAccount, setWeb3Context, getNet } from './stores/netSlice';
import Web3 from "web3";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { emitter } from "./utils";

const App = () => {
    const net = useAppSelector(getNet);
    const dispatch = useAppDispatch();
    
    function updateAccount() {
        window.ethereum.on("accountsChanged", function (accounts) {
            dispatch(setAccount({ address: accounts[0] }));

            const web3context = net.web3context;
            if (web3context) {
                emitter.emit(CONNECTION_CONNECTED);
            }
        });
    }

    useEffect(() => {
        injected.isAuthorized().then((isAuthorized) => {
            console.log("isAuthorized", isAuthorized);
            if (isAuthorized) {
                injected
                    .activate()
                    .then((a) => {
                        dispatch(setAccount({ address: a.account }));
                        dispatch(setWeb3Context({
                            library: { provider: a.provider },
                            connector: injected,
                        }));
                        emitter.emit(CONNECTION_CONNECTED);
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            } else {
            }
        });

        if (window.ethereum) {
            updateAccount();
        } else {
            if (typeof web3 !== "undefined") {
                if (web3.currentProvider) {
                    if (Web3.currentProvider.isMetaMask) {
                        window.addEventListener(
                            "ethereum#initialized",
                            this.updateAccount,
                            {
                                once: true,
                            }
                        );
                    }
                }
            }
        }
    }, []);

    return (
        <BrowserRouter>
            <ModalProvider>
                <Routes>
                    <Route element={<Authenticated />}>
                        <Route element={<Explorer />} path="/" />
                        <Route element={<MyTokens />} path="/my" />
                    </Route>
                </Routes>
            </ModalProvider>
        </BrowserRouter>
    );
};

export default App;
