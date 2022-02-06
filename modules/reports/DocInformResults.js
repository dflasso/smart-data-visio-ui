import { Page, Text, View, Document, Svg, Line } from '@react-pdf/renderer';

import { stylesBase } from "./styles/BaseStyles";
import { styles } from "./styles/DocInformResultsStyles";
import DocHeader from './templates/DocHeader';

const inputDTOMock = {
    document: {
        title: "Informe de Resultados",
        language: "es"
    },
    test_group: {
        id: 25,
        created_at: "2022-01-28"
    },
    patient: {
        names: "Alexander",
        lastname: "Chiguano",
        age: 43
    }
}


export default function DocInformResults({ inputDTO = inputDTOMock }) {
    return (
        <Document title={inputDTO.document.title} language={inputDTO.document.language} >
            <Page size="A4" style={stylesBase.page}>
                <DocHeader title="Pruebas diagnósticas oftalmológicas" />
                <View style={styles.tb}>
                    <View style={styles.tbRow}>
                        <View style={styles.tbCellDesription} >
                            <Text style={styles.tbText} >Número de Análisis:</Text>
                        </View>
                        <View style={styles.tbCellInfo} >
                            <Text style={styles.tbText} >{inputDTO.test_group.id}</Text>
                        </View>
                    </View>
                    <View style={styles.tbRow}>
                        <View style={styles.tbCellDesription} >
                            <Text style={styles.tbText} >Fecha del Análisis:</Text>
                        </View>
                        <View style={styles.tbCellInfo} >
                            <Text style={styles.tbText} >{inputDTO.test_group.created_at}</Text>
                        </View>
                    </View>
                    <View style={styles.tbRow}>
                        <View style={styles.tbCellDesription} >
                            <Text style={styles.tbText} >Nombre del Paciente:</Text>
                        </View>
                        <View style={styles.tbCellInfo} >
                            <Text style={styles.tbText} >{inputDTO.patient.names}  {inputDTO.patient.lastname}</Text>
                        </View>
                    </View>
                    <View style={styles.tbRow}>
                        <View style={styles.tbCellLastDesription} >
                            <Text style={styles.tbText} >Edad del Paciente:</Text>
                        </View>
                        <View style={styles.tbCellLastInfo} >
                            <Text style={styles.tbText} >{inputDTO.patient.age} </Text>
                        </View>
                    </View>
                </View>
                <Svg height="1" width="800" >
                    <Line
                        x1="10"
                        x2="580"
                        y1="0"
                        y2="0"
                        strokeWidth={1}
                        stroke="rgb(0,0,0)" />
                </Svg>
                <View style={styles.tb}>
                    <Text style={styles.subtitle} >Resultados</Text>
                    <View style={styles.tb}>
                        <View style={styles.tbRow} >
                            <View style={styles.tbResultsCellDescription}>

                            </View>
                            <View style={styles.tbResultsCellInfo}>
                                <Text style={styles.tbText} > Porcentaje de Aciertos</Text>
                            </View>
                        </View>
                        <View style={styles.tbRow} >
                            <View style={styles.tbResultsDividerCellDescription}>
                                <Text style={styles.tbText}>  Pruebas Clásicas</Text>
                            </View>
                            <View style={styles.tbResultsDividerCellInfo}>
                            </View>
                        </View>
                        <View style={styles.tbRow} >
                            <View style={styles.tbResultsCellDescription}>
                                <Text style={styles.tbText}> Lang</Text>
                            </View>
                            <View style={styles.tbResultsCellInfo}>
                                <Text style={styles.tbTextNum}> 25,80%</Text>
                            </View>
                        </View>
                        <View style={styles.tbRow} >
                            <View style={styles.tbResultsCellDescription}>
                                <Text style={styles.tbText}> Ishihara</Text>
                            </View>
                            <View style={styles.tbResultsCellInfo}>
                                <Text style={styles.tbTextNum}> 25,80% </Text>
                            </View>
                        </View>
                        <View style={styles.tbRow} >
                            <View style={styles.tbResultsDividerCellDescription}>
                                <Text style={styles.tbText}>  Pruebas Virtuales </Text>
                            </View>
                            <View style={styles.tbResultsDividerCellInfo}>

                            </View>
                        </View>
                        <View style={styles.tbRow} >
                            <View style={styles.tbResultsCellDescription}>
                                <Text style={styles.tbText}>Percepción de profundidad</Text>
                            </View>
                            <View style={styles.tbResultsCellInfo}>
                                <Text style={styles.tbTextNum}> 25,80% </Text>
                            </View>
                        </View>
                        <View style={styles.tbRow} >
                            <View style={styles.tbResultsCellDescription}>
                                <Text style={styles.tbText}> Percepción de color </Text>
                            </View>
                            <View style={styles.tbResultsCellInfo}>
                                <Text style={styles.tbTextNum}>  25,80% </Text>
                            </View>
                        </View>
                        <View style={styles.tbRow} >
                            <View style={styles.tbResultsCellDescription}>
                                <Text style={styles.tbText}>   Campo Visual </Text>
                            </View>
                            <View style={styles.tbResultsCellInfo}>
                                <Text style={styles.tbTextNum}>  25,80% </Text>
                            </View>
                        </View>
                        <View style={styles.tbRow} >
                            <View style={styles.tbResultsLastCellDescription}>
                                <Text style={styles.tbText}>   Total </Text>
                            </View>
                            <View style={styles.tbResultsLastCellInfo}>
                                <Text style={styles.tbTextNum}>  98,80% </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <Svg height="1" width="800" >
                    <Line
                        x1="10"
                        x2="580"
                        y1="0"
                        y2="0"
                        strokeWidth={1}
                        stroke="rgb(0,0,0)" />
                </Svg>
                <View style={styles.tb}>
                    <Text style={styles.subtitle} > Recomendación/Sugerencia:</Text>
                    <View style={styles.card} >
                        <Text style={styles.tbText}>   No se han encontrado deficiencias visuales.</Text>
                    </View>
                </View>
                <View style={styles.tb}>
                    <Text style={styles.subtitle} >Notas:</Text>
                    <View style={styles.card} >

                    </View>
                </View>
            </Page>
        </Document>
    )
}
