// components/AdminView.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import PdfPreview from './PdfPreview';

const AdminView = () => {
    const [pdfs, setPdfs] = useState([]);
    const [selectedPdfId, setSelectedPdfId] = useState(null);

    useEffect(() => {
        const fetchPdfs = async () => {
            const response = await axios.get('http://localhost:5000/api/pdfs');
            setPdfs(response.data);
        };
        fetchPdfs();
    }, []);

    const downloadPDF = (id) => {
        axios({
            url: `http://localhost:3000/api/download/${id}`,
            method: 'GET',
            responseType: 'blob', // Important for file download
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${id}.pdf`);
            document.body.appendChild(link);
            link.click();
        }).catch((error) => {
            console.error('Error downloading the PDF', error);
        });
    };

    return (
        <div>
            <h1>Admin View</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pdfs.map(pdf => (
                        <tr key={pdf._id}>
                            <td>{pdf.title}</td>
                            <td>{pdf.author}</td>
                            <td>
                                <button onClick={() => setSelectedPdfId(pdf._id)}>View</button>
                                <button onClick={() => downloadPDF(pdf._id)}>Download</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedPdfId && <PdfPreview pdfId={selectedPdfId} />}
        </div>
    );
};

export default AdminView;
