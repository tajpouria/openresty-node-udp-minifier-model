import { resolve } from "path";
import { Worker, isMainThread, workerData } from "worker_threads";
import { minify } from "html-minifier";
import { readFile, writeFile } from "fs";

const CACHE_PATH = resolve(process.cwd(), "../../cache");

// Spawn worker thread for file modification
if (!isMainThread) {
  const cachePath = workerData.cachePath;

  if (cachePath) {
    // Read not-minified content in buffer
    readFile(cachePath, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      // Write minified content to disk
      writeFile(
        cachePath,
        minify(data, {
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true
        }),
        err => {
          if (err) {
            console.error(err);
            process.exit(1);
          }

          console.info(`${cachePath} Minfied`);
          process.exit(0);
        }
      );
    });
  }
}

/**
 * Write minified based on specified cache key
 * @param cacheKey
 */
export function writeMinify(cacheKey: string): void {
  if (isMainThread) {
    new Worker(__filename, {
      workerData: { cachePath: `${CACHE_PATH}/${cacheKey}` }
    });
  }
}
