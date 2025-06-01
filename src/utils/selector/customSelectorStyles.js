export const customSelectorStyles = {
	control: provided => ({
		...provided,
		cursor: 'pointer',
		height: '42px',
		paddingLeft: '4px',
		border: '1px solid #a6abb9',
		backgroundColor: ' #f6f7fb',
		'@media screen and (max-width: 767px)': {
			width: '100%',
		},
	}),
	singleValue: provided => ({
		...provided,
		fontWeight: 500,
		fontSize: '16px',
		lineHeight: 1.25,
		color: '#101828',
	}),
	option: (provided, state) => ({
		...provided,
		display: 'flex',
		alignItems: 'center',
		height: '28px',
		padding: '0 18px',
		cursor: 'pointer',
		fontWeight: 500,
		fontSize: '16px',
		lineHeight: 1.25,
		color: state.isSelected ? '#101828' : '#8d929a',
		backgroundColor: '#fff',
		'&:hover': {
			backgroundColor: '#F2F4F7',
		},
	}),
	menuList: provided => ({
		...provided,
		padding: '14px 0',
		border: '1px solid #f7f7f7',
		borderRadius: '12px',
		boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
		backgroundColor: '#fff',
	}),
	placeholder: provided => ({
		...provided,
		fontWeight: 500,
		fontSize: '14px',
		color: '#a6abb9',
	}),
	indicatorSeparator: () => ({
		display: 'none',
	}),
	dropdownIndicator: (provided, state) => ({
		...provided,
		pointerEvents: 'none',
		position: 'absolute',
		top: '50%',
		right: '0px',
		transform: `translateY(-50%) ${
			state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)'
		}`,
		transition: 'transform 0.2s ease',
	}),
}
