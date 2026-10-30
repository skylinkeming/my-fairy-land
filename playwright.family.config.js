import {defineConfig} from '@playwright/test';
import base from './playwright.config.js';
export default defineConfig({...base,testDir:'./tests/family',testIgnore:[],
  use:{...base.use,baseURL:'http://127.0.0.1:5174'},
  webServer:{command:'npm run dev -- --port 5174',url:'http://127.0.0.1:5174',reuseExistingServer:false,
    env:{VITE_SUPABASE_URL:'https://family-test.supabase.co',VITE_SUPABASE_PUBLISHABLE_KEY:'sb_publishable_test_configuration_only'}},
});
