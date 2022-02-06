import { StyleSheet } from '@react-pdf/renderer';

export const stylesBase = StyleSheet.create({
    page: {
        flexDirection: 'block',
        backgroundColor: '#FFF'
    },
    section: {
        margin: 0,
        padding: 10,
        display: "flex"
    },
    sectionAlignRight: {
        margin: 0,
        padding: 0,
        display: "flex",
        alignContent: "center",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    sectionAlignCenter: {
        margin: 0,
        padding: 2,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    grid: {
        flex: 1
    },
    gridLogo: {
        width: "3in",
        padding: 5,
        marginBottom: 2,
        marginRight: 2
    },
    logo: {
        width: "100%",
        height: "100%"
    }
});