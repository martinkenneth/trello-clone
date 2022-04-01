import React from "react";

const Modal = () => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button> X </button>
                <div className="title">
                    <h1>Some todo title</h1>
                </div>
                <div className="body">
                    <p>This is some body</p>
                </div>
                <div className="footer">
                    <button>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
