
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, text }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <div className="relative bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Texto Extraído</h2>
                        <button className="text-gray-500 hover:text-gray-800" onClick={onClose}>
                            Fechar
                        </button>
                    </div>

                    <div className="overflow-auto max-h-96">
                        <p className="text-gray-700">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Adicione a validação de tipo para as props
Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default Modal;
