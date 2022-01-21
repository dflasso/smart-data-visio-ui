import { useState } from "react"

const generateCurrentDateTime = () => {
    let now = new Date()
    return `${now.getFullYear()}-${Number(now.getMonth()) + 1}-${now.getDate()}T${now.getHours()}:${now.getMinutes()}`
}

/**
 * Encapsula la lógica del dialogo que despliega las opciones de cada tarjeta lang
 * @author dflasso
 * @param {Function} onSave - callback que recibe un objeto con toda la información de los objetos seleccionados por el paciente
 */
export default function useLangTaskOptions(onSave, idTask = "", descriptionTask = "", optionsKnow = []) {
    const [open, setOpen] = useState(false)
    const [unknowOptions, setunknowOptions] = useState([])
    const [itemsCards, setItemsCards] = useState([])
    const [startedAt, setStartedAt] = useState(null)
    const [observations, setObservations] = useState("")

    const handleChangeObservations = (event) => {
        setObservations(event.target.value);
    };

    /**
     * Abre el dialogo e inicializa los estados del componente
     */
    const handleClickOpen = () => {
        setOpen(true)
        setunknowOptions([])
        setStartedAt(generateCurrentDateTime())
        setObservations("")
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
    const handleClickAddUnknowOption = ({ value = "", id_reference = "" }) => {
        let existItemById = false
        let newUnknowOptions = []
        if (unknowOptions.length > 0) {
            newUnknowOptions = unknowOptions.map(
                item => {
                    if (item.item_id === id_reference) {
                        existItemById = true
                        item.answer = value
                    }
                    return item
                }
            )
        }

        if (!existItemById) {
            newUnknowOptions.push(
                {
                    item_id: id_reference,
                    answer: value
                }
            )
        }

        setunknowOptions(newUnknowOptions)

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

        let newItemsCards = optionsKnow.map(
            item => {
                let existAnswer = false
                itemsCards.forEach(elementCard => {
                    if (elementCard.item_id === item.item_id) {
                        existAnswer = true
                        item.answers = [elementCard.value]
                    }
                })
                unknowOptions.forEach(
                    itemUnknowOptions => {
                        if (itemUnknowOptions.item_id === item.item_id) {
                            existAnswer = true
                            if (Array.isArray(item.answers)) {
                                item.answers.push(itemUnknowOptions.answer)
                            } else {
                                item.answers = [itemUnknowOptions.answer]
                            }
                        }
                    }
                )

                if (!existAnswer) {
                    return {
                        item_id: item.item_id,
                        answers: ['']
                    }
                } else {
                    return {
                        item_id: item.item_id,
                        answers: item.answers
                    }
                }
            }
        )

        if (typeof onSave === "function") {
            onSave({
                id_test: idTask,
                started_at: startedAt,
                finished_at: generateCurrentDateTime(),
                observations,
                card_test_name_spanish: descriptionTask,
                card_test_name_english: descriptionTask,
                items_card: newItemsCards
            })
        }
        handleClose()
    }

    const handleChangeCheckBox = (item_id) => () => {

        let correctValue = null
        optionsKnow.forEach(element => {
            if (element.item_id === item_id) {
                correctValue = {
                    item_id: item_id,
                    value: element.description_spanish
                }
            }
        })

        if (correctValue !== null) {
            let existItemById = false
            let newItemsCards = itemsCards.map(element => {
                if (element.correctValue === correctValue.item_id) {
                    existItemById = true
                    element.value = correctValue.value
                }
                return element
            })

            if (!existItemById) {
                newItemsCards.push(correctValue)
                setItemsCards(newItemsCards)
            }
        }
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
        observations,
        handleClickOpen,
        handleClose,
        handleClickAddUnknowOption,
        handleClickDeleteUnknowOption,
        handleSave,
        handleChangeCheckBox,
        handleChangeObservations
    }
}

