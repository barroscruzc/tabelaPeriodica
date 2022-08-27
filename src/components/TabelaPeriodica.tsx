import * as React from "react";
import Elementos, { Elemento } from "../data";

const Legenda = () => {
    return (
        <div id="legenda" className="blur">
            <p>Legenda:</p>
            <ul>
                <li className="nao_metais">Não Metais</li>
                <li className="halogenios">Halogênios</li>
                <li className="gases_nobres">Gases Nobres</li>
                <li className="metais_alcalinos">Metais Alcalinos</li>
            </ul>
            <ul>
                <li className="metais_alcalinoterrosos">Metais Alcalinoterrosos</li>
                <li className="semimetais">Semimetais</li>
                <li className="metais_de_transicao">Metais de Transição</li>

            </ul>
            <ul>
                <li className="metais_representativos">Metais Representativos</li>
                <li className="lantanideos">Lantanídeos</li>
                <li className="actinideos">Actinídeos</li>
            </ul>
        </div>
    );
}

const Tabela = () => {
    const elementos: Elemento[] = Elementos;
    const largura = 18;
    const altura = 7;

    const ElementoTableData = (elemento: Elemento): React.ReactNode => {
        return (
            <td
                className={[elemento.Classe, "blur"].join(" ")}
            >
                <a className={elemento.Classe} href={`#${elemento.Numero}`}>
                    <p className="numero_atomico"> {elemento.Numero} </p>
                    <p className="simbolo_elemento"> {elemento.Simbolo} </p>
                    <p className="nome_elemento"> {elemento.Nome} </p>
                    <p className="massa_atomica"> {elemento.MassaAtomica} </p>
                </a>
            </td>
        )
    }

    const getElement = (grupo: number, periodo: number): React.ReactNode => {

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
            ElementoTableData(elemento)
        ) : (
            <td className="vazio blur"></td>
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
                        <td className="none" colspan="17"></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.from(Array(altura).keys()).map((periodo) => {
                            return (
                                <tr>
                                    {
                                        Array.from(Array(largura).keys()).map((grupo) => {
                                            return getElement(grupo + 1, periodo + 1);
                                        })
                                    }
                                </tr>
                            )
                        })

                    }
                    <tr>
                        <td className="none" colspan="17"></td>
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