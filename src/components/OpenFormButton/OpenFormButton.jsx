import { GoPlus } from 'react-icons/go'
import { useWindowWidth } from '../../hooks/userWindowWidth/useWindowWidth'
import ActionButton from '../ActionButton/ActionButton'

const OpenFormButton = () => {
	const windowWidth = useWindowWidth()
	return (
		<>
			{windowWidth < 768 && (
				<ActionButton className="openFormButton" type='button'>
					<GoPlus color=' #fff' size={24} />
				</ActionButton>
			)}
		</>
	)
}

export default OpenFormButton
