import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SigninValidator from 'App/Validators/SigninValidator'
export default class SigninController {
	public async index({ view }: HttpContextContract) {
		return view.render('users/signin')
	}

	public async store({ request }: HttpContextContract) {
		const { email, password } = await request.validate(SigninValidator)

		return { email: email, password: password }
	}
}
