import { useState } from 'react';
import Modal from './Modal';

const UploadFoto = () => {
    const [foto, setFoto] = useState(null);
    const [fotoUrl, setFotoUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false); // Estado para controlar se o modal está aberto ou fechado
    const [extractedText, setExtractedText] = useState(''); // Estado para armazenar o texto extraído

    const handleFileChange = (event) => {
        const selectedFoto = event.target.files[0];
        setFoto(selectedFoto);
        const fotoUrl = URL.createObjectURL(selectedFoto);
        setFotoUrl(fotoUrl);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('foto', foto);

        try {
            const response = await fetch('http://127.0.0.1:5000/extract_text', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                setExtractedText(data.text); // Atualize o estado com o texto extraído
                setModalOpen(true); // Abra o modal para exibir o texto
            } else {
                console.error('Erro ao enviar a foto:', response.statusText);
            }
        } catch (error) {
            console.error('Erro de rede:', error.message);
        } finally {
            setLoading(false);
        }
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="text-center">
            {fotoUrl && (
                <div className="flex justify-center">
                    <img src={fotoUrl} alt="Foto selecionada" className="mb-4 max-h-64" style={{ maxWidth: '100%' }} />
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col">
                <input type="file" onChange={handleFileChange} className="mb-4 appearance-none border border-cyan-500 rounded py-2 px-4 bg-cyan-900 text-cyan-100 font-bold hover:bg-cyan-800 focus:outline-none focus:border-cyan-700 focus:ring focus:ring-cyan-200" />
                <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded" disabled={loading}>
                    {loading ? 'Enviando...' : 'Enviar'}
                </button>
            </form>

            {/* Renderize o modal aqui */}
            <Modal isOpen={modalOpen} onClose={closeModal} text={extractedText} />
        </div>
    );
};

export default UploadFoto;
