import React from "react";
import { DialogContent, Dialog } from "@material-ui/core";

import Spinner from "./spinner";

const SpinnerModal = (props) => {
    
        const { closeModal, modalOpen } = props;


        return (
            <Dialog
                open={modalOpen}
                onClose={closeModal} 
                disableBackdropClick = {true}
            >
                <DialogContent>
                    <Spinner />
                </DialogContent>
            </Dialog>
        );
    
}

export default SpinnerModal;
