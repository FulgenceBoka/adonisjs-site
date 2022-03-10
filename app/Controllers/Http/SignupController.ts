import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SignupValidator from 'App/Validators/SignupValidator'
import User from 'App/Models/User'

export default class SignupController {
	public async index({ view }: HttpContextContract) {
		return view.render('users/signup')
	}

	public async store({ request, session, response }: HttpContextContract) {
		const { username, email, password } = await request.validate(SignupValidator)

		try {
			await User.create({
				username: username,
				email: email,
				password: password,
			})
			session.flash('success', 'Votre compte a bien ete creer avec success')
		} catch (errors) {
			session.flash('error', 'Le nom ou le mail existe déjà')

			return response.redirect().back()
		}
		return response.redirect().toRoute('index')
	}
}
