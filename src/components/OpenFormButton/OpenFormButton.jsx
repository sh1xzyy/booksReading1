import { GoPlus } from 'react-icons/go'
import { useWindowWidth } from '../../hooks/userWindowWidth/useWindowWidth'
import s from './OpenFormButton.module.css'

const OpenFormButton = () => {
	const windowWidth = useWindowWidth()
	return (
		<>
			{windowWidth < 768 && (
				<button className={s.openFormButton} type='button'>
					<GoPlus color=' #fff' size={24} />
				</button>
			)}
		</>
	)
}

export default OpenFormButton
