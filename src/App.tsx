import * as React from "react";
import TabelaPeriódica from "./components/TabelaPeriodica";
import Menu from "./components/Menu";
import TabelaInfo from "./components/TabelaInfo";

export default () => {
    return (
        <>
            <Menu />
            <a id="inicio" />
            <TabelaPeriódica />
            <a id="info" />
            <TabelaInfo />
            <a id="fim" />
        </>
    );
}
