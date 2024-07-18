/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
import AutoSwagger from 'adonis-autoswagger'
import swagger from '#config/swagger'
// returns swagger in YAML
router.get('/swagger', async () => {
  //@ts-ignore
  return AutoSwagger.default.docs(router.toJSON(), swagger)
})

// Renders Swagger-UI and passes YAML-output of /swagger
router.get('/docs', async () => {
  //@ts-ignore
  return AutoSwagger.default.ui('/swagger', swagger)
  // return AutoSwagger.default.scalar("/swagger"); to use Scalar instead
  // return AutoSwagger.default.rapidoc("/swagger", "view"); to use RapiDoc instead (pass "view" default, or "read" to change the render-style)
})

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
