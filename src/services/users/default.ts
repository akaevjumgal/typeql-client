import { UserService } from '../index'
import Pathes from '../../url.config'

export default class DefaultUserService implements UserService {

	async users() {
		const response = await fetch(Pathes.Users.all)
		const data = await response.json()

		return Array.from(data)
	}
}
