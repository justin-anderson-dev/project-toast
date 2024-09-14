import React from 'react';
import useEscapeKey from '../../hooks/use-escape-key';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toasts, setToasts] = React.useState([]);
	function onEscape() {
		setToasts([]);
	}

	useEscapeKey(onEscape);

	function createToast(message, variant) {
		const newToast = {
			message,
			variant,
			id: crypto.randomUUID(),
		};
		setToasts([...toasts, newToast]);
	}

	function dismissToast(id) {
		const nextToasts = [...toasts];
		setToasts(nextToasts.filter((toast) => toast.id !== id));
	}

	return (
		<ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
			{children}
		</ToastContext.Provider>
	);
}

export default ToastProvider;
