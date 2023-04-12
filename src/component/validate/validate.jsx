export const renderErrorMessage = name => {
    name === errorMessages.name && (
        <div className='display'><p>{errorMessages.message}</p></div>
    )
}