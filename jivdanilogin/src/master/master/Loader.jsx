export const Loader = () => {
    return (
        <div className="d-flex justify-content-center" style={{ minHeight: '40vh' }}>
            <div className="spinner-border text-primary fs-6" role="status" style={{ alignItems: "center", alignSelf: 'center', height: 30, width: 30 }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}