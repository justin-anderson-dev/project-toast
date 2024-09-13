import React from 'react';

import Button from '../Button';
import Toast from '../Toast';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const [message, setMessage] = React.useState('');
	const [variant, setVariant] = React.useState('notice');

	const [toasts, setToasts] = React.useState([]);

	function handleDismiss(event) {
		event.preventDefault();
		console.log('Dismissed');
		setShowToast(false);
	}

	function handleAddToast(event) {
		event.preventDefault();
		console.log('Adding toast');
		const newToast = {
			message,
			variant,
			id: crypto.randomUUID(),
		};
		setToasts([...toasts, newToast]);
		setMessage('');
		setVariant('notice');
	}

	function handleRemoveToast(id) {
		const nextToasts = [...toasts];
		setToasts(nextToasts.filter((toast) => toast.id !== id));
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt='Cute toast mascot' src='/toast.png' />
				<h1>Toast Playground</h1>
			</header>
			<div className={styles.controlsWrapper}>
				<form
					onSubmit={(event) => {
						handleAddToast(event);
					}}
				>
					<div className={styles.row}>
						{/* nest this text area and buttons inside a Form element */}
						<label
							htmlFor='message'
							className={styles.label}
							style={{ alignSelf: 'baseline' }}
						>
							Message
						</label>
						<div className={styles.inputWrapper}>
							<textarea
								id='message'
								className={styles.messageInput}
								value={message}
								onChange={(event) =>
									setMessage(event.target.value)
								}
							/>
						</div>
					</div>

					<div className={styles.row}>
						<div className={styles.label}>Variant</div>
						<div
							className={`${styles.inputWrapper} ${styles.radioWrapper}`}
						>
							{VARIANT_OPTIONS.map((option) => {
								return (
									<label
										htmlFor={`variant-${option}`}
										key={option}
									>
										<input
											id={`variant-${option}`}
											type='radio'
											name='variant'
											value={option}
											checked={variant === option}
											onChange={(event) => {
												setVariant(event.target.value);
											}}
										/>
										{option}
									</label>
								);
							})}
						</div>
					</div>

					<div className={styles.row}>
						<div className={styles.label} />
						<div
							className={`${styles.inputWrapper} ${styles.radioWrapper}`}
						>
							<Button onClick={(event) => handleAddToast(event)}>
								Pop Toast!
							</Button>
						</div>
					</div>
				</form>
			</div>
			<ToastShelf
				toasts={toasts}
				handleRemoveToast={handleRemoveToast}
			></ToastShelf>
		</div>
	);
}

export default ToastPlayground;
