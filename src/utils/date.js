 export const formatDDMMYYYY = (oldFormat) => {
    const newDate = new Date(oldFormat)
    
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    }

    newDate.toLocaleDateString("es-Es", options)
}