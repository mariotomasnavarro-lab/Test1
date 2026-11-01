import { readFileSync, statSync } from 'node:fs';
import { resolve } from 'node:path';
const root=resolve('www');
const html=readFileSync(resolve(root,'index.html'),'utf8');
const checks=[['HTML document',html.includes('<!doctype html>')],['ONDE NAM badge',html.includes('NAM')],['YouTube & SoundCloud',html.includes('soundcloud.com')&&html.includes('youtube-nocookie.com')],['Collections and player',html.includes('page-collections')&&html.includes('fullPlayer')],['safe area layout',html.includes('env(safe-area-inset-bottom)')],['manifest',statSync(resolve(root,'manifest.webmanifest')).size>20],['app icon',statSync(resolve(root,'icons/icon-512.png')).size>1000]];
let fail=false;for(const [label,ok] of checks){console.log(`${ok?'PASS':'FAIL'} ${label}`);if(!ok)fail=true;}
if(!html.match(/<script>[\s\S]*<\/script>/)) {console.error('FAIL Inline application script missing');fail=true;}
else {let s=html.match(/<script>([\s\S]*)<\/script>/)[1];try{new Function(s);console.log('PASS inline JavaScript syntax')}catch(e){console.error('FAIL inline JavaScript syntax:',e.message);fail=true;}}
if(fail)process.exit(1);
console.log('Web asset checks passed.');
