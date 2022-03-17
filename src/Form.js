import React from "react";
import "./Form.css";
import FormAdatok from "./Formadatok";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            nevValue: "",
            selectValue: "Állatok",
            textareaValue: "",
            ell: false,
            publicValue: "pub",
        };
    }
    inputHandleChange = (event) => {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    };
    selectHandleChange = (event) => {
        this.setState({ selectValue: event.target.value });
    };
    textAreaHandleChange = (event) => {
        this.setState({ textareaValue: event.target.value });
    };

    submitHandleClick = (event) => {
        console.log(this.state);
        this.setState({ ell: true });
        event.preventDefault();
    };
    render() {
        return (
            <div className="Form">
                <h1>Űrlapok Reactban</h1>
                <form onSubmit={this.submitHandleClick}>
                    <label>
                        Név:
                        <input
                            value={this.state.nevValue}
                            type="text"
                            name="nevValue"
                            placeholder="Valaki Vagyok"
                            onChange={this.inputHandleChange}
                        />
                    </label>
                    <fieldset>
                        <label>
                            Publikus
                            <input
                                value={"pub"}
                                type="radio"
                                name="publicValue"
                                checked={
                                    this.state.publicValue == "pub"
                                        ? true
                                        : false
                                }
                                onChange={this.inputHandleChange}
                            />
                        </label>
                        <label>
                            Nem publikus
                            <input
                                value={"nonPub"}
                                type="radio"
                                name="publicValue"
                                checked={
                                    this.state.publicValue == "nonPub"
                                        ? true
                                        : false
                                }
                                onChange={this.inputHandleChange}
                            />
                        </label>
                    </fieldset>
                    <select
                        onChange={this.selectHandleChange}
                        value={this.state.selectValue}
                    >
                        <option value="Nincs téma kiválasztva!">
                            Válassz témát!
                        </option>
                        <option value="Állatok">Állatok</option>
                        <option value="Növények">Növények</option>
                        <option value="Épített környezet">
                            Épített környezet
                        </option>
                        <option value="Egyéb">Egyéb</option>
                    </select>
                    <textarea
                        value={this.state.textareaValue}
                        onChange={this.textAreaHandleChange}
                        rows="10"
                        placeholder="Ide írd a bejegyzésed szövegét!"
                    ></textarea>
                    <input type="submit" value="OK" />
                </form>

                <section>
                    <FormAdatok
                        megjelenit={this.state.ell}
                        publicValue={this.state.publicValue}
                        nevValue={this.state.nevValue}
                        selectValue={this.state.selectValue}
                        textareaValue={this.state.textareaValue}
                    />
                </section>
            </div>
        );
    }
}

export default Form;
