import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Button, CircularProgress } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import { Web3ReactProvider, useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import { injected } from "../../stores/connectors";
import { emitter } from "../../utils";
import { getNet } from "../../stores/netReducer";
import { setAccount, setWeb3Context } from "../../stores/netAction";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";

import metamaskLogo from "../../img/metamask.png";

import {
    ERROR,
    CONNECTION_DISCONNECTED,
    CONNECTION_CONNECTED,
} from "../../constants/constants";

const styles = (theme) => ({
    root: {
        flex: 1,
        height: "auto",
        display: "flex",
        position: "relative",
    },
    contentContainer: {
        margin: "auto",
        textAlign: "center",
        padding: "12px",
        display: "flex",
        flexWrap: "wrap",
    },
    cardContainer: {
        marginTop: "60px",
        minHeight: "260px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
    },
    unlockCard: {
        padding: "24px",
    },
    buttonText: {
        marginLeft: "12px",
        fontWeight: "700",
    },
    instruction: {
        maxWidth: "400px",
        marginBottom: "32px",
        marginTop: "32px",
    },
    actionButton: {
        padding: "12px",
        backgroundColor: "white",
        borderRadius: "3rem",
        border: "1px solid #E1E1E1",
        fontWeight: 500,
        [theme.breakpoints.up("md")]: {
            padding: "15px",
        },
    },
    connect: {
        width: "100%",
    },
    closeIcon: {
        position: "absolute",
        right: "0px",
        top: "0px",
        cursor: "pointer",
    },
});

class Unlock extends Component {
    constructor(props) {
        super();

        this.state = {
            error: null,
            metamaskLoading: false,
            ledgerLoading: false,
        };
    }

    componentWillMount() {
        emitter.on(CONNECTION_CONNECTED, this.connectionConnected);
        emitter.on(CONNECTION_DISCONNECTED, this.connectionDisconnected);
        emitter.on(ERROR, this.error);
    }

    componentWillUnmount() {
        emitter.removeListener(CONNECTION_CONNECTED, this.connectionConnected);
        emitter.removeListener(
            CONNECTION_DISCONNECTED,
            this.connectionDisconnected
        );
        emitter.removeListener(ERROR, this.error);
    }

    error = (err) => {
        this.setState({
            loading: false,
            error: err,
            metamaskLoading: false,
            ledgerLoading: false,
        });
    };

    connectionConnected = () => {
        if (this.props.closeModal != null) {
            this.props.closeModal();
        }
    };

    connectionDisconnected = () => {
        if (this.props.closeModal != null) {
            this.props.closeModal();
        }
    };

    metamaskUnlocked = () => {
        this.setState({ metamaskLoading: false });
        if (this.props.closeModal != null) {
            this.props.closeModal();
        }
    };

    ledgerUnlocked = () => {
        this.setState({ ledgerLoading: false });
        if (this.props.closeModal != null) {
            this.props.closeModal();
        }
    };

    cancelLedger = () => {
        this.setState({ ledgerLoading: false });
    };

    cancelMetamask = () => {
        this.setState({ metamaskLoading: false });
    };

    render() {
        const { classes, closeModal } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.closeIcon} onClick={closeModal}>
                    <CloseIcon />
                </div>
                <div className={classes.contentContainer}>
                    <Web3ReactProvider getLibrary={getLibrary}>
                        <MyComponent closeModal={closeModal} />
                    </Web3ReactProvider>
                </div>
            </div>
        );
    }
}

function getLibrary(provider) {
    const library = new Web3Provider(provider);
    library.pollingInterval = 8000;
    return library;
}

function onConnectionClicked(
    setActivatingConnector,
    activate
) {
    setActivatingConnector(injected);
    activate(injected);
}

function onDeactivateClicked(deactivate, connector, localConnector, dispatch) {

    if (deactivate) {
        deactivate();
    }
    if (localConnector) {
        localConnector.handleClose();
    }
    if (connector && connector.close) {
        connector.close();
    }
    dispatch(setAccount(null));
    dispatch(setWeb3Context(null));

    emitter.emit(CONNECTION_DISCONNECTED);
}

function MyComponent(props) {

    const net = useAppSelector(getNet);
    const dispatch = useAppDispatch();

    const context = useWeb3React();
    const localContext = net.web3context;
    var localConnector = null;
    if (localContext) {
        localConnector = localContext.connector;
    }
    const {
        connector,
        library,
        account,
        activate,
        deactivate,
        active,
        error,
    } = context;

    const { closeModal } = props;

    const [activatingConnector, setActivatingConnector] = React.useState();
    React.useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined);
        }
    }, [activatingConnector, connector]);

    React.useEffect(() => {
        if (account && active && library) {
            dispatch(setAccount({ address: account }));
            dispatch(setWeb3Context(context));
            emitter.emit(CONNECTION_CONNECTED);
        }
    }, [account, active, closeModal, context, library]);

    const width = window.innerWidth;

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: width > 650 ? "space-between" : "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    padding: "12px 0px",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Button
                    style={{
                        padding: "16px",
                        backgroundColor: "white",
                        borderRadius: "1rem",
                        border: "1px solid #E1E1E1",
                        fontWeight: 500,
                        display: "flex",
                        justifyContent: "space-between",
                        minWidth: "250px",
                    }}
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                        onConnectionClicked(
                            setActivatingConnector,
                            activate
                        );
                    }}
                    disabled={!!activatingConnector || !!error}
                >
                    <Typography
                        style={{
                            margin: "0px 12px",
                            color: "rgb(1, 1, 1)",
                            fontWeight: 500,
                            fontSize: "1rem",
                        }}
                        variant={"h3"}
                    >
                        METAMASK
                    </Typography>

                    {!(injected === activatingConnector) && !(injected === connector || injected === localConnector) && (
                        <img
                            style={{
                                position: "absolute",
                                right: "20px",

                                width: "30px",
                                height: "30px",
                            }}
                            src={metamaskLogo}
                            alt=""
                        />
                    )}
                    {(injected === activatingConnector) && (
                        <CircularProgress
                            size={15}
                            style={{ marginRight: "10px" }}
                        />
                    )}
                    {!(injected === activatingConnector) && (injected === connector || injected === localConnector) && (
                        <div
                            style={{
                                background: "#4caf50",
                                borderRadius: "10px",
                                width: "10px",
                                height: "10px",
                                marginRight: "10px",
                            }}
                        ></div>
                    )}
                </Button>
            </div>

            <div style={{ width: "252px", margin: "12px 0px" }}>
                <Button
                    style={{
                        padding: "12px",
                        backgroundColor: "white",
                        borderRadius: "20px",
                        border: "1px solid #E1E1E1",
                        fontWeight: 500,
                        minWidth: "250px",
                    }}
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                        onDeactivateClicked(
                            deactivate,
                            connector,
                            localConnector,
                            dispatch,
                        );
                    }}
                >
                    DEACTIVATE
                </Button>
            </div>
        </div>
    );
}

export default withStyles(styles)(Unlock);
