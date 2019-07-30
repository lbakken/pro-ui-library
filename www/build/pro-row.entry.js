import { r as registerInstance, h } from './chunk-657f8437.js';

class ProRow {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("slot", null));
    }
    static get style() { return "pro-row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}"; }
}

export { ProRow as pro_row };
