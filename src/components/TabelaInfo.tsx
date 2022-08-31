import * as React from "react";
import Elementos, { Elemento } from "../data";
const TabelaInfo = () => {
    const elementos: Elemento[] = Elementos;

    return (
        <>
            <table id="tb_info" className="blur">
                <thead >
                    <tr className="header">
                        <th>Nome</th>
                        <th>Número atômico</th>
                        <th>Símbolo</th>
                        <th>Massa Atômica:</th>
                        <th>Grupo</th>
                        <th>Período</th>
                        <th>Ponto de Fusão °C</th>
                        <th>Ponto de Ebulição °C</th>
                        <th>Fontes</th>
                    </tr>
                </thead>
                <tbody>
                    {elementos.map((elemento) => (
                        <tr
                            id={elemento.Numero.toString()}
                            key={elemento.Numero}
                            className={elemento.Classe}
                        >
                            <td>{elemento.Nome}</td>
                            <td>
                                {elemento.Numero}
                                <span>
                                    <img
                                        src={`/images/elements/${elemento.Numero}-wiki.jpg`}
                                        alt={elemento.Nome}
                                        key={elemento.Numero + "imagem"}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />;
                                </span>
                            </td>
                            <td>{elemento.Simbolo}</td>
                            <td>{elemento.MassaAtomica}</td>
                            <td>{elemento.Grupo}</td>
                            <td>{elemento.Periodo}</td>
                            <td>{
                                isNaN(elemento.PontoFusao) ? "-" : `${elemento.PontoFusao}`
                            }</td>
                            <td>{
                                isNaN(elemento.PontoEbulicao) ? "-" : `${elemento.PontoEbulicao}`
                            }</td>
                            <td>{elemento.Fontes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default TabelaInfo;
