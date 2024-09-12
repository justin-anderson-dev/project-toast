import React from 'react';
import VisuallyHidden from '../VisuallyHidden';
import {
	AlertOctagon,
	AlertTriangle,
	CheckCircle,
	Info,
	X,
} from 'react-feather';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
};

function Toast({ variant, showToast, setShowToast, children }) {
	const Icon = ICONS_BY_VARIANT[variant];

	function handleDismiss(event) {
		event.preventDefault();
		console.log('Dismissed');
		setShowToast(false);
	}

	return (
		<div className={`${styles.toast} ${styles[variant]}`}>
			<div className={styles.iconContainer}>
				<Icon size={24} />
			</div>
			<p className={styles.content}>{children}</p>
			<button className={styles.closeButton} onClick={handleDismiss}>
				<X size={24} />
				<VisuallyHidden>Dismiss message</VisuallyHidden>
			</button>
		</div>
	);
}

export default Toast;
