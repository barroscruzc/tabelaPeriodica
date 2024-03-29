export type Elemento = {
    "Nome": string;
    "Numero": number;
    "Simbolo": string;
    "MassaAtomica": number;
    "Grupo": string;
    "Periodo": number;
    "PontoFusao": number;
    "PontoEbulicao": number;
    "Fontes": string;
    "Classe": string;
}

const Elementos: Elemento[] = [
    {
        "Nome": "Hidrogênio",
        "Numero": 1,
        "Simbolo": "H",
        "MassaAtomica": 1,
        "Grupo": "1",
        "Periodo": 1,
        "PontoFusao": -259.1,
        "PontoEbulicao": -252.9,
        "Fontes": "Água, metano",
        "Classe":"nao_metais"
    }, {
        "Nome": "Hélio",
        "Numero": 2,
        "Simbolo": "He",
        "MassaAtomica": 4.002602,
        "Grupo": "18",
        "Periodo": 1,
        "PontoFusao": -272.2,
        "PontoEbulicao": -268.9,
        "Fontes": "Gás natural, ar",
        "Classe":"gases_nobres"
    }, {
        "Nome": "Lítio",
        "Numero": 3,
        "Simbolo": "Li",
        "MassaAtomica": 6.9675,
        "Grupo": "1",
        "Periodo": 2,
        "PontoFusao": 180.5,
        "PontoEbulicao": 1342,
        "Fontes": "Espodumena",
        "Classe":"metais_alcalinos"
    }, {
        "Nome": "Berílio",
        "Numero": 4,
        "Simbolo": "Be",
        "MassaAtomica": 9.0121831,
        "Grupo": "2",
        "Periodo": 2,
        "PontoFusao": 1278,
        "PontoEbulicao": 2970,
        "Fontes": "Beryl (silicate)",
        "Classe":"metais_alcalinoterrosos"
    }, {
        "Nome": "Boro",
        "Numero": 5,
        "Simbolo": "B",
        "MassaAtomica": 10.8135,
        "Grupo": "13",
        "Periodo": 2,
        "PontoFusao": 2079,
        "PontoEbulicao": 2550,
        "Fontes": "Boratos de sódio e cálcio",
        "Classe":"semimetais"
    }, {
        "Nome": "Carbono",
        "Numero": 6,
        "Simbolo": "C",
        "MassaAtomica": 12.0106,
        "Grupo": "14",
        "Periodo": 2,
        "PontoFusao": 3367,
        "PontoEbulicao": 4827,
        "Fontes": "Carvão, petróleo, gás natural",
        "Classe":"nao_metais"
    }, {
        "Nome": "Nitrogênio",
        "Numero": 7,
        "Simbolo": "N",
        "MassaAtomica": 14.006855,
        "Grupo": "15",
        "Periodo": 2,
        "PontoFusao": -209.9,
        "PontoEbulicao": -195.8,
        "Fontes": "Ar",
        "Classe":"nao_metais"
    }, {
        "Nome": "Oxigênio",
        "Numero": 8,
        "Simbolo": "O",
        "MassaAtomica": 15.9994,
        "Grupo": "16",
        "Periodo": 2,
        "PontoFusao": -218.4,
        "PontoEbulicao": -183,
        "Fontes": "Ar",
        "Classe":"nao_metais"
    }, {
        "Nome": "Flúor",
        "Numero": 9,
        "Simbolo": "F",
        "MassaAtomica": 18.99840316,
        "Grupo": "17",
        "Periodo": 2,
        "PontoFusao": -219.8,
        "PontoEbulicao": -188.1,
        "Fontes": "Fluorita",
        "Classe":"halogenios"
    }, {
        "Nome": "Neônio",
        "Numero": 10,
        "Simbolo": "Ne",
        "MassaAtomica": 20.1797,
        "Grupo": "18",
        "Periodo": 2,
        "PontoFusao": -248,
        "PontoEbulicao": -248.7,
        "Fontes": "Ar",
        "Classe":"gases_nobres"
    }, {
        "Nome": "Sódio",
        "Numero": 11,
        "Simbolo": "Na",
        "MassaAtomica": 22.98976928,
        "Grupo": "1",
        "Periodo": 3,
        "PontoFusao": 97.8,
        "PontoEbulicao": 883,
        "Fontes": "Halita",
        "Classe":"metais_alcalinos"
    }, {
        "Nome": "Magnésio",
        "Numero": 12,
        "Simbolo": "Mg",
        "MassaAtomica": 24.3055,
        "Grupo": "2",
        "Periodo": 3,
        "PontoFusao": 649,
        "PontoEbulicao": 1090,
        "Fontes": "Magnesita",
        "Classe":"metais_alcalinoterrosos"
    }, {
        "Nome": "Alumínio",
        "Numero": 13,
        "Simbolo": "Al",
        "MassaAtomica": 26.9815385,
        "Grupo": "13",
        "Periodo": 3,
        "PontoFusao": 660,
        "PontoEbulicao": 2467,
        "Fontes": "Bauxita",
        "Classe":"metais_representativos"
    }, {
        "Nome": "Silício",
        "Numero": 14,
        "Simbolo": "Si",
        "MassaAtomica": 28085,
        "Grupo": "14",
        "Periodo": 3,
        "PontoFusao": 1410,
        "PontoEbulicao": 2355,
        "Fontes": "Quartzo",
        "Classe":"semimetais"
    }, {
        "Nome": "Fósforo",
        "Numero": 15,
        "Simbolo": "P",
        "MassaAtomica": 30.973762,
        "Grupo": "15",
        "Periodo": 3,
        "PontoFusao": 44.1,
        "PontoEbulicao": 280,
        "Fontes": "Apatita",
        "Classe":"nao_metais"
    }, {
        "Nome": "Enxofre",
        "Numero": 16,
        "Simbolo": "S",
        "MassaAtomica": 32.0675,
        "Grupo": "16",
        "Periodo": 3,
        "PontoFusao": 112.8,
        "PontoEbulicao": 444.7,
        "Fontes": "Pirita",
        "Classe":"nao_metais"
    }, {
        "Nome": "Cloro",
        "Numero": 17,
        "Simbolo": "Cl",
        "MassaAtomica": 35.4515,
        "Grupo": "17",
        "Periodo": 3,
        "PontoFusao": -101,
        "PontoEbulicao": -34.6,
        "Fontes": "Halita",
        "Classe":"halogenios"
    }, {
        "Nome": "Argônio",
        "Numero": 18,
        "Simbolo": "Ar",
        "MassaAtomica": 39948,
        "Grupo": "18",
        "Periodo": 3,
        "PontoFusao": -189.2,
        "PontoEbulicao": -185.7,
        "Fontes": "Ar",
        "Classe":"gases_nobres"
    }, {
        "Nome": "Potássio",
        "Numero": 19,
        "Simbolo": "K",
        "MassaAtomica": 39.0983,
        "Grupo": "1",
        "Periodo": 4,
        "PontoFusao": 63.25,
        "PontoEbulicao": 760,
        "Fontes": "Carnalita",
        "Classe":"metais_alcalinos"
    }, {
        "Nome": "Cálcio",
        "Numero": 20,
        "Simbolo": "Ca",
        "MassaAtomica": 40078,
        "Grupo": "2",
        "Periodo": 4,
        "PontoFusao": 839,
        "PontoEbulicao": 1484,
        "Fontes": "Calcita",
        "Classe":"metais_alcalinoterrosos"
    }, {
        "Nome": "Escândio",
        "Numero": 21,
        "Simbolo": "Sc",
        "MassaAtomica": 44.955908,
        "Grupo": "3",
        "Periodo": 4,
        "PontoFusao": 1541,
        "PontoEbulicao": 2832,
        "Fontes": "-",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Titânio",
        "Numero": 22,
        "Simbolo": "Ti",
        "MassaAtomica": 47867,
        "Grupo": "4",
        "Periodo": 4,
        "PontoFusao": 1660,
        "PontoEbulicao": 3287,
        "Fontes": "Ilmenita",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Vanádio",
        "Numero": 23,
        "Simbolo": "V",
        "MassaAtomica": 50.9415,
        "Grupo": "5",
        "Periodo": 4,
        "PontoFusao": 1890,
        "PontoEbulicao": 3380,
        "Fontes": "U, Pb vanadates (misc)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Cromo",
        "Numero": 24,
        "Simbolo": "Cr",
        "MassaAtomica": 51.9961,
        "Grupo": "6",
        "Periodo": 4,
        "PontoFusao": 1857,
        "PontoEbulicao": 2672,
        "Fontes": "Cromita",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Manganês",
        "Numero": 25,
        "Simbolo": "Mn",
        "MassaAtomica": 54.938044,
        "Grupo": "7",
        "Periodo": 4,
        "PontoFusao": 1244,
        "PontoEbulicao": 1962,
        "Fontes": "Pyrolusite,psilomelane(oxide)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Ferro",
        "Numero": 26,
        "Simbolo": "Fe",
        "MassaAtomica": 55845,
        "Grupo": "8",
        "Periodo": 4,
        "PontoFusao": 1535,
        "PontoEbulicao": 2750,
        "Fontes": "Hematita",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Cobalto",
        "Numero": 27,
        "Simbolo": "Co",
        "MassaAtomica": 58.933194,
        "Grupo": "9",
        "Periodo": 4,
        "PontoFusao": 1495,
        "PontoEbulicao": 2870,
        "Fontes": "Sulfetos de cobalto",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Níquel",
        "Numero": 28,
        "Simbolo": "Ni",
        "MassaAtomica": 58.6934,
        "Grupo": "10",
        "Periodo": 4,
        "PontoFusao": 1453,
        "PontoEbulicao": 2730,
        "Fontes": "Sulfetos de níquel",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Cobre",
        "Numero": 29,
        "Simbolo": "Cu",
        "MassaAtomica": 63546,
        "Grupo": "11",
        "Periodo": 4,
        "PontoFusao": 1083,
        "PontoEbulicao": 2567,
        "Fontes": "Pirita",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Zinco",
        "Numero": 30,
        "Simbolo": "Zn",
        "MassaAtomica": 65.38,
        "Grupo": "12",
        "Periodo": 4,
        "PontoFusao": 419.6,
        "PontoEbulicao": 906,
        "Fontes": "Sphalerite (sulfide)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Gálio",
        "Numero": 31,
        "Simbolo": "Ga",
        "MassaAtomica": 69723,
        "Grupo": "13",
        "Periodo": 4,
        "PontoFusao": 29.8,
        "PontoEbulicao": 2403,
        "Fontes": "Bauxita",
        "Classe":"metais_representativos"
    }, {
        "Nome": "Germânio",
        "Numero": 32,
        "Simbolo": "Ge",
        "MassaAtomica": 72.63,
        "Grupo": "14",
        "Periodo": 4,
        "PontoFusao": 947.4,
        "PontoEbulicao": 2830,
        "Fontes": "Zn smelting by-product",
        "Classe":"semimetais"
    }, {
        "Nome": "Arsênio",
        "Numero": 33,
        "Simbolo": "As",
        "MassaAtomica": 74.921595,
        "Grupo": "15",
        "Periodo": 4,
        "PontoFusao": 817,
        "PontoEbulicao": 617,
        "Fontes": "Arsenopyrite, enargite (misc)",
        "Classe":"semimetais"
    }, {
        "Nome": "Selênio",
        "Numero": 34,
        "Simbolo": "Se",
        "MassaAtomica": 78971,
        "Grupo": "16",
        "Periodo": 4,
        "PontoFusao": 217,
        "PontoEbulicao": 685,
        "Fontes": "Cu smelting by-product",
        "Classe":"nao_metais"
    }, {
        "Nome": "Bromo",
        "Numero": 35,
        "Simbolo": "Br",
        "MassaAtomica": 79904,
        "Grupo": "17",
        "Periodo": 4,
        "PontoFusao": -7.2,
        "PontoEbulicao": 58.8,
        "Fontes": "Seawater, brines",
        "Classe":"halogenios"
    }, {
        "Nome": "Criptônio",
        "Numero": 36,
        "Simbolo": "Kr",
        "MassaAtomica": 83798,
        "Grupo": "18",
        "Periodo": 4,
        "PontoFusao": -157,
        "PontoEbulicao": -152,
        "Fontes": "Ar",
        "Classe":"gases_nobres"
    }, {
        "Nome": "Rubídio",
        "Numero": 37,
        "Simbolo": "Rb",
        "MassaAtomica": 85.4678,
        "Grupo": "1",
        "Periodo": 5,
        "PontoFusao": 38.9,
        "PontoEbulicao": 686,
        "Fontes": "Li extractn by-product",
        "Classe":"metais_alcalinos"
    }, {
        "Nome": "Estrôncio",
        "Numero": 38,
        "Simbolo": "Sr",
        "MassaAtomica": 87.62,
        "Grupo": "2",
        "Periodo": 5,
        "PontoFusao": 769,
        "PontoEbulicao": 1384,
        "Fontes": "Celestite (sulfide)",
        "Classe":"metais_alcalinoterrosos"
    }, {
        "Nome": "Ítrio",
        "Numero": 39,
        "Simbolo": "Y",
        "MassaAtomica": 88.90584,
        "Grupo": "3",
        "Periodo": 5,
        "PontoFusao": 1523,
        "PontoEbulicao": 3337,
        "Fontes": "xenotime (phosphate)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Zircônio",
        "Numero": 40,
        "Simbolo": "Zr",
        "MassaAtomica": 91224,
        "Grupo": "4",
        "Periodo": 5,
        "PontoFusao": 1852,
        "PontoEbulicao": 4377,
        "Fontes": "Zircon (silicate)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Nióbio",
        "Numero": 41,
        "Simbolo": "Nb",
        "MassaAtomica": 92.90637,
        "Grupo": "5",
        "Periodo": 5,
        "PontoFusao": 2468,
        "PontoEbulicao": 4742,
        "Fontes": "columbite (oxide)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Molibdênio",
        "Numero": 42,
        "Simbolo": "Mo",
        "MassaAtomica": 95.95,
        "Grupo": "6",
        "Periodo": 5,
        "PontoFusao": 2617,
        "PontoEbulicao": 4612,
        "Fontes": "Molybdenite (sulfide)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Tecnécio",
        "Numero": 43,
        "Simbolo": "Tc",
        "MassaAtomica": 98,
        "Grupo": "7",
        "Periodo": 5,
        "PontoFusao": 2172,
        "PontoEbulicao": 4877,
        "Fontes": "Sintético (U fission)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Rutênio",
        "Numero": 44,
        "Simbolo": "Ru",
        "MassaAtomica": 101.07,
        "Grupo": "8",
        "Periodo": 5,
        "PontoFusao": 2310,
        "PontoEbulicao": 3900,
        "Fontes": "nickel ores (sulfides)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Ródio",
        "Numero": 45,
        "Simbolo": "Rh",
        "MassaAtomica": 102.9055,
        "Grupo": "9",
        "Periodo": 5,
        "PontoFusao": 1966,
        "PontoEbulicao": 3727,
        "Fontes": "nickel ores (sulfides)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Paládio",
        "Numero": 46,
        "Simbolo": "Pd",
        "MassaAtomica": 106.42,
        "Grupo": "10",
        "Periodo": 5,
        "PontoFusao": 1554,
        "PontoEbulicao": 3140,
        "Fontes": "nickel ores (sulfides)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Prata",
        "Numero": 47,
        "Simbolo": "Ag",
        "MassaAtomica": 107.8682,
        "Grupo": "11",
        "Periodo": 5,
        "PontoFusao": 962,
        "PontoEbulicao": 2212,
        "Fontes": "Argentite (sulfide)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Cádmio",
        "Numero": 48,
        "Simbolo": "Cd",
        "MassaAtomica": 112414,
        "Grupo": "12",
        "Periodo": 5,
        "PontoFusao": 320.9,
        "PontoEbulicao": 765,
        "Fontes": "Sphalerite (sulfide)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Índio",
        "Numero": 49,
        "Simbolo": "In",
        "MassaAtomica": 114818,
        "Grupo": "13",
        "Periodo": 5,
        "PontoFusao": 156.6,
        "PontoEbulicao": 2080,
        "Fontes": "Zn/Pb smelting by-product",
        "Classe":"metais_representativos"
    }, {
        "Nome": "Estanho",
        "Numero": 50,
        "Simbolo": "Sn",
        "MassaAtomica": 118.71,
        "Grupo": "14",
        "Periodo": 5,
        "PontoFusao": 232,
        "PontoEbulicao": 2270,
        "Fontes": "Cassiterite (oxide)",
        "Classe":"metais_representativos"
    }, {
        "Nome": "Antimônio",
        "Numero": 51,
        "Simbolo": "Sb",
        "MassaAtomica": 121.76,
        "Grupo": "15",
        "Periodo": 5,
        "PontoFusao": 631,
        "PontoEbulicao": 1950,
        "Fontes": "Stibnite (sulfide)",
        "Classe":"semimetais"
    }, {
        "Nome": "Telúrio",
        "Numero": 52,
        "Simbolo": "Te",
        "MassaAtomica": 127.6,
        "Grupo": "16",
        "Periodo": 5,
        "PontoFusao": 449.5,
        "PontoEbulicao": 989.8,
        "Fontes": "Zn/Pb smelting by-product",
        "Classe":"semimetais"
    }, {
        "Nome": "Iodo",
        "Numero": 53,
        "Simbolo": "I",
        "MassaAtomica": 126.90447,
        "Grupo": "17",
        "Periodo": 5,
        "PontoFusao": 113.5,
        "PontoEbulicao": 184,
        "Fontes": "Brines, Chilean nitrate (misc)",
        "Classe":"halogenios"
    }, {
        "Nome": "Xenônio",
        "Numero": 54,
        "Simbolo": "Xe",
        "MassaAtomica": 131293,
        "Grupo": "18",
        "Periodo": 5,
        "PontoFusao": -111.8,
        "PontoEbulicao": -107.1,
        "Fontes": "Air",
        "Classe":"gases_nobres"
    }, {
        "Nome": "Césio",
        "Numero": 55,
        "Simbolo": "Cs",
        "MassaAtomica": 132.905452,
        "Grupo": "1",
        "Periodo": 6,
        "PontoFusao": 28.4,
        "PontoEbulicao": 669,
        "Fontes": "Li extractn by-product",
        "Classe":"metais_alcalinos"
    }, {
        "Nome": "Bário",
        "Numero": 56,
        "Simbolo": "Ba",
        "MassaAtomica": 137327,
        "Grupo": "2",
        "Periodo": 6,
        "PontoFusao": 725,
        "PontoEbulicao": 1640,
        "Fontes": "Barite (sulfate)",
        "Classe":"metais_alcalinoterrosos"
    }, {
        "Nome": "Lantânio",
        "Numero": 57,
        "Simbolo": "La",
        "MassaAtomica": 138.90547,
        "Grupo": "Lantanídeos",
        "Periodo": 6,
        "PontoFusao": 920,
        "PontoEbulicao": 3454,
        "Fontes": "Monazite(phosphate),bastnaesite",
        "Classe":"lantanideos"
    }, {
        "Nome": "Cério",
        "Numero": 58,
        "Simbolo": "Ce",
        "MassaAtomica": 140116,
        "Grupo": "Lantanídeos",
        "Periodo": 6,
        "PontoFusao": 798,
        "PontoEbulicao": 3257,
        "Fontes": "Monazite(phosphate),bastnaesite",
        "Classe":"lantanideos"
    }, {
        "Nome": "Praseodímio",
        "Numero": 59,
        "Simbolo": "Pr",
        "MassaAtomica": 140.90766,
        "Grupo": "Lantanídeos",
        "Periodo": 6,
        "PontoFusao": 931,
        "PontoEbulicao": 3017,
        "Fontes": "Monazite(phosphate),bastnaesite",
        "Classe":"lantanideos"
    }, {
        "Nome": "Neodímio",
        "Numero": 60,
        "Simbolo": "Nd",
        "MassaAtomica": 144242,
        "Grupo": "Lantanídeos",
        "Periodo": 6,
        "PontoFusao": 1016,
        "PontoEbulicao": 3127,
        "Fontes": "Monazite(phosphate),bastnaesite",
        "Classe":"lantanideos"
    }, {
        "Nome": "Promécio",
        "Numero": 61,
        "Simbolo": "Pm",
        "MassaAtomica": 145,
        "Grupo": "Lantanídeos",
        "Periodo": 6,
        "PontoFusao": 1042,
        "PontoEbulicao": 3000,
        "Fontes": "Sintético",
        "Classe":"lantanideos"
    }, {
        "Nome": "Samário",
        "Numero": 62,
        "Simbolo": "Sm",
        "MassaAtomica": 150.36,
        "Grupo": "Lantanídeos",
        "Periodo": 6,
        "PontoFusao": 1074,
        "PontoEbulicao": 1794,
        "Fontes": "Monazite(phosphate),bastnaesite",
        "Classe":"lantanideos"
    }, {
        "Nome": "Európio",
        "Numero": 63,
        "Simbolo": "Eu",
        "MassaAtomica": 151964,
        "Grupo": "Lantanídeos",
        "Periodo": 6,
        "PontoFusao": 822,
        "PontoEbulicao": 1529,
        "Fontes": "Monazite(phosphate),bastnaesite",
        "Classe":"lantanideos"
    }, {
        "Nome": "Gadolínio",
        "Numero": 64,
        "Simbolo": "Gd",
        "MassaAtomica": 157.25,
        "Grupo": "Lantanídeos",
        "Periodo": 6,
        "PontoFusao": 1313,
        "PontoEbulicao": 3273,
        "Fontes": "Monazite(phosphate),bastnaesite",
        "Classe":"lantanideos"
    }, {
        "Nome": "Térbio",
        "Numero": 65,
        "Simbolo": "Tb",
        "MassaAtomica": 158.92535,
        "Grupo": "Lantanídeos",
        "Periodo": 6,
        "PontoFusao": 1365,
        "PontoEbulicao": 3230,
        "Fontes": "Monazite(phosphate),bastnaesite",
        "Classe":"lantanideos"
    }, {
        "Nome": "Disprósio",
        "Numero": 66,
        "Simbolo": "Dy",
        "MassaAtomica": 162.5,
        "Grupo": "Lantanídeos",
        "Periodo": 6,
        "PontoFusao": 1412,
        "PontoEbulicao": 2567,
        "Fontes": "Monazite(phosphate),bastnaesite",
        "Classe":"lantanideos"
    }, {
        "Nome": "Hólmio",
        "Numero": 67,
        "Simbolo": "Ho",
        "MassaAtomica": 164.93033,
        "Grupo": "Lantanídeos",
        "Periodo": 6,
        "PontoFusao": 1474,
        "PontoEbulicao": 2700,
        "Fontes": "Monazite(phosphate),bastnaesite",
        "Classe":"lantanideos"
    }, {
        "Nome": "Érbio",
        "Numero": 68,
        "Simbolo": "Er",
        "MassaAtomica": 167259,
        "Grupo": "Lantanídeos",
        "Periodo": 6,
        "PontoFusao": 1529,
        "PontoEbulicao": 2868,
        "Fontes": "Monazite(phosphate),bastnaesite",
        "Classe":"lantanideos"
    }, {
        "Nome": "Túlio",
        "Numero": 69,
        "Simbolo": "Tm",
        "MassaAtomica": 168.93422,
        "Grupo": "Lantanídeos",
        "Periodo": 6,
        "PontoFusao": 1545,
        "PontoEbulicao": 1950,
        "Fontes": "Monazite(phosphate),bastnaesite",
        "Classe":"lantanideos"
    }, {
        "Nome": "Itérbio",
        "Numero": 70,
        "Simbolo": "Yb",
        "MassaAtomica": 173054,
        "Grupo": "Lantanídeos",
        "Periodo": 6,
        "PontoFusao": 819,
        "PontoEbulicao": 1196,
        "Fontes": "Monazite(phosphate),bastnaesite",
        "Classe":"lantanideos"
    }, {
        "Nome": "Lutécio",
        "Numero": 71,
        "Simbolo": "Lu",
        "MassaAtomica": 174.9668,
        "Grupo": "3",
        "Periodo": 6,
        "PontoFusao": 1663,
        "PontoEbulicao": 3402,
        "Fontes": "Monazite(phosphate),bastnaesite",
        "Classe":"lantanideos"
    }, {
        "Nome": "Háfnio",
        "Numero": 72,
        "Simbolo": "Hf",
        "MassaAtomica": 178.49,
        "Grupo": "4",
        "Periodo": 6,
        "PontoFusao": 2227,
        "PontoEbulicao": 4600,
        "Fontes": "Zircon (silicate)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Tântalo",
        "Numero": 73,
        "Simbolo": "Ta",
        "MassaAtomica": 180.94788,
        "Grupo": "5",
        "Periodo": 6,
        "PontoFusao": 2996,
        "PontoEbulicao": 5425,
        "Fontes": "Tantalite (oxide)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Tungstênio",
        "Numero": 74,
        "Simbolo": "W",
        "MassaAtomica": 183.84,
        "Grupo": "6",
        "Periodo": 6,
        "PontoFusao": 3410,
        "PontoEbulicao": 5660,
        "Fontes": "Scheelite,wolframite(oxide)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Rênio",
        "Numero": 75,
        "Simbolo": "Re",
        "MassaAtomica": 186207,
        "Grupo": "7",
        "Periodo": 6,
        "PontoFusao": 3180,
        "PontoEbulicao": 5600,
        "Fontes": "Molybdenite (sulfide)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Ósmio",
        "Numero": 76,
        "Simbolo": "Os",
        "MassaAtomica": 190.23,
        "Grupo": "8",
        "Periodo": 6,
        "PontoFusao": 3045,
        "PontoEbulicao": 5030,
        "Fontes": "nickel ores (sulfides)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Iridio",
        "Numero": 77,
        "Simbolo": "Ir",
        "MassaAtomica": 192217,
        "Grupo": "9",
        "Periodo": 6,
        "PontoFusao": 2410,
        "PontoEbulicao": 4130,
        "Fontes": "nickel ores (sulfides)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Platina",
        "Numero": 78,
        "Simbolo": "Pt",
        "MassaAtomica": 195084,
        "Grupo": "10",
        "Periodo": 6,
        "PontoFusao": 1772,
        "PontoEbulicao": 3827,
        "Fontes": "nickel ores (sulfides)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Ouro",
        "Numero": 79,
        "Simbolo": "Au",
        "MassaAtomica": 196.966569,
        "Grupo": "11",
        "Periodo": 6,
        "PontoFusao": 1064,
        "PontoEbulicao": 3080,
        "Fontes": "Gold, gold bearing rock (misc)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Mercúrio",
        "Numero": 80,
        "Simbolo": "Hg",
        "MassaAtomica": 200592,
        "Grupo": "12",
        "Periodo": 6,
        "PontoFusao": -38.9,
        "PontoEbulicao": 357,
        "Fontes": "Cinnabar (sulfide)",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Tálio",
        "Numero": 81,
        "Simbolo": "Tl",
        "MassaAtomica": 204.3835,
        "Grupo": "13",
        "Periodo": 6,
        "PontoFusao": 303,
        "PontoEbulicao": 1457,
        "Fontes": "Zn/Pb smelting by-product",
        "Classe":"metais_representativos"
    }, {
        "Nome": "Chumbo",
        "Numero": 82,
        "Simbolo": "Pb",
        "MassaAtomica": 207.2,
        "Grupo": "14",
        "Periodo": 6,
        "PontoFusao": 327.5,
        "PontoEbulicao": 1740,
        "Fontes": "Galena (sulfide)",
        "Classe":"metais_representativos"
    }, {
        "Nome": "Bismuto",
        "Numero": 83,
        "Simbolo": "Bi",
        "MassaAtomica": 208.9804,
        "Grupo": "15",
        "Periodo": 6,
        "PontoFusao": 271,
        "PontoEbulicao": 1560,
        "Fontes": "Pb smelting by-product",
        "Classe":"metais_representativos"
    }, {
        "Nome": "Polônio",
        "Numero": 84,
        "Simbolo": "Po",
        "MassaAtomica": 209,
        "Grupo": "16",
        "Periodo": 6,
        "PontoFusao": 254,
        "PontoEbulicao": 962,
        "Fontes": "pitchblende, Sintético",
        "Classe":"semimetais"
    }, {
        "Nome": "Astato",
        "Numero": 85,
        "Simbolo": "At",
        "MassaAtomica": 210,
        "Grupo": "17",
        "Periodo": 6,
        "PontoFusao": 302,
        "PontoEbulicao": 337,
        "Fontes": "Sintético(Th or U decaimento)",
        "Classe":"halogenios"
    }, {
        "Nome": "Radônio",
        "Numero": 86,
        "Simbolo": "Rn",
        "MassaAtomica": 222,
        "Grupo": "18",
        "Periodo": 6,
        "PontoFusao": -71,
        "PontoEbulicao": -61.8,
        "Fontes": "Sintético(Ra-226 decaimento)",
        "Classe":"gases_nobres"
    }, {
        "Nome": "Frâncio",
        "Numero": 87,
        "Simbolo": "Fr",
        "MassaAtomica": 223,
        "Grupo": "1",
        "Periodo": 7,
        "PontoFusao": 27,
        "PontoEbulicao": 677,
        "Fontes": "Sintético(U-235 decaimento)",
        "Classe":"metais_alcalinos"
    }, {
        "Nome": "Rádio",
        "Numero": 88,
        "Simbolo": "Ra",
        "MassaAtomica": 226,
        "Grupo": "2",
        "Periodo": 7,
        "PontoFusao": 700,
        "PontoEbulicao": 1140,
        "Fontes": "pitchblende(U-238 decaimento)",
        "Classe":"metais_alcalinoterrosos"
    }, {
        "Nome": "Actínio",
        "Numero": 89,
        "Simbolo": "Ac",
        "MassaAtomica": 227,
        "Grupo": "Actinídeos",
        "Periodo": 7,
        "PontoFusao": 1050,
        "PontoEbulicao": 3200,
        "Fontes": "Sintético(U-235 decaimento)",
        "Classe":"actinideos"
    }, {
        "Nome": "Tório",
        "Numero": 90,
        "Simbolo": "Th",
        "MassaAtomica": 232.0377,
        "Grupo": "Actinídeos",
        "Periodo": 7,
        "PontoFusao": 1750,
        "PontoEbulicao": 4790,
        "Fontes": "Monazite(phosphate),U extractn",
        "Classe":"actinideos"
    }, {
        "Nome": "Protactínio",
        "Numero": 91,
        "Simbolo": "Pa",
        "MassaAtomica": 231.03588,
        "Grupo": "Actinídeos",
        "Periodo": 7,
        "PontoFusao": 1570,
        "PontoEbulicao": 4000,
        "Fontes": "Sintético(U-235 decaimento)",
        "Classe":"actinideos"
    }, {
        "Nome": "Urânio",
        "Numero": 92,
        "Simbolo": "U",
        "MassaAtomica": 238.02891,
        "Grupo": "Actinídeos",
        "Periodo": 7,
        "PontoFusao": 1132,
        "PontoEbulicao": 3818,
        "Fontes": "Uranite (oxide)",
        "Classe":"actinideos"
    }, {
        "Nome": "Netúnio",
        "Numero": 93,
        "Simbolo": "Np",
        "MassaAtomica": 237,
        "Grupo": "Actinídeos",
        "Periodo": 7,
        "PontoFusao": 640,
        "PontoEbulicao": 3900,
        "Fontes": "Sintético",
        "Classe":"actinideos"
    }, {
        "Nome": "Plutônio",
        "Numero": 94,
        "Simbolo": "Pu",
        "MassaAtomica": 244,
        "Grupo": "Actinídeos",
        "Periodo": 7,
        "PontoFusao": 641,
        "PontoEbulicao": 3232,
        "Fontes": "Sintético",
        "Classe":"actinideos"
    }, {
        "Nome": "Amerício",
        "Numero": 95,
        "Simbolo": "Am",
        "MassaAtomica": 243,
        "Grupo": "Actinídeos",
        "Periodo": 7,
        "PontoFusao": 994,
        "PontoEbulicao": 2607,
        "Fontes": "Sintético",
        "Classe":"actinideos"
    }, {
        "Nome": "Cúrio",
        "Numero": 96,
        "Simbolo": "Cm",
        "MassaAtomica": 247,
        "Grupo": "Actinídeos",
        "Periodo": 7,
        "PontoFusao": 1340,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"actinideos"
    }, {
        "Nome": "Berquélio",
        "Numero": 97,
        "Simbolo": "Bk",
        "MassaAtomica": 247,
        "Grupo": "Actinídeos",
        "Periodo": 7,
        "PontoFusao": 986,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"actinideos"
    }, {
        "Nome": "Califórnio",
        "Numero": 98,
        "Simbolo": "Cf",
        "MassaAtomica": 251,
        "Grupo": "Actinídeos",
        "Periodo": 7,
        "PontoFusao": NaN,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"actinideos"
    }, {
        "Nome": "Einstêinio",
        "Numero": 99,
        "Simbolo": "Es",
        "MassaAtomica": 252,
        "Grupo": "Actinídeos",
        "Periodo": 7,
        "PontoFusao": NaN,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"actinideos"
    }, {
        "Nome": "Férmio",
        "Numero": 100,
        "Simbolo": "Fm",
        "MassaAtomica": 257,
        "Grupo": "Actinídeos",
        "Periodo": 7,
        "PontoFusao": NaN,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"actinideos"
    }, {
        "Nome": "Mendelévio",
        "Numero": 101,
        "Simbolo": "Md",
        "MassaAtomica": 258,
        "Grupo": "Actinídeos",
        "Periodo": 7,
        "PontoFusao": NaN,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"actinideos"
    }, {
        "Nome": "Nobélio",
        "Numero": 102,
        "Simbolo": "No",
        "MassaAtomica": 259,
        "Grupo": "Actinídeos",
        "Periodo": 7,
        "PontoFusao": NaN,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"actinideos"
    }, {
        "Nome": "Laurêncio",
        "Numero": 103,
        "Simbolo": "Lr",
        "MassaAtomica": 262,
        "Grupo": "3",
        "Periodo": 7,
        "PontoFusao": NaN,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"actinideos"
    }, {
        "Nome": "Rutherfórdio",
        "Numero": 104,
        "Simbolo": "Rf",
        "MassaAtomica": 267,
        "Grupo": "4",
        "Periodo": 7,
        "PontoFusao": NaN,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Dúbnio",
        "Numero": 105,
        "Simbolo": "Db",
        "MassaAtomica": 268,
        "Grupo": "5",
        "Periodo": 7,
        "PontoFusao": NaN,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Seabórgio",
        "Numero": 106,
        "Simbolo": "Sg",
        "MassaAtomica": 271,
        "Grupo": "6",
        "Periodo": 7,
        "PontoFusao": NaN,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Bóhrio",
        "Numero": 107,
        "Simbolo": "Bh",
        "MassaAtomica": 272,
        "Grupo": "7",
        "Periodo": 7,
        "PontoFusao": NaN,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Hássio",
        "Numero": 108,
        "Simbolo": "Hs",
        "MassaAtomica": 270,
        "Grupo": "8",
        "Periodo": 7,
        "PontoFusao": NaN,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Meitnério",
        "Numero": 109,
        "Simbolo": "Mt",
        "MassaAtomica": 276,
        "Grupo": "9",
        "Periodo": 7,
        "PontoFusao": NaN,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Darmstácio",
        "Numero": 110,
        "Simbolo": "Ds",
        "MassaAtomica": 281,
        "Grupo": "10",
        "Periodo": 7,
        "PontoFusao": NaN,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Roentgênio",
        "Numero": 111,
        "Simbolo": "Rg",
        "MassaAtomica": 280,
        "Grupo": "11",
        "Periodo": 7,
        "PontoFusao": NaN,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Copernício",
        "Numero": 112,
        "Simbolo": "Cn",
        "MassaAtomica": 285,
        "Grupo": "12",
        "Periodo": 7,
        "PontoFusao": NaN,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"metais_de_transicao"
    }, {
        "Nome": "Niônio",
        "Numero": 113,
        "Simbolo": "Nh",
        "MassaAtomica": 284,
        "Grupo": "13",
        "Periodo": 7,
        "PontoFusao": NaN,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"metais_representativos"
    }, {
        "Nome": "Fleróvio",
        "Numero": 114,
        "Simbolo": "Fl",
        "MassaAtomica": 289,
        "Grupo": "14",
        "Periodo": 7,
        "PontoFusao": NaN,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"metais_representativos"
    }, {
        "Nome": "Moscóvio",
        "Numero": 115,
        "Simbolo": "Mc",
        "MassaAtomica": 288,
        "Grupo": "15",
        "Periodo": 7,
        "PontoFusao": NaN,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"metais_representativos"
    }, {
        "Nome": "Livermório",
        "Numero": 116,
        "Simbolo": "Lv",
        "MassaAtomica": 293,
        "Grupo": "16",
        "Periodo": 7,
        "PontoFusao": NaN,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"metais_representativos"
    }, {
        "Nome": "Tenessínio",
        "Numero": 117,
        "Simbolo": "Ts",
        "MassaAtomica": 292,
        "Grupo": "17",
        "Periodo": 7,
        "PontoFusao": NaN,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"halogenios"
    }, {
        "Nome": "Oganessônio",
        "Numero": 118,
        "Simbolo": "Og",
        "MassaAtomica": 294,
        "Grupo": "18",
        "Periodo": 7,
        "PontoFusao": NaN,
        "PontoEbulicao": NaN,
        "Fontes": "Sintético",
        "Classe":"gases_nobres"
    }
];

export default Elementos;