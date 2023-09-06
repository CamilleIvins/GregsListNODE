import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { carSchema } from '../models/Car.js';


// this page is essential for SERVICE


class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);


  // when registered with MongoDB, should connect
  Cars = mongoose.model('Car', carSchema)
}

export const dbContext = new DbContext()




// NOTE register with db in app
// ⬇️our reference,      ⬇️collection in db
// Cars = mongoose.model('Car', carSchema)
// ............................⬆️ model it uses