
export const withClick = (element, handleClick = () => {}) => {
    return <element.type {...element.props} onClick={handleClick} />
}