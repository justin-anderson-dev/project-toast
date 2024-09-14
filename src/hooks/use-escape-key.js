import React from 'react';

function useEscapeKey(onEscape) {
	React.useEffect(() => {
		function handleKeyDown(event) {
			if (event.code === 'Escape') {
				onEscape();
			}
		}

		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [onEscape]);
}

export default useEscapeKey;
