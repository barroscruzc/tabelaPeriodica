import * as React from "react";
import { AppContext } from "../App";
import Elementos, { Elemento } from "../data";

const Legenda = () => {
    const selectedGroups = React.useContext(AppContext).selectedGroups;
    const setSelectedGroups = React.useContext(AppContext).setSelectedGroups;
    const toggle = (className: string) => {
        if (selectedGroups.includes(className)) {
            setSelectedGroups(selectedGroups.filter((c) => c !== className));
        } else {
            setSelectedGroups([...selectedGroups, className]);
        }
    }
    return (
        <div id="legenda" className="blur legenda">
            <p>Legenda:</p>
            <ul>
                <li className="nao_metais">
                    <label>
                        <input type="checkbox" defaultChecked onChange={() => toggle("nao_metais")} />
                        <span />
                        Não Metais
                    </label>
                </li>
                <li className="halogenios">
                    <label>
                        <input type="checkbox" defaultChecked onChange={() => toggle("halogenios")} />
                        <span />
                        Halogênios
                    </label>
                </li>
                <li className="gases_nobres">
                    <label>
                        <input type="checkbox" defaultChecked onChange={() => toggle("gases_nobres")} />
                        <span />
                        Gases Nobres
                    </label>
                </li>
                <li className="metais_alcalinos">
                    <label>
                        <input type="checkbox" defaultChecked onChange={() => toggle("metais_alcalinos")} />
                        <span />
                        Metais Alcalinos
                    </label>
                </li>
            </ul>
            <ul>
                <li className="metais_alcalinoterrosos">
                    <label>
                        <input type="checkbox" defaultChecked onChange={() => toggle("metais_alcalinoterrosos")} />
                        <span />
                        Metais Alcalinoterrosos
                    </label>
                </li>
                <li className="semimetais">
                    <label>
                        <input type="checkbox" defaultChecked onChange={() => toggle("semimetais")} />
                        <span />
                        Semimetais
                    </label>
                </li>
                <li className="metais_de_transicao">
                    <label>
                        <input type="checkbox" defaultChecked onChange={() => toggle("metais_de_transicao")} />
                        <span />
                        Metais de Transição
                    </label>
                </li>
            </ul>
            <ul>
                <li className="metais_representativos">
                    <label>
                        <input type="checkbox" defaultChecked onChange={() => toggle("metais_representativos")} />
                        <span />
                        Metais Representativos
                    </label>
                </li>
                <li className="lantanideos">
                    <label>
                        <input type="checkbox" defaultChecked onChange={() => toggle("lantanideos")} />
                        <span />
                        Lantanídeos
                    </label>
                </li>
                <li className="actinideos">
                    <label>
                        <input type="checkbox" defaultChecked onChange={() => toggle("actinideos")} />
                        <span />
                        Actinídeos
                    </label>
                </li>
            </ul>
        </div>
    );
}

const Tabela = () => {
    const elementos: Elemento[] = Elementos;
    const largura = 18;
    const altura = 7;

    const ElementoTableData = (elemento: Elemento, key: number): React.ReactNode => {
        return (
            <td
                className={[elemento.Classe, "blur"].join(" ")}
                key={key + " " + elemento.Numero}>
                <a className={elemento.Classe} href={`#${elemento.Numero}`}>
                    <p className="numero_atomico"> {elemento.Numero} </p>
                    <p className="simbolo_elemento"> {elemento.Simbolo} </p>
                    <p className="nome_elemento"> {elemento.Nome} </p>
                    <p className="massa_atomica"> {elemento.MassaAtomica} </p>
                </a>
            </td>
        )
    }

    const getElement = (grupo: number, periodo: number, key: number): React.ReactNode => {

        // Se for peroído = 6 e família = 3, então é o Lantanídeos
        if (periodo === 6 && grupo === 3) {
            return (
                <td className="lantanideos blur"><a className="lantanideos" href="#57">
                    <p className="numero_atomico">57 - 71</p>
                    <h2 className="simbolo_elemento">*</h2>
                    <p className="nome_elemento">Lantanídeos</p></a>
                </td>
            );
        }

        // Se for peroído = 7 e família = 3, então é o Actinídeos
        if (periodo === 7 && grupo === 3) {
            return (
                <td className="actinideos blur">
                    <p className="numero_atomico">89 - 103</p><a className="actinideos" href="#89">
                        <h2 className="simbolo_elemento">*</h2>
                        <p className="nome_elemento">Actinídeos</p></a>
                </td>
            );
        }

        const elemento = elementos.find((elemento) => elemento.Grupo === grupo.toString() && elemento.Periodo === periodo);

        return elemento ? (
            ElementoTableData(elemento, key)
        ) : (
            <td className="none" key={key}></td>
        );

    }

    const LantanídeosEActinídeos = {
        "Lantanídeos": elementos.filter((elemento) => elemento.Periodo === 6 && elemento.Numero >= 57 && elemento.Numero <= 71),
        "Actinídeos": elementos.filter((elemento) => elemento.Periodo === 7 && elemento.Numero >= 89 && elemento.Numero <= 103),
    }

    return (
        <>
            <table className="tb_periodica">
                <caption>TABELA PERIÓDICA</caption>
                <thead>
                    <tr>
                        <td className="none"></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.from(Array(altura).keys()).map((periodo, index) => {
                            return (
                                <tr key={index}>
                                    {
                                        Array.from(Array(largura).keys()).map((grupo, index) => {
                                            return getElement(grupo + 1, periodo + 1, index);
                                        })
                                    }
                                </tr>
                            )
                        })

                    }
                    <tr>
                        <td className="none"></td>
                    </tr>
                    <tr>
                        {LantanídeosEActinídeos["Lantanídeos"].map((elemento) => ElementoTableData(elemento))}
                    </tr>
                    <tr>
                        {LantanídeosEActinídeos["Actinídeos"].map((elemento) => ElementoTableData(elemento))}
                    </tr>
                </tbody>
            </table>
        </>
    )
}

const TabelaPeriódica = () => {
    return (
        <>
            <div style={{
                margin: "40px auto",
            }}>
                <Tabela />
                <Legenda />
            </div>
        </>
    );
}

export default TabelaPeriódica;