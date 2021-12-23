import { useState } from "react"

//Objeto por defecto agregado para las opciones deconocidas
const unknowOptionBase = {
    id: "1",
    label: "Otro",
    value: ""
}

/**
 * Encapsula la lógica del dialogo que despliega las opciones de cada tarjeta lang
 * @author dflasso
 * @param {Function} onSave - callback que recibe un objeto con toda la información de los objetos seleccionados por el paciente
 */
export default function useLangTaskOptions(onSave, idTask = "", descriptionTask = "") {
    const [open, setOpen] = useState(false)
    const [unknowOptions, setunknowOptions] = useState(null)

    /**
     * Abre el dialogo e inicializa los estados del componente
     */
    const handleClickOpen = () => {
        setOpen(true)
        setunknowOptions([unknowOptionBase])
    }

    /**
     * Cierra el dialo y borra los datos guardados en el estado del componente
     */
    const handleClose = () => {
        setunknowOptions(null)
        setOpen(false)
    }

    /**
     * Agrega un nuevo input para insertar una opción desconcida en la tarjeta lang
     */
    const handleClickAddUnknowOption = () => {
        const newId = Number(unknowOptions[unknowOptions.length - 1].id) + 1
        const newUnknowOptions = [...unknowOptions, { ...unknowOptionBase, id: newId.toString() }]
        if (Array.isArray(newUnknowOptions)) {
            setunknowOptions(newUnknowOptions)
        }
    }

    /**
     * Elimina un input con una opción desconcida de la tarjeta
     * @param {*} id - identificador del input
     */
    const handleClickDeleteUnknowOption = (id) => {
        setunknowOptions(preUnknowOptions => preUnknowOptions.filter(item => item.id !== id))
    }

    /**
     * recopila toda la información recoletada de la tarjeta de lang y la envia
     * <br/>
     * posterior a ello cierra el modal
     */
    const handleSave = () => {
        if (typeof onSave === "function") {
            onSave({
                idTask,
                descriptionTask,
                optionsSelected: [
                    {
                        idOption: "1",
                        descriptionOption: "Gato",
                        weighing: 450
                    },
                    {
                        idOption: "2",
                        descriptionOption: "Carro",
                        weighing: 1000
                    },
                    {
                        descriptionOption: "Avion",
                        weighing: 0
                    }
                ],
                tiemstampStart: new Date().toUTCString(),
                timestampEnd: new Date().toUTCString(),
                observations: "El paciente se ve agotado"
            })
        }
        handleClose()
    }

    return {
        /**
         * Estado que indica si el modal se encuentra abierto o cerrado
         */
        open,
        /**
         * Arreglo de objeto que almacena las opciones desconocidas que ingrese el usuario
         */
        unknowOptions,
        handleClickOpen,
        handleClose,
        handleClickAddUnknowOption,
        handleClickDeleteUnknowOption,
        handleSave
    }
}

