import React from 'react';

export const KolInputText = ({
	_label,
	_value,
	_placeholder,
	_on,
}: {
	_label: string;
	_value?: string;
	_placeholder?: string;
	_on?: { onInput?: (e: Event, value: string) => void };
}) => (
	<input
		aria-label={_label}
		value={_value ?? ''}
		placeholder={_placeholder}
		onChange={(e) => _on?.onInput?.(e.nativeEvent, e.target.value)}
	/>
);

export const KolSingleSelect = ({
	_label,
	_options,
	_value,
	_on,
}: {
	_label: string;
	_options: { label: string; value: string }[];
	_value?: string;
	_on?: { onChange?: (e: Event, value: string) => void };
}) => (
	<select
		aria-label={_label}
		value={_value ?? ''}
		onChange={(e) => _on?.onChange?.(e.nativeEvent, e.target.value)}
	>
		{_options.map((opt) => (
			<option key={opt.value} value={opt.value}>
				{opt.label}
			</option>
		))}
	</select>
);

export const KolButton = ({
	_label,
	_on,
	_variant,
}: {
	_label: string;
	_on?: { onClick?: () => void };
	_variant?: string;
}) => (
	<button onClick={_on?.onClick} data-variant={_variant}>
		{_label}
	</button>
);

export const KolCard = ({
	_label,
	children,
}: {
	_label: string;
	children: React.ReactNode;
}) => <article aria-label={_label}>{children}</article>;

export const KolBadge = ({ _label }: { _label: string }) => (
	<span className="badge">{_label}</span>
);
