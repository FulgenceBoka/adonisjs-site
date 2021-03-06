/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'PagesController.index').as('index')
Route.get('/about', 'PagesController.about').as('about')
Route.get('/contact', 'PagesController.contact').as('contact')

Route.group(() => {
	Route.get('/signup', 'UserController.signupView').as('signup')
	Route.get('/signin', 'UserController.signinView').as('signin')
}).middleware('guest')

Route.post('/signup', 'UserController.signup')

Route.post('/signin', 'UserController.signin')
Route.post('/logout', 'UserController.logout')
