import { ErrorMessage } from 'formik'
import s from './ErrorMsg.module.css'

const ErrorMsg = ({ name }) => {
	return <ErrorMessage className={s.error} name={name} component={'span'} />
}

export default ErrorMsg
