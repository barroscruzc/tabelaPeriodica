import * as React from "react";
import TabelaPeriódica from "./components/TabelaPeriodica";
import Menu from "./components/Menu";
import TabelaInfo from "./components/TabelaInfo";

export const AppContext = React.createContext({
    selectedGroups: ["nao_metais", "halogenios", "gases_nobres", "metais_alcalinos", "metais_alcalinoterrosos", "semimetais", "metais_de_transicao", "metais_representativos", "lantanideos", "actinideos"],
    setSelectedGroups: (groups: string[]) => { },
}) as React.Context<{ selectedGroups: string[] } & { setSelectedGroups: (groups: string[]) => void }>;

export default () => {
    const [selectedGroups, setSelectedGroups] = React.useState(["nao_metais", "halogenios", "gases_nobres", "metais_alcalinos", "metais_alcalinoterrosos", "semimetais", "metais_de_transicao", "metais_representativos", "lantanideos", "actinideos"]);
    return (
        <>
            <AppContext.Provider value={{ selectedGroups, setSelectedGroups }}>
                <Menu />
                <a id="inicio" />
                <TabelaPeriódica />
                <a id="info" />
                <TabelaInfo />
                <a id="fim" />
                <div id="footer">
                    {/* Cristhiane da Cruz */}
                    <p>Todos os direitos reservados © 2022</p>
                    <p className=".credito" >Cristhiane da Cruz</p>
                    <a href="https://www.linkedin.com/in/barroscruzc/" target="blank">
                        <i className="fa-brands fa-linkedin" />
                    </a>
                    <a href="mailto:barroscruzc@gmail.com" target="blank">
                        <i className="fa-solid fa-envelope" /></a>
                    <a href="https://github.com/barroscruzc" target="blank">
                        <i className="fa-brands fa-github" />
                    </a>

                    {/* Nicolas Nery*/}
                    <p className=".credito">Nicolas da Nery</p>
                    <a href="https://www.linkedin.com/in/nicolas-vycas/" target="blank">
                        <i className="fa-brands fa-linkedin" />
                    </a>
                    <a href="mailto:vycasnicolas@gmail.com" target="blank">
                        <i className="fa-solid fa-envelope" /></a>
                    <a href="https://github.com/tomast1337" target="blank">
                        <i className="fa-brands fa-github" />
                    </a>


                    <p style={{
                        fontSize: "small",
                        fontWeight: "50",
                        textAlign: "right",
                        marginRight: "20px"
                    }}>
                        Fonte e Imagens:
                        <a href="https://pt.wikipedia.org/wiki/Tabela_peri%C3%B3dica"
                            target="_blank"
                            style={{
                                color: "white"
                            }}> Wikipedia</a>
                        |
                        <a href="https://www.pexels.com/es-es/foto/cielo-azul-y-morado-con-estrellas-3607542/"
                            target="_blank"
                            style={{
                                color: "white"
                            }}>Frank Cone</a></p>
                </div>
            </AppContext.Provider>
        </>
    );
}
