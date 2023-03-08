// @index(['./routes/*.svelte'], (f, _, e) => `import ${_.pascalCase(f.name)} from '${f.path}${f.ext}';`)
import Battle from './routes/Battle.svelte';
import Game from './routes/Game.svelte';
import Home from './routes/Home.svelte';
import Multi from './routes/Multi.svelte';
import NotFound from './routes/NotFound.svelte';
import Todos from './routes/Todos.svelte';
// @endindex

const routes = {
	'/': Home,
	'/settings': Multi,
	'/todo': Todos,
	'/game*': Game,
	'/battle': Battle,
	'*': NotFound
}

export default routes