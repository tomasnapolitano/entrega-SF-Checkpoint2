export const handleInput = (name, event, setter, data) => {
    setter({ ...data, [name]: event.target.value })
}