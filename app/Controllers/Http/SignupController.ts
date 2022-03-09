import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import SignupValidator from 'App/Validators/SignupValidator'

export default class SignupController {
	public async index({ view }: HttpContextContract) {
		return view.render('users/signup')
	}

	public async store({ request }: HttpContextContract) {
		return request
	}
}
