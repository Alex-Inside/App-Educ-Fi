// Agrégation du contenu des 9 modules, indexé par id de sous-module ("1.1"…).
// Ce contenu statique tient le rôle du system prompt « module » (services/claude.js) :
// l'appel API le remplacera sans changer les composants.

import { CONTENT as m1 } from './module1.js'
import { CONTENT as m2 } from './module2.js'
import { CONTENT as m3 } from './module3.js'
import { CONTENT as m5 } from './module5.js'
import { CONTENT as m6 } from './module6.js'
import { CONTENT as m7 } from './module7.js'
import { CONTENT as m8 } from './module8.js'
import { CONTENT as m9 } from './module9.js'

// Le module « S'assurer » (ex-module 4) a été retiré du parcours.
export const SUBMODULE_CONTENT = {
  ...m1,
  ...m2,
  ...m3,
  ...m5,
  ...m6,
  ...m7,
  ...m8,
  ...m9,
}
