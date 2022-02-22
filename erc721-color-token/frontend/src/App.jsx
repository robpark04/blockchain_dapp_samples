import React, { useEffect } from "react";
import { ModalProvider } from "@area2k/use-modal";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import Explorer from "./routes/Explorer/index";
import MyTokens from "./routes/Explorer/mytokens";

import "./styles/css/app.css";

import { injected } from "./stores/connectors";
import { CONNECTION_CONNECTED } from "./constants/constants";
import { getNet } from "./stores/netReducer";
import { setAccount, setWeb3Context } from "./stores/netAction";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { emitter } from "./utils";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

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
            if (typeof window.web3 !== "undefined") {
                if (window.web3.currentProvider) {
                    if (window.web3.currentProvider.isMetaMask) {
                        window.addEventListener(
                            "ethereum#initialized",
                            updateAccount,
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
                <Navbar />
                <Sidebar />
                <Switch>
                    <Route component={() => <Explorer />} path="/" exact={true}/>
                    <Route component={() => <MyTokens />} path="/my" exact={true}/>
                </Switch>
            </ModalProvider>
        </BrowserRouter>
    );
};

export default withRouter(App);
