import { defineConfig } from 'vite';

export default defineConfig({
  // server: {
  //     cors: false,
  // },
  // plugins: [
  //   {
  //     name: 'add-cors',
  //     configureServer(server) {
  //       server.middlewares.use((_req, res, next) => {
  //         res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  //         res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  //         res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  //         next();
  //       });
  //     },
  //   },
  // ],
});
