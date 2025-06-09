export const customStyles = {
	control: (provided, state) => ({
		...provided,
		cursor: 'pointer',
		minHeight: '42px',
		padding: '0 16px 0 4px',
		borderRadius: 'none',
		borderColor: state.menuIsOpen ? "#797b81" : "transparent",
		boxShadow: "inset 0 1px 2px 0 rgba(29, 29, 27, 0.15)",
        backgroundColor: "#fff",
		transition: "border-color 250ms linear",
		"&:hover":{
			borderColor: "#797b81"
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
        maxHeight: "200px",
		padding: '14px 0',
		border: '1px solid #f7f7f7',
		boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
		backgroundColor: '#fff',
	}),
	placeholder: provided => ({
		...provided,
		fontWeight: 500,
        fontSize: "14px",
        color: "#a6abb9",
	}),
	indicatorSeparator: () => ({
		display: 'none',
	}),
	dropdownIndicator: (provided, state) => ({
		...provided,
		pointerEvents: 'none',
		position: 'absolute',
		top: '50%',
		right: '0',
		transform: `translateY(-50%) ${
			state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)'
		}`,
		transition: 'transform 250ms linear',
	}),
}