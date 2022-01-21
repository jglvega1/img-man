#!/usr/bin/env node

import path from "path";
import fs from "fs";
import isImage from 'if-is-image';

export const exts = ["tif","tiff","bmp","jpg","jpeg","gif","png","esp","raw","webp"];
export const lightExtSort = ["webp","jpg","jpeg","png","gif","esp","bmp","tif","tiff","raw"];

export async function getFirstExtFor(fileName,list=exts,root="."){
	const available = await detectFor(fileName, root);
	console.log(available)
	for(const ext of list){
		if(ext in available){
			return ext;
		}
	}
}
//detect ext
export async function detectFor(fileName,root=".", extList=exts) {
	let res = {};
	await Promise.all(extList.map(ext => {
		//console.log(`Checking for ${ext}`)
		let dir = path.resolve(path.join(root,`${fileName}.${ext}`));
		//console.log(dir)
		if(fs.existsSync(dir)){
			res[ext]={dir};
		}
	}))
	return res;
}
export async function bruteDetectFor(fileName,root=".") {
	let res = {};
	const files = fs.readdirSync(root)
	await Promise.all(files.map(file => {
		console.log(`Checking for ${file}`);
		let dir = path.resolve(file);
		let ext = path.extname(dir);
		if(isImage(dir) && (path.basename(dir, ext) == fileName)){
			res[ext.slice(1)]={dir}
		}
	}))
	return res;
}