import React from "react";

class FormAdatok extends React.Component {
    render() {
        if (this.props.megjelenit) {
            return (
                <React.Fragment>
                    <h2>A beküldött űrlap adatok</h2>
                    <p>
                        <span>Név:</span>
                        <span>{this.props.nevValue}</span>
                    </p>
                    <p>
                        <span>Téma:</span>
                        <span>{this.props.selectValue}</span>
                    </p>
                    <p>
                        <span>Üzenet:</span>
                        <span>{this.props.textareaValue}</span>
                    </p>
                    <p>
                        <span>Láthatóság</span>
                        <span>
                            {this.props.publicValue == "pub"
                                ? "A bejegyzés nyilvános"
                                : "A bejegyzés nem nyilvános"}
                        </span>
                    </p>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <h2>Kérem töltse ki az űrlapot!</h2>{" "}
                </React.Fragment>
            );
        }
    }
}
export default FormAdatok;
