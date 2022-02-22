import React from "react";
import { DialogContent, Dialog, DialogTitle } from "@material-ui/core";

import checkmarkImg from "../../img/checkmark.png";
const etherScanUrl = "https://ropsten.etherscan.io/tx/"
const CompleteModal = (props) => {
    
        const { closeModal, modalOpen, scanUrl, page} = props;
    

        return (
            <Dialog
                open={modalOpen}
                onClose={closeModal}  
            >
                <DialogTitle onClose={closeModal}>
                </DialogTitle>
                <DialogContent>
                    <div className="completeModal">
                        <p className="bold-text header">Request Complete</p>
                        <img src={checkmarkImg} alt="" />
                        <p className="bold-text">Your transaction is on the way!</p>
                        <p  >Request details: <a href={`${etherScanUrl}${scanUrl}`}>{page}</a></p>
                        <input type="button" value="Close" className="btn btn-primary w-100 continue mb-4" onClick={() => closeModal()}></input>
                    </div>
                </DialogContent>
            </Dialog>
        );
    
}

export default CompleteModal;
