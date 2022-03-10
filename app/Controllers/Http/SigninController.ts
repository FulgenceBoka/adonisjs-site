import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SigninValidator from 'App/Validators/SigninValidator'
export default class SigninController {
	public async index({ view }: HttpContextContract) {
		return view.render('users/signin')
	}

	public async store({ auth, request, response, session }: HttpContextContract) {
		const { email, password } = await request.validate(SigninValidator)

		try {
			await auth.use('web').attempt(email, password)
		} catch (errors) {
			session.flash('error', 'Email ou mot de passe invalide')
			response.redirect().back()
		}

		return response.redirect().toRoute('index')
	}
}
