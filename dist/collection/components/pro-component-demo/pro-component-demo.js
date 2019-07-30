import { h, Host } from '@stencil/core';
export class ProComponentDemo {
    constructor() {
        this.openModal = () => {
            this.modal.present();
        };
    }
    componentDidLoad() {
        this.modal = this.el.querySelector('pro-modal');
    }
    onFormSubmit(ev) {
        ev.preventDefault();
        console.log(ev);
        console.log(this.el.querySelector('pro-input'));
    }
    onInputChange(ev) {
        console.log(ev.detail);
    }
    render() {
        return (h(Host, null,
            h("pro-header", null, "Hey there! Let's check out the weather"),
            h("pro-content", null,
                h("pro-grid", null,
                    h("pro-row", null,
                        h("pro-col", { size: "12" },
                            h("pro-card", null,
                                h("pro-content", null,
                                    h("p", null, "Uh oh! Major thunderstorms in the past few days!"),
                                    h("pro-image", { src: "../../assets/rain.png", id: "changing-icon" }),
                                    h("pro-button", { onClick: this.openModal }, "Open Modal And the text is really long"),
                                    h("pro-grid", null,
                                        h("pro-row", null,
                                            h("pro-col", { size: "6" },
                                                h("pro-input", { placeholder: "Input Field", label: "Input something here" })),
                                            h("pro-col", { size: "6" },
                                                h("pro-input", { required: true, placeholder: "Input Text", label: "This is some text", regex: /^([^0-9]*)$/ }))),
                                        h("pro-row", null,
                                            h("pro-col", { size: "12" },
                                                h("pro-input", { required: true, placeholder: "Not a Field", label: "Fieldish" }))),
                                        h("pro-row", null,
                                            h("pro-col", { size: "4" },
                                                h("pro-input", { placeholder: "Input Field", label: "Input something" })),
                                            h("pro-col", { size: "4" },
                                                h("pro-input", { placeholder: "Input Text", label: "This is some text" })),
                                            h("pro-col", { size: "4" },
                                                h("pro-input", { placeholder: "Not a Field", label: "Fieldish" })))))))),
                    h("form", { onSubmit: (ev) => ev.preventDefault() },
                        h("pro-row", null,
                            h("pro-col", { size: "6" },
                                h("pro-card", null,
                                    h("pro-content", null,
                                        h("pro-radio-group", { name: "testradiogroup" },
                                            h("pro-radio", { value: "test1" }),
                                            h("pro-radio", { value: "test2" }),
                                            h("pro-radio", { value: "test3" }),
                                            h("pro-radio", { value: "test4" }))))),
                            h("pro-col", { size: "6" },
                                h("pro-card", null,
                                    h("pro-content", null,
                                        h("pro-checkbox", { name: "testcheckboxgroup", value: "test1" }),
                                        h("pro-checkbox", { name: "testcheckboxgroup", value: "test2" }),
                                        h("pro-checkbox", { name: "testcheckboxgroup", value: "test3" }),
                                        h("pro-checkbox", { name: "testcheckboxgroup", value: "test4" }))))),
                        h("pro-row", null,
                            h("pro-col", { size: "6" },
                                h("pro-button", { disabled: true, type: "submit" }, "Submit")),
                            h("pro-col", { size: "6" },
                                h("pro-button", { type: "submit" }, "Submit")))))),
            h("pro-footer", null, "API information"),
            h("div", { class: "modal-container" },
                h("pro-modal", null,
                    h("pro-content", null,
                        h("form", { onSubmit: (ev) => this.onFormSubmit(ev) },
                            h("pro-grid", null,
                                h("pro-row", null,
                                    h("pro-col", { size: "6" },
                                        h("pro-input", { placeholder: "Input Field", label: "Input something here" })),
                                    h("pro-col", { size: "6" },
                                        h("pro-input", { placeholder: "Input Text", label: "This is some text" }))),
                                h("pro-row", null,
                                    h("pro-col", { size: "12" },
                                        h("pro-input", { placeholder: "Not a Field", label: "Fieldish" }))),
                                h("pro-row", null,
                                    h("pro-col", { size: "4" },
                                        h("pro-input", { placeholder: "Input Field", label: "thing" })),
                                    h("pro-col", { size: "4" },
                                        h("pro-input", { placeholder: "Input Text", label: "the next thing" })),
                                    h("pro-col", { size: "4" },
                                        h("pro-input", { placeholder: "Not a Field", label: "another thing" }))),
                                h("pro-row", null,
                                    h("pro-col", { size: "12" },
                                        h("pro-button", { type: "submit" }, "Submit"))))))))));
    }
    static get is() { return "pro-component-demo"; }
    static get originalStyleUrls() { return {
        "$": ["pro-component-demo.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pro-component-demo.css"]
    }; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "inputChange",
            "method": "onInputChange",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
