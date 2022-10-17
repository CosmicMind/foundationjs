// vite.config.ts
import {
  URL,
  fileURLToPath
} from "node:url";
import {
  defineConfig
} from "file:///Users/daniel/Repos/cosmicmind/workspace/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/daniel/Repos/cosmicmind/workspace/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///Users/daniel/Repos/cosmicmind/workspace/libs/foundation/vite.config.ts";
var packageName = process.env.npm_package_name;
var packageVersion = JSON.stringify(process.env.npm_package_version);
var external = [
  "lib0"
];
var globals = {};
var emptyOutDir = true;
var formats = ["es"];
var vite_config_default = defineConfig(({ mode }) => {
  const watch = "watch" === mode ? {
    include: [
      "src/**/*"
    ]
  } : void 0;
  return {
    define: {
      "__PACKAGE_NAME__": packageVersion,
      "__PACKAGE_VERSION__": packageVersion
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    },
    plugins: [
      dts()
    ],
    build: {
      emptyOutDir,
      lib: {
        name: packageName,
        entry: "src/index.ts",
        formats,
        fileName: "lib.es"
      },
      rollupOptions: {
        external,
        output: {
          globals
        }
      },
      watch
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZGFuaWVsL1JlcG9zL2Nvc21pY21pbmQvd29ya3NwYWNlL2xpYnMvZm91bmRhdGlvblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2RhbmllbC9SZXBvcy9jb3NtaWNtaW5kL3dvcmtzcGFjZS9saWJzL2ZvdW5kYXRpb24vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2RhbmllbC9SZXBvcy9jb3NtaWNtaW5kL3dvcmtzcGFjZS9saWJzL2ZvdW5kYXRpb24vdml0ZS5jb25maWcudHNcIjtpbXBvcnQge1xuICBVUkwsXG4gIGZpbGVVUkxUb1BhdGgsXG59IGZyb20gJ25vZGU6dXJsJ1xuXG5pbXBvcnQge1xuICBkZWZpbmVDb25maWcsXG4gIExpYnJhcnlGb3JtYXRzLFxufSBmcm9tICd2aXRlJ1xuXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuY29uc3QgcGFja2FnZU5hbWUgPSBwcm9jZXNzLmVudi5ucG1fcGFja2FnZV9uYW1lXG5jb25zdCBwYWNrYWdlVmVyc2lvbiA9IEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52Lm5wbV9wYWNrYWdlX3ZlcnNpb24pXG5cbmNvbnN0IGV4dGVybmFsID0gW1xuICAnbGliMCdcbl1cbmNvbnN0IGdsb2JhbHMgPSB7fVxuY29uc3QgZW1wdHlPdXREaXIgPSB0cnVlXG5jb25zdCBmb3JtYXRzOiBMaWJyYXJ5Rm9ybWF0c1tdID0gWyAnZXMnIF1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICBjb25zdCB3YXRjaCA9ICd3YXRjaCcgPT09IG1vZGUgPyB7XG4gICAgaW5jbHVkZTogW1xuICAgICAgJ3NyYy8qKi8qJ1xuICAgIF0sXG4gIH06IHVuZGVmaW5lZFxuXG4gIHJldHVybiB7XG4gICAgZGVmaW5lOiB7XG4gICAgICAnX19QQUNLQUdFX05BTUVfXyc6IHBhY2thZ2VWZXJzaW9uLFxuICAgICAgJ19fUEFDS0FHRV9WRVJTSU9OX18nOiBwYWNrYWdlVmVyc2lvbixcbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIGR0cygpXG4gICAgXSxcbiAgICBidWlsZDoge1xuICAgICAgZW1wdHlPdXREaXIsXG4gICAgICBsaWI6IHtcbiAgICAgICAgbmFtZTogcGFja2FnZU5hbWUsXG4gICAgICAgIGVudHJ5OiAnc3JjL2luZGV4LnRzJyxcbiAgICAgICAgZm9ybWF0cyxcbiAgICAgICAgZmlsZU5hbWU6ICdsaWIuZXMnLFxuICAgICAgfSxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgZXh0ZXJuYWwsXG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGdsb2JhbHMsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgd2F0Y2gsXG4gICAgfSxcbiAgfVxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQTBWO0FBQUEsRUFDeFY7QUFBQSxFQUNBO0FBQUEsT0FDSztBQUVQO0FBQUEsRUFDRTtBQUFBLE9BRUs7QUFFUCxPQUFPLFNBQVM7QUFWd00sSUFBTSwyQ0FBMkM7QUFZelEsSUFBTSxjQUFjLFFBQVEsSUFBSTtBQUNoQyxJQUFNLGlCQUFpQixLQUFLLFVBQVUsUUFBUSxJQUFJLG1CQUFtQjtBQUVyRSxJQUFNLFdBQVc7QUFBQSxFQUNmO0FBQ0Y7QUFDQSxJQUFNLFVBQVUsQ0FBQztBQUNqQixJQUFNLGNBQWM7QUFDcEIsSUFBTSxVQUE0QixDQUFFLElBQUs7QUFFekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsUUFBTSxRQUFRLFlBQVksT0FBTztBQUFBLElBQy9CLFNBQVM7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLEVBQ0YsSUFBRztBQUVILFNBQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNOLG9CQUFvQjtBQUFBLE1BQ3BCLHVCQUF1QjtBQUFBLElBQ3pCO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLE1BQ3REO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLElBQ047QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMO0FBQUEsTUFDQSxLQUFLO0FBQUEsUUFDSCxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUDtBQUFBLFFBQ0EsVUFBVTtBQUFBLE1BQ1o7QUFBQSxNQUNBLGVBQWU7QUFBQSxRQUNiO0FBQUEsUUFDQSxRQUFRO0FBQUEsVUFDTjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
