export default (...values) => {
    return {
        type: 'log',
        content: { values },
    }
}
