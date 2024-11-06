import { create, router as _router, defaults, rewriter } from 'json-server';
import { join } from 'path';
import routes from './routes.json';

const server = create();
const router = _router(join(__dirname, 'db.json'));
const middlewares = defaults();

// Use middlewares
server.use(middlewares);

// Use rewriter for custom routes
server.use(rewriter(routes));

// Use JSON Server router
server.use(router);

// Start the server on port 3001
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
