const pais = [
    {
        region: "Arica y Parinacota",
        region_iso_3166_2: "CL-AP",
        capital_regional: "Arica",
        provincias: [
            {
                nombre: "Arica",
                codigo: "ap01",
                capital_provincial: "Arica",
                comunas: [
                    {
                        nombre: "Arica",
                        codigo: "ap0101"
                    },
                    {
                        nombre: "Camarones",
                        codigo: "ap0102"
                    }
                ]
            },
            {
                nombre: "Parinacota",
                codigo: "ap02",
                capital_provincial: "Putre",
                comunas: [
                    {
                        nombre: "Putre",
                        codigo: "ap0201"
                    },
                    {
                        nombre: "General Lagos",
                        codigo: "ap0202"
                    }
                ]
            }
        ]
    },
    {
        region: "Tarapacá",
        region_iso_3166_2: "CL-TA",
        capital_regional: "Arica",
        provincias: [
            {
                nombre: "Iquique",
                codigo: "ta01",
                capital_provincial: "Iquique",
                comunas: [
                    {
                        nombre: "Iquique",
                        codigo: "ta0101"
                    },
                    {
                        nombre: "Alto Hospicio",
                        codigo: "ta0102"
                    }
                ]
            },
            {
                nombre: "Tamarugal",
                codigo: "ta02",
                capital_provincial: "Pozo Almonte",
                comunas: [
                    {
                        nombre: "Pozo Almonte",
                        codigo: "ta0201"
                    },
                    {
                        nombre: "Camiña",
                        codigo: "ta0202"
                    },
                    {
                        nombre: "Colchane",
                        codigo: "ta0203"
                    },
                    {
                        nombre: "Huara",
                        codigo: "ta0204"
                    },
                    {
                        nombre: "Pica",
                        codigo: "ta0205"
                    }
                ]
            }
        ]
    },
    {
        region: "Antofagasta",
        region_iso_3166_2: "CL-AN",
        capital_regional: "Antofagasta",
        provincias: [
            {
                nombre: "Antofagasta",
                codigo: "an01",
                capital_provincial: "Antofagasta",
                comunas: [
                    {
                        nombre: "Antofagasta",
                        codigo: "an0101"
                    },
                    {
                        nombre: "Mejillones",
                        codigo: "an0102"
                    },
                    {
                        nombre: "Sierra Gorda",
                        codigo: "an0103"
                    },
                    {
                        nombre: "Taltal",
                        codigo: "an0104"
                    }
                ]
            },
            {
                nombre: "El Loa",
                codigo: "an02",
                capital_provincial: "Calama",
                comunas: [
                    {
                        nombre: "Calama",
                        codigo: "an0201"
                    },
                    {
                        nombre: "Ollagüe",
                        codigo: "an0202"
                    },
                    {
                        nombre: "San Pedro de Atacama",
                        codigo: "an0203"
                    }
                ]
            },
            {
                nombre: "Tocopilla",
                codigo: "an03",
                capital_provincial: "Tocopilla",
                comunas: [
                    {
                        nombre: "Tocopilla",
                        codigo: "an0301"
                    },
                    {
                        nombre: "María Elena",
                        codigo: "an0302"
                    }
                ]
            }
        ]
    },
    {
        region: "Atacama",
        region_iso_3166_2: "CL-AT",
        capital_regional: "Copiapo",
        provincias: [
            {
                nombre: "Copiapó",
                codigo: "at01",
                capital_provincial: "Copiapo",
                comunas: [
                    {
                        nombre: "Copiapó",
                        codigo: "at0101"
                    },
                    {
                        nombre: "Caldera",
                        codigo: "at0102"
                    },
                    {
                        nombre: "Tierra Amarilla",
                        codigo: "at0103"
                    }
                ]
            },
            {
                nombre: "Chañaral",
                codigo: "at02",
                capital_provincial: "Chañaral",
                comunas: [
                    {
                        nombre: "Chañaral",
                        codigo: "at0201"
                    },
                    {
                        nombre: "Diego de Almagro",
                        codigo: "at0202"
                    }
                ]
            },
            {
                nombre: "Huasco",
                codigo: "at03",
                capital_provincial: "Vallenar",
                comunas: [
                    {
                        nombre: "Vallenar",
                        codigo: "at0301"
                    },
                    {
                        nombre: "Alto del Carmen",
                        codigo: "at0302"
                    },
                    {
                        nombre: "Freirina",
                        codigo: "at0303"
                    },
                    {
                        nombre: "Huasco",
                        codigo: "at0304"
                    }
                ]
            }
        ]
    },
    {
        region: "Coquimbo",
        region_iso_3166_2: "CL-CO",
        capital_regional: "La Serena",
        provincias: [
            {
                nombre: "Elqui",
                codigo: "co01",
                capital_provincial: "Coquimbo",
                comunas: [
                    {
                        nombre: "La Serena",
                        codigo: "co0101"
                    },
                    {
                        nombre: "Coquimbo",
                        codigo: "co0102"
                    },
                    {
                        nombre: "Andacollo",
                        codigo: "co0103"
                    },
                    {
                        nombre: "La Higuera",
                        codigo: "co0104"
                    },
                    {
                        nombre: "Paiguano",
                        codigo: "co0105"
                    },
                    {
                        nombre: "Vicuña",
                        codigo: "co0106"
                    }
                ]
            },
            {
                nombre: "Choapa",
                codigo: "co02",
                capital_provincial: "Illapel",
                comunas: [
                    {
                        nombre: "Illapel",
                        codigo: "co0201"
                    },
                    {
                        nombre: "Canela",
                        codigo: "co0202"
                    },
                    {
                        nombre: "Los Vilos",
                        codigo: "co0203"
                    },
                    {
                        nombre: "Salamanca",
                        codigo: "co0204"
                    }
                ]
            },
            {
                nombre: "Limarí",
                codigo: "co03",
                capital_provincial: "Ovalle",
                comunas: [
                    {
                        nombre: "Ovalle",
                        codigo: "co0301"
                    },
                    {
                        nombre: "Combarbalá",
                        codigo: "co0302"
                    },
                    {
                        nombre: "Monte Patria",
                        codigo: "co0303"
                    },
                    {
                        nombre: "Punitaqui",
                        codigo: "co0304"
                    },
                    {
                        nombre: "Río Hurtado",
                        codigo: "co0305"
                    }
                ]
            }
        ]
    },
    {
        region: "Valparaíso",
        region_iso_3166_2: "CL-VS",
        capital_regional: "Valparaíso",
        provincias: [
            {
                nombre: "Valparaíso",
                codigo: "vs01",
                capital_provincial: "Valparaíso",
                comunas: [
                    {
                        nombre: "Valparaíso",
                        codigo: "vs0101"
                    },
                    {
                        nombre: "Casablanca",
                        codigo: "vs0102"
                    },
                    {
                        nombre: "Concón",
                        codigo: "vs0103"
                    },
                    {
                        nombre: "Juan Fernández",
                        codigo: "vs0104"
                    },
                    {
                        nombre: "Puchuncaví",
                        codigo: "vs0105"
                    },
                    {
                        nombre: "Quintero",
                        codigo: "vs0107"
                    },
                    {
                        nombre: "Viña del Mar",
                        codigo: "vs0109"
                    }
                ]
            },
            {
                nombre: "Isla de Pascua",
                codigo: "vs02",
                capital_provincial: "Hanga Roa",
                comunas: [
                    {
                        nombre: "Isla de Pascua",
                        codigo: "vs0201"
                    }
                ]
            },
            {
                nombre: "Los Andes",
                codigo: "vs03",
                capital_provincial: "Los Andes",
                comunas: [
                    {
                        nombre: "Los Andes",
                        codigo: "vs0301"
                    },
                    {
                        nombre: "Calle Larga",
                        codigo: "vs0302"
                    },
                    {
                        nombre: "Riconada",
                        codigo: "vs0303"
                    },
                    {
                        nombre: "San Esteban",
                        codigo: "vs0304"
                    }
                ]
            },
            {
                nombre: "Petorca",
                codigo: "vs04",
                capital_provincial: "La Ligua",
                comunas: [
                    {
                        nombre: "La Ligua",
                        codigo: "vs0401"
                    },
                    {
                        nombre: "Cabildo",
                        codigo: "vs0402"
                    },
                    {
                        nombre: "Papudo",
                        codigo: "vs0403"
                    },
                    {
                        nombre: "Petorca",
                        codigo: "vs0404"
                    },
                    {
                        nombre: "Zapallar",
                        codigo: "vs0405"
                    }
                ]
            },
            {
                nombre: "Quillota",
                codigo: "vs05",
                capital_provincial: "Quillota",
                comunas: [
                    {
                        nombre: "Quillota",
                        codigo: "vs0501"
                    },
                    {
                        nombre: "Calera",
                        codigo: "vs0502"
                    },
                    {
                        nombre: "Hijuelas",
                        codigo: "vs0503"
                    },
                    {
                        nombre: "La Cruz",
                        codigo: "vs0504"
                    },
                    {
                        nombre: "Nogales",
                        codigo: "vs0506"
                    }
                ]
            },
            {
                nombre: "San Antonio",
                codigo: "vs06",
                capital_provincial: "San Antonio",
                comunas: [
                    {
                        nombre: "San Antonio",
                        codigo: "vs0601"
                    },
                    {
                        nombre: "Algarrobo",
                        codigo: "vs0602"
                    },
                    {
                        nombre: "Cartagena",
                        codigo: "vs0603"
                    },
                    {
                        nombre: "El Quisco",
                        codigo: "vs0604"
                    },
                    {
                        nombre: "El Tabo",
                        codigo: "vs0605"
                    },
                    {
                        nombre: "Santo Domingo",
                        codigo: "vs0606"
                    }
                ]
            },
            {
                nombre: "San Felipe de Aconcagua",
                codigo: "vs07",
                capital_provincial: "San Felipe",
                comunas: [
                    {
                        nombre: "San Felipe",
                        codigo: "vs0701"
                    },
                    {
                        nombre: "Catemu",
                        codigo: "vs0702"
                    },
                    {
                        nombre: "Llaillay",
                        codigo: "vs0703"
                    },
                    {
                        nombre: "Panquehue",
                        codigo: "vs0704"
                    },
                    {
                        nombre: "Putaendo",
                        codigo: "vs0705"
                    },
                    {
                        nombre: "Santa María",
                        codigo: "vs0706"
                    }
                ]
            },
            {
                nombre: "Marga Marga",
                codigo: "vs08",
                capital_provincial: "Quilpué",
                comunas: [
                    {
                        nombre: "Quilpué",
                        codigo: "vs0801"
                    },
                    {
                        nombre: "Limache",
                        codigo: "vs0802"
                    },
                    {
                        nombre: "Olmué",
                        codigo: "vs0803"
                    },
                    {
                        nombre: "Villa Alemana",
                        codigo: "vs0804"
                    }
                ]
            }
        ]
    },
    {
        region: "Región del Libertador Gral. Bernardo O'Higgins",
        region_iso_3166_2: "CL-LI",
        capital_regional: "Rancagua",
        provincias: [
            {
                nombre: "Cachapoal",
                codigo: "li01",
                capital_provincial: "Rancagua",
                comunas: [
                    {
                        nombre: "Rancagua",
                        codigo: "li0101"
                    },
                    {
                        nombre: "Codegua",
                        codigo: "li0102"
                    },
                    {
                        nombre: "Coinco",
                        codigo: "li0103"
                    },
                    {
                        nombre: "Coltauco",
                        codigo: "li0104"
                    },
                    {
                        nombre: "Doñihue",
                        codigo: "li0105"
                    },
                    {
                        nombre: "Graneros",
                        codigo: "li0106"
                    },
                    {
                        nombre: "Las Cabras",
                        codigo: "li0107"
                    },
                    {
                        nombre: "Machalí",
                        codigo: "li0108"
                    },
                    {
                        nombre: "Malloa",
                        codigo: "li0109"
                    },
                    {
                        nombre: "Mostazal",
                        codigo: "li0110"
                    },
                    {
                        nombre: "Olivar",
                        codigo: "li0111"
                    },
                    {
                        nombre: "Peumo",
                        codigo: "li0112"
                    },
                    {
                        nombre: "Pichidegua",
                        codigo: "li0113"
                    },
                    {
                        nombre: "Quinta de Tilcoco",
                        codigo: "li0114"
                    },
                    {
                        nombre: "Rengo",
                        codigo: "li0115"
                    },
                    {
                        nombre: "Requínoa",
                        codigo: "li0116"
                    },
                    {
                        nombre: "San Vicente",
                        codigo: "li0117"
                    }
                ]
            },
            {
                nombre: "Cardenal Caro",
                codigo: "li02",
                capital_provincial: "Pichilemu",
                comunas: [
                    {
                        nombre: "Pichilemu",
                        codigo: "li0201"
                    },
                    {
                        nombre: "La Estrella",
                        codigo: "li0202"
                    },
                    {
                        nombre: "Litueche",
                        codigo: "li0203"
                    },
                    {
                        nombre: "Marichihue",
                        codigo: "li0204"
                    },
                    {
                        nombre: "Navidad",
                        codigo: "li0205"
                    },
                    {
                        nombre: "Paredones",
                        codigo: "li0206"
                    }
                ]
            },
            {
                nombre: "Colchagua",
                codigo: "li03",
                capital_provincial: "San Fernando",
                comunas: [
                    {
                        nombre: "San Fernando",
                        codigo: "li0301"
                    },
                    {
                        nombre: "Chépica",
                        codigo: "li0302"
                    },
                    {
                        nombre: "Chimbarongo",
                        codigo: "li0303"
                    },
                    {
                        nombre: "Lolol",
                        codigo: "li0304"
                    },
                    {
                        nombre: "Nancagua",
                        codigo: "li0305"
                    },
                    {
                        nombre: "Palmilla",
                        codigo: "li0306"
                    },
                    {
                        nombre: "Peralillo",
                        codigo: "li0307"
                    },
                    {
                        nombre: "Placilla",
                        codigo: "li0308"
                    },
                    {
                        nombre: "Pumanque",
                        codigo: "li0309"
                    },
                    {
                        nombre: "Santa Cruz",
                        codigo: "li0310"
                    }
                ]
            }
        ]
    },
    {
        region: "Región del Maule",
        region_iso_3166_2: "CL-ML",
        capital_regional: "Talca",
        provincias: [
            {
                nombre: "Talca",
                codigo: "ml01",
                capital_provincial: "Talca",
                comunas: [
                    {
                        nombre: "Talca",
                        codigo: "ml0101"
                    },
                    {
                        nombre: "Constitución",
                        codigo: "ml0102"
                    },
                    {
                        nombre: "Curepto",
                        codigo: "ml0103"
                    },
                    {
                        nombre: "Empedrado",
                        codigo: "ml0104"
                    },
                    {
                        nombre: "Maule",
                        codigo: "ml0105"
                    },
                    {
                        nombre: "Pelarco",
                        codigo: "ml0106"
                    },
                    {
                        nombre: "Pencahue",
                        codigo: "ml0107"
                    },
                    {
                        nombre: "Río Claro",
                        codigo: "ml0108"
                    },
                    {
                        nombre: "San Clemente",
                        codigo: "ml0109"
                    },
                    {
                        nombre: "San Rafael",
                        codigo: "ml0110"
                    }
                ]
            },
            {
                nombre: "Cauquenes",
                codigo: "ml02",
                capital_provincial: "Cauquenes",
                comunas: [
                    {
                        nombre: "Cauquenes",
                        codigo: "ml0201"
                    },
                    {
                        nombre: "Chanco",
                        codigo: "ml0202"
                    },
                    {
                        nombre: "Pelluhue",
                        codigo: "ml0203"
                    }
                ]
            },
            {
                nombre: "Curicó",
                codigo: "ml03",
                capital_provincial: "Curicó",
                comunas: [
                    {
                        nombre: "Curicó",
                        codigo: "ml0301"
                    },
                    {
                        nombre: "Hualañé",
                        codigo: "ml0302"
                    },
                    {
                        nombre: "Licantén",
                        codigo: "ml0303"
                    },
                    {
                        nombre: "Molina",
                        codigo: "ml0304"
                    },
                    {
                        nombre: "Rauco",
                        codigo: "ml0305"
                    },
                    {
                        nombre: "Romeral",
                        codigo: "ml0306"
                    },
                    {
                        nombre: "Sagrada Familia",
                        codigo: "ml0307"
                    },
                    {
                        nombre: "Teno",
                        codigo: "ml0308"
                    },
                    {
                        nombre: "Vichuquén",
                        codigo: "ml0309"
                    }
                ]
            },
            {
                nombre: "Linares",
                codigo: "ml04",
                capital_provincial: "Linares",
                comunas: [
                    {
                        nombre: "Linares",
                        codigo: "ml0401"
                    },
                    {
                        nombre: "Colbún",
                        codigo: "ml0402"
                    },
                    {
                        nombre: "Longaví",
                        codigo: "ml0403"
                    },
                    {
                        nombre: "Parral",
                        codigo: "ml0404"
                    },
                    {
                        nombre: "Retiro",
                        codigo: "ml0405"
                    },
                    {
                        nombre: "San Javier",
                        codigo: "ml0406"
                    },
                    {
                        nombre: "Villa Alegre",
                        codigo: "ml0407"
                    },
                    {
                        nombre: "Yerbas Buenas",
                        codigo: "ml0408"
                    }
                ]
            }
        ]
    },
    {
        region: "Región del Biobío",
        region_iso_3166_2: "CL-BI",
        capital_regional: "Concepción",
        provincias: [
            {
                nombre: "Concepción",
                codigo: "bi01",
                capital_provincial: "Concepción",
                comunas: [
                    {
                        nombre: "Concepción",
                        codigo: "bi0101"
                    },
                    {
                        nombre: "Coronel",
                        codigo: "bi0102"
                    },
                    {
                        nombre: "Chiguayante",
                        codigo: "bi0103"
                    },
                    {
                        nombre: "Florida",
                        codigo: "bi0104"
                    },
                    {
                        nombre: "Hualqui",
                        codigo: "bi0105"
                    },
                    {
                        nombre: "Lota",
                        codigo: "bi0106"
                    },
                    {
                        nombre: "Penco",
                        codigo: "bi0107"
                    },
                    {
                        nombre: "San Pedro de la Paz",
                        codigo: "bi0108"
                    },
                    {
                        nombre: "Santa Juana",
                        codigo: "bi0109"
                    },
                    {
                        nombre: "Talcahuano",
                        codigo: "bi0110"
                    },
                    {
                        nombre: "Tomé",
                        codigo: "bi0111"
                    },
                    {
                        nombre: "Hualpén",
                        codigo: "bi0112"
                    }
                ]
            },
            {
                nombre: "Arauco",
                codigo: "bi02",
                capital_provincial: "Lebu",
                comunas: [
                    {
                        nombre: "Lebu",
                        codigo: "bi0201"
                    },
                    {
                        nombre: "Arauco",
                        codigo: "bi0202"
                    },
                    {
                        nombre: "Cañete",
                        codigo: "bi0203"
                    },
                    {
                        nombre: "Contulmo",
                        codigo: "bi0204"
                    },
                    {
                        nombre: "Curanilahue",
                        codigo: "bi0205"
                    },
                    {
                        nombre: "Los Álamos",
                        codigo: "bi0206"
                    },
                    {
                        nombre: "Tirúa",
                        codigo: "bi0207"
                    }
                ]
            },
            {
                nombre: "Biobío",
                codigo: "bi03",
                capital_provincial: "Los Ángeles",
                comunas: [
                    {
                        nombre: "Los Ángeles",
                        codigo: "bi0301"
                    },
                    {
                        nombre: "Antuco",
                        codigo: "bi0302"
                    },
                    {
                        nombre: "Cabrero",
                        codigo: "bi0303"
                    },
                    {
                        nombre: "Laja",
                        codigo: "bi0304"
                    },
                    {
                        nombre: "Mulchén",
                        codigo: "bi0305"
                    },
                    {
                        nombre: "Nacimiento",
                        codigo: "bi0306"
                    },
                    {
                        nombre: "Negrete",
                        codigo: "bi0307"
                    },
                    {
                        nombre: "Quilaco",
                        codigo: "bi0308"
                    },
                    {
                        nombre: "Quilleco",
                        codigo: "bi0309"
                    },
                    {
                        nombre: "San Rosendo",
                        codigo: "bi0310"
                    },
                    {
                        nombre: "Santa Bárbara",
                        codigo: "bi0311"
                    },
                    {
                        nombre: "Tucapel",
                        codigo: "bi0312"
                    },
                    {
                        nombre: "Yumbel",
                        codigo: "bi0313"
                    },
                    {
                        nombre: "Alto Biobío",
                        codigo: "bi0314"
                    }
                ]
            }
        ]
    },
    {
        region: "Región del Ñuble",
        region_iso_3166_2: "CL-NB",
        capital_regional: "Chillán",
        provincias: [
            {
                nombre: "Diguillín",
                codigo: "nb01",
                capital_provincial: "Bulnes",
                comunas: [
                    {
                        nombre: "Bulnes",
                        codigo: "nb0101"
                    },
                    {
                        nombre: "Chillán",
                        codigo: "nb0102"
                    },
                    {
                        nombre: "Chillán Viejo",
                        codigo: "nb0103"
                    },
                    {
                        nombre: "El Carmen",
                        codigo: "nb0104"
                    },
                    {
                        nombre: "Pemuco",
                        codigo: "nb0105"
                    },
                    {
                        nombre: "Pinto",
                        codigo: "nb0106"
                    },
                    {
                        nombre: "Quillón",
                        codigo: "nb0107"
                    },
                    {
                        nombre: "San Ignacio",
                        codigo: "nb0108"
                    },
                    {
                        nombre: "Yungay",
                        codigo: "nb0109"
                    }
                ]
            },
            {
                nombre: "Itata",
                codigo: "nb02",
                capital_provincial: "Quirihue",
                comunas: [
                    {
                        nombre: "Cobquecura",
                        codigo: "nb0201"
                    },
                    {
                        nombre: "Coelemu",
                        codigo: "nb0202"
                    },
                    {
                        nombre: "Ninhue",
                        codigo: "nb0203"
                    },
                    {
                        nombre: "Portezuelo",
                        codigo: "nb0204"
                    },
                    {
                        nombre: "Quirihue",
                        codigo: "nb0205"
                    },
                    {
                        nombre: "Ránquil",
                        codigo: "nb0206"
                    },
                    {
                        nombre: "Treguaco",
                        codigo: "nb0207"
                    }
                ]
            },
            {
                nombre: "Punilla",
                codigo: "nb03",
                capital_provincial: "San Carlos",
                comunas: [
                    {
                        nombre: "Coihueco",
                        codigo: "nb0301"
                    },
                    {
                        nombre: "Ñiquén",
                        codigo: "nb0302"
                    },
                    {
                        nombre: "San Carlos",
                        codigo: "nb0303"
                    },
                    {
                        nombre: "San Fabián",
                        codigo: "nb0304"
                    },
                    {
                        nombre: "San Nicolas",
                        codigo: "nb0305"
                    }
                ]
            }
        ]
    },
    {
        region: "Región de la Araucanía",
        region_iso_3166_2: "CL-AR",
        capital_regional: "Temuco",
        provincias: [
            {
                nombre: "Cautín",
                codigo: "ar01",
                capital_provincial: "Temuco",
                comunas: [
                    {
                        nombre: "Temuco",
                        codigo: "ar0101"
                    },
                    {
                        nombre: "Carahu",
                        codigo: "ar0102"
                    },
                    {
                        nombre: "Cunco",
                        codigo: "ar0103"
                    },
                    {
                        nombre: "Curarrehue",
                        codigo: "ar0104"
                    },
                    {
                        nombre: "Freire",
                        codigo: "ar0105"
                    },
                    {
                        nombre: "Galvarin",
                        codigo: "ar0106"
                    },
                    {
                        nombre: "Gorbea",
                        codigo: "ar0107"
                    },
                    {
                        nombre: "Lautaro",
                        codigo: "ar0108"
                    },
                    {
                        nombre: "Loncoche",
                        codigo: "ar0109"
                    },
                    {
                        nombre: "Melipeuco",
                        codigo: "ar0110"
                    },
                    {
                        nombre: "Nueva Imperial",
                        codigo: "ar0111"
                    },
                    {
                        nombre: "Padre las Casa",
                        codigo: "ar0112"
                    },
                    {
                        nombre: "Perquenco",
                        codigo: "ar0113"
                    },
                    {
                        nombre: "Pitrufquén",
                        codigo: "ar0114"
                    },
                    {
                        nombre: "Pucó",
                        codigo: "ar0115"
                    },
                    {
                        nombre: "Saavedra",
                        codigo: "ar0116"
                    },
                    {
                        nombre: "Teodoro Schmid",
                        codigo: "ar0117"
                    },
                    {
                        nombre: "Toltén",
                        codigo: "ar0118"
                    },
                    {
                        nombre: "Vilcún",
                        codigo: "ar0119"
                    },
                    {
                        nombre: "Villarrica",
                        codigo: "ar0120"
                    },
                    {
                        nombre: "Cholchol",
                        codigo: "ar0121"
                    }
                ]
            },
            {
                nombre: "Malleco",
                codigo: "ar02",
                capital_provincial: "Angol",
                comunas: [
                    {
                        nombre: "Angol",
                        codigo: "ar0201"
                    },
                    {
                        nombre: "Collipulli",
                        codigo: "ar0202"
                    },
                    {
                        nombre: "Curacautín",
                        codigo: "ar0203"
                    },
                    {
                        nombre: "Ercilla",
                        codigo: "ar0204"
                    },
                    {
                        nombre: "Lonquimay",
                        codigo: "ar0205"
                    },
                    {
                        nombre: "Los Sauces",
                        codigo: "ar0206"
                    },
                    {
                        nombre: "Lumaco",
                        codigo: "ar0207"
                    },
                    {
                        nombre: "Purén",
                        codigo: "ar0208"
                    },
                    {
                        nombre: "Renaico",
                        codigo: "ar0209"
                    },
                    {
                        nombre: "Traiguén",
                        codigo: "ar0210"
                    },
                    {
                        nombre: "Victoria",
                        codigo: "ar0211"
                    }
                ]
            }
        ]
    },
    {
        region: "Región de los Ríos",
        region_iso_3166_2: "CL-LR",
        capital_regional: "Valdivia",
        provincias: [
            {
                nombre: "Valdivia",
                codigo: "lr01",
                capital_provincial: "Valdivia",
                comunas: [
                    {
                        nombre: "Valdivia",
                        codigo: "lr0101"
                    },
                    {
                        nombre: "Corral",
                        codigo: "lr0102"
                    },
                    {
                        nombre: "Lanco",
                        codigo: "lr0103"
                    },
                    {
                        nombre: "Los Lagos",
                        codigo: "lr0104"
                    },
                    {
                        nombre: "Máfil",
                        codigo: "lr0105"
                    },
                    {
                        nombre: "Mariquina",
                        codigo: "lr0106"
                    },
                    {
                        nombre: "Paillaco",
                        codigo: "lr0107"
                    },
                    {
                        nombre: "Panguipulli",
                        codigo: "lr0108"
                    }
                ]
            },
            {
                nombre: "Ranco",
                codigo: "lr02",
                capital_provincial: "La Unión",
                comunas: [
                    {
                        nombre: "La Unión",
                        codigo: "lr0201"
                    },
                    {
                        nombre: "Futrono",
                        codigo: "lr0202"
                    },
                    {
                        nombre: "Lago Ranco",
                        codigo: "lr0203"
                    },
                    {
                        nombre: "Río Bueno",
                        codigo: "lr0204"
                    }
                ]
            }
        ]
    },
    {
        region: "Región de los Lagos",
        region_iso_3166_2: "CL-LL",
        capital_regional: "Puerto Montt",
        provincias: [
            {
                nombre: "Llanquihue",
                codigo: "ll01",
                capital_provincial: "Puerto Montt",
                comunas: [
                    {
                        nombre: "Puerto Montt",
                        codigo: "ll0101"
                    },
                    {
                        nombre: "Calbuco",
                        codigo: "ll0102"
                    },
                    {
                        nombre: "Cochamó",
                        codigo: "ll0103"
                    },
                    {
                        nombre: "Fresia",
                        codigo: "ll0104"
                    },
                    {
                        nombre: "Frutillar",
                        codigo: "ll0105"
                    },
                    {
                        nombre: "Los Muermos",
                        codigo: "ll0106"
                    },
                    {
                        nombre: "Llanquihue",
                        codigo: "ll0107"
                    },
                    {
                        nombre: "Maullín",
                        codigo: "ll0108"
                    },
                    {
                        nombre: "Puerto Varas",
                        codigo: "ll0109"
                    }
                ]
            },
            {
                nombre: "Chiloé",
                codigo: "ll02",
                capital_provincial: "Castro",
                comunas: [
                    {
                        nombre: "Castro",
                        codigo: "ll0201"
                    },
                    {
                        nombre: "Ancud",
                        codigo: "ll0202"
                    },
                    {
                        nombre: "Chonchi",
                        codigo: "ll0203"
                    },
                    {
                        nombre: "Curaco de Vélez",
                        codigo: "ll0204"
                    },
                    {
                        nombre: "Dalcahue",
                        codigo: "ll0205"
                    },
                    {
                        nombre: "Puqueldón",
                        codigo: "ll0206"
                    },
                    {
                        nombre: "Queilén",
                        codigo: "ll0207"
                    },
                    {
                        nombre: "Quellón",
                        codigo: "ll0208"
                    },
                    {
                        nombre: "Quemchi",
                        codigo: "ll0209"
                    },
                    {
                        nombre: "Quinchao",
                        codigo: "ll0210"
                    }
                ]
            },
            {
                nombre: "Osorno",
                codigo: "ll03",
                capital_provincial: "Osorno",
                comunas: [
                    {
                        nombre: "Osorno",
                        codigo: "ll0301"
                    },
                    {
                        nombre: "Puerto Octay",
                        codigo: "ll0302"
                    },
                    {
                        nombre: "Purranque",
                        codigo: "ll0303"
                    },
                    {
                        nombre: "Puyehue",
                        codigo: "ll0304"
                    },
                    {
                        nombre: "Río Negro",
                        codigo: "ll0305"
                    },
                    {
                        nombre: "San Juan de la Costa",
                        codigo: "ll0306"
                    },
                    {
                        nombre: "San Pablo",
                        codigo: "ll0307"
                    }
                ]
            },
            {
                nombre: "Palena",
                codigo: "ll04",
                capital_provincial: "Chaitén",
                comunas: [
                    {
                        nombre: "Chaitén",
                        codigo: "ll0401"
                    },
                    {
                        nombre: "Futaleufú",
                        codigo: "ll0402"
                    },
                    {
                        nombre: "Hualaihué",
                        codigo: "ll0403"
                    },
                    {
                        nombre: "Palena",
                        codigo: "ll0404"
                    }
                ]
            }
        ]
    },
    {
        region: "Región Aisén del Gral. Carlos Ibañez del Campo",
        region_iso_3166_2: "CL-AI",
        capital_regional: "Coyhaique",
        provincias: [
            {
                nombre: "Coyhaique",
                codigo: "ai01",
                capital_provincial: "Coyhaique",
                comunas: [
                    {
                        nombre: "Coyhaique",
                        codigo: "ai0101"
                    },
                    {
                        nombre: "Lago Verde",
                        codigo: "ai0102"
                    }
                ]
            },
            {
                nombre: "Aysén",
                codigo: "ai02",
                capital_provincial: "Puerto Aysén",
                comunas: [
                    {
                        nombre: "Aisén",
                        codigo: "ai0201"
                    },
                    {
                        nombre: "Cisnes",
                        codigo: "ai0202"
                    },
                    {
                        nombre: "Guaitecas",
                        codigo: "ai0203"
                    }
                ]
            },
            {
                nombre: "Capitán Pratt",
                codigo: "ai03",
                capital_provincial: "Cochrane",
                comunas: [
                    {
                        nombre: "Cochrane",
                        codigo: "ai0301"
                    },
                    {
                        nombre: "O’Higgins",
                        codigo: "ai0302"
                    },
                    {
                        nombre: "Tortel",
                        codigo: "ai0303"
                    }
                ]
            },
            {
                nombre: "General Carrera",
                codigo: "ai04",
                capital_provincial: "Chile Chico",
                comunas: [
                    {
                        nombre: "Chile Chico",
                        codigo: "ai0401"
                    },
                    {
                        nombre: "Río Ibáñez",
                        codigo: "ai0402"
                    }
                ]
            }
        ]
    },
    {
        region: "Región de Magallanes y de la Antártica Chilena",
        region_iso_3166_2: "CL-MA",
        capital_regional: "Punta Arenas",
        provincias: [
            {
                nombre: "Magallanes",
                codigo: "ma01",
                capital_provincial: "Punta Arenas",
                comunas: [
                    {
                        nombre: "Punta Arenas",
                        codigo: "ma0101"
                    },
                    {
                        nombre: "Laguna Blanca",
                        codigo: "ma0102"
                    },
                    {
                        nombre: "Río Verde",
                        codigo: "ma0103"
                    },
                    {
                        nombre: "San Gregorio",
                        codigo: "ma0104"
                    }
                ]
            },
            {
                nombre: "Antártica Chilena",
                codigo: "ma02",
                capital_provincial: "Puerto Williams",
                comunas: [
                    {
                        nombre: "Cabo de Hornos (Ex. Navarino)",
                        codigo: "ma0201"
                    },
                    {
                        nombre: "Antártica",
                        codigo: "ma0202"
                    }
                ]
            },
            {
                nombre: "Tierra del Fuego",
                codigo: "ma03",
                capital_provincial: "Porvenir",
                comunas: [
                    {
                        nombre: "Porvenir",
                        codigo: "ma0301"
                    },
                    {
                        nombre: "Primavera",
                        codigo: "ma0302"
                    },
                    {
                        nombre: "Timaukel",
                        codigo: "ma0303"
                    }
                ]
            },
            {
                nombre: "Última Esperanza",
                codigo: "ma04",
                capital_provincial: "Puerto Natales",
                comunas: [
                    {
                        nombre: "Natales",
                        codigo: "ma0401"
                    },
                    {
                        nombre: "Torres del Paine",
                        codigo: "ma0402"
                    }
                ]
            }
        ]
    },
    {
        region: "Región Metropolitana de Santiago",
        region_iso_3166_2: "CL-RM",
        capital_regional: "Santiago",
        provincias: [
            {
                nombre: "Santiago",
                codigo: "rm01",
                capital_provincial: "Santiago",
                comunas: [
                    {
                        nombre: "Santiago",
                        codigo: "rm0101"
                    },
                    {
                        nombre: "Cerrillos",
                        codigo: "rm0102"
                    },
                    {
                        nombre: "Cerro Navia",
                        codigo: "rm0103"
                    },
                    {
                        nombre: "Conchalí",
                        codigo: "rm0104"
                    },
                    {
                        nombre: "El Bosque",
                        codigo: "rm0105"
                    },
                    {
                        nombre: "Estación Central",
                        codigo: "rm0106"
                    },
                    {
                        nombre: "Huechuraba",
                        codigo: "rm0107"
                    },
                    {
                        nombre: "Independencia",
                        codigo: "rm0108"
                    },
                    {
                        nombre: "La Cisterna",
                        codigo: "rm0109"
                    },
                    {
                        nombre: "La Florida",
                        codigo: "rm0110"
                    },
                    {
                        nombre: "La Granja",
                        codigo: "rm0111"
                    },
                    {
                        nombre: "La Pintana",
                        codigo: "rm0112"
                    },
                    {
                        nombre: "La Reina",
                        codigo: "rm0113"
                    },
                    {
                        nombre: "Las Condes",
                        codigo: "rm0114"
                    },
                    {
                        nombre: "Lo Barnechea",
                        codigo: "rm0115"
                    },
                    {
                        nombre: "Lo Espejo",
                        codigo: "rm0116"
                    },
                    {
                        nombre: "Lo Prado",
                        codigo: "rm0117"
                    },
                    {
                        nombre: "Macul",
                        codigo: "rm0118"
                    },
                    {
                        nombre: "Maipú",
                        codigo: "rm0119"
                    },
                    {
                        nombre: "Ñuñoa",
                        codigo: "rm0120"
                    },
                    {
                        nombre: "Pedro Aguirre Cerda",
                        codigo: "rm0121"
                    },
                    {
                        nombre: "Peñalolén",
                        codigo: "rm0122"
                    },
                    {
                        nombre: "Providencia",
                        codigo: "rm0123"
                    },
                    {
                        nombre: "Pudahuel",
                        codigo: "rm0124"
                    },
                    {
                        nombre: "Quilicura",
                        codigo: "rm0125"
                    },
                    {
                        nombre: "Quinta Normal",
                        codigo: "rm0126"
                    },
                    {
                        nombre: "Recoleta",
                        codigo: "rm0127"
                    },
                    {
                        nombre: "Renca",
                        codigo: "rm0128"
                    },
                    {
                        nombre: "San Joaquín",
                        codigo: "rm0129"
                    },
                    {
                        nombre: "San Miguel",
                        codigo: "rm0130"
                    },
                    {
                        nombre: "San Ramón",
                        codigo: "rm0131"
                    },
                    {
                        nombre: "Vitacura",
                        codigo: "rm0132"
                    }
                ]
            },
            {
                nombre: "Cordillera",
                codigo: "rm02",
                capital_provincial: "Puente Alto",
                comunas: [
                    {
                        nombre: "Puente Alto",
                        codigo: "rm0201"
                    },
                    {
                        nombre: "Pirque",
                        codigo: "rm0202"
                    },
                    {
                        nombre: "San José de Maipo",
                        codigo: "rm0203"
                    }
                ]
            },
            {
                nombre: "Chacabuco",
                codigo: "rm03",
                capital_provincial: "Colina",
                comunas: [
                    {
                        nombre: "Colina",
                        codigo: "rm0301"
                    },
                    {
                        nombre: "Lampa",
                        codigo: "rm0302"
                    },
                    {
                        nombre: "Tiltil",
                        codigo: "rm0303"
                    }
                ]
            },
            {
                nombre: "Maipo",
                codigo: "rm04",
                capital_provincial: "San Bernardo",
                comunas: [
                    {
                        nombre: "San Bernardo",
                        codigo: "rm0401"
                    },
                    {
                        nombre: "Buin",
                        codigo: "rm0402"
                    },
                    {
                        nombre: "Calera de Tango",
                        codigo: "rm0403"
                    },
                    {
                        nombre: "Paine",
                        codigo: "rm0404"
                    }
                ]
            },
            {
                nombre: "Mellipilla",
                codigo: "rm05",
                capital_provincial: "Melipilla",
                comunas: [
                    {
                        nombre: "Melipilla",
                        codigo: "rm0501"
                    },
                    {
                        nombre: "Alhué",
                        codigo: "rm0502"
                    },
                    {
                        nombre: "Curacaví",
                        codigo: "rm0503"
                    },
                    {
                        nombre: "María Pinto",
                        codigo: "rm0504"
                    },
                    {
                        nombre: "San Pedro",
                        codigo: "rm0505"
                    }
                ]
            },
            {
                nombre: "Talagante",
                codigo: "rm06",
                capital_provincial: "Talagante",
                comunas: [
                    {
                        nombre: "Talagante",
                        codigo: "rm0601"
                    },
                    {
                        nombre: "El Monte",
                        codigo: "rm0602"
                    },
                    {
                        nombre: "Isla de Maipo",
                        codigo: "rm0603"
                    },
                    {
                        nombre: "Padre Hurtado",
                        codigo: "rm0604"
                    },
                    {
                        nombre: "Peñaflor",
                        codigo: "rm0605"
                    }
                ]
            }
        ]
    }
]

const regiones = pais.map(x=>x.region);

/*
regiones.forEach(elementos=>{
    console.log(elementos.region+" "+elementos.region_iso_3166_2);    
})
*/

console.log("Regiones", regiones);
//console.log(regiones);

//let regionFiltrada=pais.map(x=>x.region=="Región del Biobío");

let regionFiltrada=pais.filter(x=>x.region=="Región del Biobío")
console.log("Region ",regionFiltrada[regionFiltrada.length-1]);

let provincias=regionFiltrada[regionFiltrada.length-1].provincias.map(x=>x.nombre);

console.log("Provincias ",provincias);

let provinciaFiltrada=regionFiltrada[regionFiltrada.length-1].provincias.filter(x=>x.nombre=="Arauco");
console.log("Comunas ",provinciaFiltrada[provinciaFiltrada.length-1].comunas);

let comuna=provinciaFiltrada[provinciaFiltrada.length-1].comunas.map(x=>x.nombre);
console.log("Comuna",comuna);


/*
let provincias=regionFiltrada[regionFiltrada.length-1].provincias.map(function(provincia){ 
    console.log(provincia.nombre+" "+provincia.codigo);
});

console.log(provincias)
*/



