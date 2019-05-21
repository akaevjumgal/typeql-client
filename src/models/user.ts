import Company from './company'

namespace User {
	export class Address {
		street: string = ''

		suite: string = ''

		city: string = ''

		zipcode: string = ''
	}
	export class Model {
		id: string = ''

		name: string = ''

		username: string = ''

		email: string = ''

		address: Address = new Address()

		phone: string = ''

		website: string = ''

		company: Company.Model = new Company.Model()
	}

	export interface Records {
		users: Model[]
	}
}

export default User
