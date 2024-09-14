import React from 'react';

function useKeydown(keycode, callback) {
	React.useEffect(() => {
		function handleKeyDown(event) {
			if (event.code === keycode) {
				callback(event);
			}
		}

		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [keycode, callback]);
}

export default useKeydown;
