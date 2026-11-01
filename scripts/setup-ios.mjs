import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
const run=(args)=>{const r=spawnSync('npx',['cap',...args],{stdio:'inherit'});if(r.status!==0)process.exit(r.status??1)};
if(!existsSync('node_modules')) {console.error('Run npm ci (or npm install) first.');process.exit(1)}
if(!existsSync('ios/App/App.xcodeproj')) run(['add','ios']);
run(['sync','ios']);
