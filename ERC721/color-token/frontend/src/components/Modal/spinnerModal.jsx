import React, { Component } from "react";
import { DialogContent, Dialog, Slide } from "@material-ui/core";

import Spinner from "./spinner.jsx";


const SpinnerModal = (props) => {
    
        const { closeModal, modalOpen } = props;


        return (
            <Dialog
                open={modalOpen}
                onClose={closeModal} 
                disableBackdropClick = {true}
                disableBackdropClick ={true}
            >
                <DialogContent>
                    <Spinner />
                </DialogContent>
            </Dialog>
        );
    
}

export default SpinnerModal;
