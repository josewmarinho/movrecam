import { Switch, Route } from 'react-router-dom';

import {Home} from './pages/Home';
import {Sobre} from './pages/Sobre';
import {Padre} from './pages/Padre';
import {Aulas} from './pages/Aulas';
import {Contato} from './pages/Contato';


export function Routes() {
   return (
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/sobre" component={Sobre} />
       <Route path="/padre" component={Padre} />
       <Route path="/aulas" component={Aulas} />
       <Route path="/contato" component={Contato} />

     </Switch>
   );
 };
 