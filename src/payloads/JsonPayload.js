export default (value) => {
    return {
        type: 'json_string',
        content: { value: JSON.stringify(value) },
    }
}
