// vite.config.lib.js
import { join } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
var name = process.env.npm_package_name;
var formats = ["es"];
var external = [
  "lib0"
];
var globals = {};
var dirname = process.cwd();
var dirPath = (path = "") => join(dirname, path);
var srcDir = (path = "") => join(dirPath("src"), path);
var rootDir = srcDir();
var assetsDir = false;
var publicDir = false;
var outDir = dirPath("dist");
var entry = "index.ts";
var fileName = (format) => `lib.${format}.js`;
var isWatch = (mode) => "watch" === mode;
var isDev = (mode) => "development" === mode || isWatch(mode);
var vite_config_lib_default = ({ mode }) => {
  const manifest = false;
  const emptyOutDir = true;
  const cssCodeSplit = true;
  const sourcemap = false;
  const minify = !isDev(mode);
  const watch = isWatch(mode);
  return defineConfig({
    root: rootDir,
    assetsDir,
    publicDir,
    plugins: [
      tsconfigPaths({
        root: dirPath()
      }),
      dts({
        root: dirPath()
      })
    ],
    build: {
      manifest,
      outDir,
      emptyOutDir,
      cssCodeSplit,
      sourcemap,
      lib: {
        name,
        entry,
        formats,
        fileName
      },
      rollupOptions: {
        external,
        output: {
          globals
        }
      },
      minify,
      watch
    }
  });
};
export {
  vite_config_lib_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubGliLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2RhbmllbC9SZXBvcy9jb3NtaWNtaW5kL3dvcmtzcGFjZS9saWJzL2ZvdW5kYXRpb25cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9kYW5pZWwvUmVwb3MvY29zbWljbWluZC93b3Jrc3BhY2UvbGlicy9mb3VuZGF0aW9uL3ZpdGUuY29uZmlnLmxpYi5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZGFuaWVsL1JlcG9zL2Nvc21pY21pbmQvd29ya3NwYWNlL2xpYnMvZm91bmRhdGlvbi92aXRlLmNvbmZpZy5saWIuanNcIjsvLyBDb3B5cmlnaHQgKEMpIDIwMjIsIENvc21pY01pbmQsIEluYy4gPGh0dHA6Ly9jb3NtaWNtaW5kLmNvbT4uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocydcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG5jb25zdCBuYW1lID0gcHJvY2Vzcy5lbnYubnBtX3BhY2thZ2VfbmFtZVxuY29uc3QgZm9ybWF0cyA9IFsgJ2VzJyBdXG5jb25zdCBleHRlcm5hbCA9IFtcbiAgJ2xpYjAnXG5dXG5jb25zdCBnbG9iYWxzID0ge31cblxuY29uc3QgZGlybmFtZSA9IHByb2Nlc3MuY3dkKClcbmNvbnN0IGRpclBhdGggPSAocGF0aCA9ICcnKSA9PiBqb2luKGRpcm5hbWUsIHBhdGgpXG5jb25zdCBzcmNEaXIgPSAocGF0aCA9ICcnKSA9PiBqb2luKGRpclBhdGgoJ3NyYycpLCBwYXRoKVxuY29uc3Qgcm9vdERpciA9IHNyY0RpcigpXG5jb25zdCBhc3NldHNEaXIgPSBmYWxzZVxuY29uc3QgcHVibGljRGlyID0gZmFsc2VcbmNvbnN0IG91dERpciA9IGRpclBhdGgoJ2Rpc3QnKVxuY29uc3QgZW50cnkgPSAnaW5kZXgudHMnXG5jb25zdCBmaWxlTmFtZSA9IGZvcm1hdCA9PiBgbGliLiR7Zm9ybWF0fS5qc2BcblxuY29uc3QgaXNXYXRjaCA9IG1vZGUgPT4gJ3dhdGNoJyA9PT0gbW9kZVxuY29uc3QgaXNEZXYgPSBtb2RlID0+ICdkZXZlbG9wbWVudCcgPT09IG1vZGUgfHwgaXNXYXRjaChtb2RlKVxuXG5leHBvcnQgZGVmYXVsdCAoeyBtb2RlIH0pID0+IHtcbiAgY29uc3QgbWFuaWZlc3QgPSBmYWxzZVxuICBjb25zdCBlbXB0eU91dERpciA9IHRydWVcbiAgY29uc3QgY3NzQ29kZVNwbGl0ID0gdHJ1ZVxuICBjb25zdCBzb3VyY2VtYXAgPSBmYWxzZVxuXG4gIGNvbnN0IG1pbmlmeSA9ICFpc0Rldihtb2RlKVxuICBjb25zdCB3YXRjaCA9IGlzV2F0Y2gobW9kZSlcblxuICByZXR1cm4gZGVmaW5lQ29uZmlnKHtcbiAgICByb290OiByb290RGlyLFxuICAgIGFzc2V0c0RpcixcbiAgICBwdWJsaWNEaXIsXG4gICAgcGx1Z2luczogW1xuICAgICAgdHNjb25maWdQYXRocyh7XG4gICAgICAgIHJvb3Q6IGRpclBhdGgoKSxcbiAgICAgIH0pLFxuICAgICAgZHRzKHtcbiAgICAgICAgcm9vdDogZGlyUGF0aCgpLFxuICAgICAgfSlcbiAgICBdLFxuICAgIGJ1aWxkOiB7XG4gICAgICBtYW5pZmVzdCxcbiAgICAgIG91dERpcixcbiAgICAgIGVtcHR5T3V0RGlyLFxuICAgICAgY3NzQ29kZVNwbGl0LFxuICAgICAgc291cmNlbWFwLFxuICAgICAgbGliOiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGVudHJ5LFxuICAgICAgICBmb3JtYXRzLFxuICAgICAgICBmaWxlTmFtZSxcbiAgICAgIH0sXG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIGV4dGVybmFsLFxuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBnbG9iYWxzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG1pbmlmeSxcbiAgICAgIHdhdGNoLFxuICAgIH0sXG4gIH0pXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLFNBQVMsWUFBWTtBQUVyQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLFNBQVM7QUFFaEIsSUFBTSxPQUFPLFFBQVEsSUFBSTtBQUN6QixJQUFNLFVBQVUsQ0FBRSxJQUFLO0FBQ3ZCLElBQU0sV0FBVztBQUFBLEVBQ2Y7QUFDRjtBQUNBLElBQU0sVUFBVSxDQUFDO0FBRWpCLElBQU0sVUFBVSxRQUFRLElBQUk7QUFDNUIsSUFBTSxVQUFVLENBQUMsT0FBTyxPQUFPLEtBQUssU0FBUyxJQUFJO0FBQ2pELElBQU0sU0FBUyxDQUFDLE9BQU8sT0FBTyxLQUFLLFFBQVEsS0FBSyxHQUFHLElBQUk7QUFDdkQsSUFBTSxVQUFVLE9BQU87QUFDdkIsSUFBTSxZQUFZO0FBQ2xCLElBQU0sWUFBWTtBQUNsQixJQUFNLFNBQVMsUUFBUSxNQUFNO0FBQzdCLElBQU0sUUFBUTtBQUNkLElBQU0sV0FBVyxZQUFVLE9BQU87QUFFbEMsSUFBTSxVQUFVLFVBQVEsWUFBWTtBQUNwQyxJQUFNLFFBQVEsVUFBUSxrQkFBa0IsUUFBUSxRQUFRLElBQUk7QUFFNUQsSUFBTywwQkFBUSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQzNCLFFBQU0sV0FBVztBQUNqQixRQUFNLGNBQWM7QUFDcEIsUUFBTSxlQUFlO0FBQ3JCLFFBQU0sWUFBWTtBQUVsQixRQUFNLFNBQVMsQ0FBQyxNQUFNLElBQUk7QUFDMUIsUUFBTSxRQUFRLFFBQVEsSUFBSTtBQUUxQixTQUFPLGFBQWE7QUFBQSxJQUNsQixNQUFNO0FBQUEsSUFDTjtBQUFBLElBQ0E7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLGNBQWM7QUFBQSxRQUNaLE1BQU0sUUFBUTtBQUFBLE1BQ2hCLENBQUM7QUFBQSxNQUNELElBQUk7QUFBQSxRQUNGLE1BQU0sUUFBUTtBQUFBLE1BQ2hCLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBLEtBQUs7QUFBQSxRQUNIO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsZUFBZTtBQUFBLFFBQ2I7QUFBQSxRQUNBLFFBQVE7QUFBQSxVQUNOO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFDSDsiLAogICJuYW1lcyI6IFtdCn0K
