import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import SigninValidator from 'App/Validators/SigninValidator'
import SignupValidator from 'App/Validators/SignupValidator'

export default class UserController {
	public async signinView({ view }: HttpContextContract) {
		return view.render('users/signin')
	}

	public async signin({ auth, request, response, session }: HttpContextContract) {
		const { email, password } = await request.validate(SigninValidator)

		try {
			await auth.use('web').attempt(email, password)
		} catch (errors) {
			session.flash('error', 'Email ou mot de passe invalide')
			response.redirect().back()
		}

		return response.redirect().toRoute('index')
	}

	public async signupView({ view }: HttpContextContract) {
		return view.render('users/signup')
	}

	public async signup({ request, session, response }: HttpContextContract) {
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

	public async logout({ auth, response }: HttpContextContract) {
		await auth.use('web').logout()
		return response.redirect('/')
	}
}
