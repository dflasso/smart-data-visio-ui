import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
    tb: {
        marginVertical: 10,
        marginHorizontal: 20
    },
    tbRow: {
        flexDirection: "row"
    },
    tbCellDesription: {
        flexGrow: 1,
        backgroundColor: "#E4E4E4",
        borderStyle: "solid",
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 0,
        width: "25%"
    },
    tbCellInfo: {
        flexGrow: 3,
        borderStyle: "solid",
        borderTopWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 1,
        borderBottomWidth: 0,
        width: "75%"
    },
    tbCellLastDesription: {
        flexGrow: 1,
        backgroundColor: "#E4E4E4",
        borderStyle: "solid",
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        width: "25%"
    },
    tbCellLastInfo: {
        flexGrow: 3,
        borderStyle: "solid",
        borderTopWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        width: "75%"
    },
    tbText: {
        fontSize: 12,
        padding: 3
    },
    tbTextNum: {
        fontSize: 12,
        padding: 3,
        textAlign: "right"
    },
    subtitle: {
        fontWeight: "bold",
        fontSize: 14
    },
    tbResultsCellDescription: {
        flexGrow: 1,
        borderStyle: "solid",
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 0,
        width: "60%"
    },
    tbResultsCellInfo: {
        flexGrow: 3,
        borderStyle: "solid",
        borderTopWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 1,
        borderBottomWidth: 0,
        width: "40%"
    },
    tbResultsDividerCellDescription: {
        flexGrow: 1,
        borderStyle: "solid",
        backgroundColor: "#E4E4E4",
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 0,
        width: "60%"
    },
    tbResultsDividerCellInfo: {
        flexGrow: 3,
        backgroundColor: "#E4E4E4",
        borderStyle: "solid",
        borderTopWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 1,
        borderBottomWidth: 0,
        width: "40%"
    },
    tbResultsLastCellDescription: {
        flexGrow: 1,
        backgroundColor: "#E4E4E4",
        borderStyle: "solid",
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        width: "60%"
    },
    tbResultsLastCellInfo: {
        flexGrow: 3,
        borderStyle: "solid",
        borderTopWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        width: "40%"
    },
    card: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        borderWidth: 1,
        borderStyle: "solid"
    }
})