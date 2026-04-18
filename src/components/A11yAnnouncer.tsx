import { useEffect, useRef } from 'preact/hooks';

interface A11yAnnouncerProps {
	message: string;
	priority?: 'polite' | 'assertive';
	atomic?: boolean;
	debounceMs?: number;
}

export function A11yAnnouncer({ message, priority = 'polite', atomic = true, debounceMs = 750 }: A11yAnnouncerProps) {
	const debounceTimerRef = useRef<ReturnType<typeof setTimeout>>();
	const liveRegionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!message) return;

		if (debounceTimerRef.current) {
			clearTimeout(debounceTimerRef.current);
		}

		debounceTimerRef.current = setTimeout(() => {
			if (liveRegionRef.current) {
				liveRegionRef.current.textContent = message;
			}
		}, debounceMs);

		return () => {
			if (debounceTimerRef.current) {
				clearTimeout(debounceTimerRef.current);
			}
		};
	}, [message, debounceMs]);

	return (
		<div
			ref={liveRegionRef}
			role="status"
			aria-live={priority}
			aria-atomic={atomic}
			className="sr-only"
			aria-label="Automatic announcements for accessibility"
		/>
	);
}
