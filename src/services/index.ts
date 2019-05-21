import User from '../models/user'

export interface UserService {
	users(): User.Model
}
