import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagesController {
  public async index({ view }: HttpContextContract) {
    return view.render('pages/index')
  }

  public async about({ view }: HttpContextContract) {
    return view.render('pages/about')
  }
  public async contact({ view }: HttpContextContract) {
    return view.render('pages/contact')
  }
}
