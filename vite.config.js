import {readFileSync} from 'node:fs';
import {defineConfig,loadEnv} from 'vite';
import {readBackendConfig} from './src/family/config.js';
export default defineConfig(({mode})=>{
  // Fail before bundling if a privileged backend key is accidentally supplied.
  const project=JSON.parse(readFileSync(new URL('./src/family/project.json',import.meta.url),'utf8'));
  readBackendConfig({},project);
  readBackendConfig({...loadEnv(mode,process.cwd(),'VITE_SUPABASE_'),...process.env},project);
  return {base:'./'};
});
