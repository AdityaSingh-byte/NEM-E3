


const PdfPreview = ({ pdfId }) => {
    return (
        <div>
            <h2>PDF Preview</h2>
            <iframe 
                src={`https://nem-e3.onrender.com/api/view/${pdfId}`} 
                width="100%" 
                height="600px"
                title="PDF Preview"
            />
        </div>
    );
};

export default PdfPreview;
