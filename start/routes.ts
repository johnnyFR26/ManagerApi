/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
const ClientesController = () => import('#controllers/clientes_controller')
const SuportesController = () => import('#controllers/supotes_controller')

router.get('/clients', [ClientesController, 'index'])
router.post('/clients', [ClientesController, 'store'])
router.get('/clients/:id', [ClientesController, 'show'])
router.put('/clients/:id', [ClientesController, 'update'])
router.delete('/clients/:id', [ClientesController, 'destroy'])
router.get('clientsWithSuporte', [ClientesController, 'clientWithSuporte'])

router.post('/suportes', [SuportesController, 'store'])
router.get('/suportes', [SuportesController, 'index'])
router.get('/suportes/:id/clients', [SuportesController, 'show'])
