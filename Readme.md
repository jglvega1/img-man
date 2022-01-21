# Img-man
## What is?
This is a module that allows you to take control of what image extension are fetched by some functions that allows you for exaple know the image extensions that are avalible for some image.
## How to use?
import the package by ESM.
```
import im from "img-man";
```
then use the function that you wanna use. Note that all the functions are asyncronous.
```
await im.detectFor("imgName","Dir");
```
## **detectFor**
Return an object of the follow structure:
```
{
	"jpeg":{
		"dir":"some/path/fileName.jpeg"
	}
	"webp":{
		"dir":"some/path/fileName.webp"
	}
}
```
Takes three parameters.
```
await im.detectFor(fileName, root, extList);
```
- fileName. That is the name of the image we are been looking for. Type String.
- root. That is the path were we are been looking for the avalibe extensions. By default is setted to ***"."***. Type String.
- extList. That contains the extensions that we will been looking for.

***Note:***This method check every extension and fileName conbination.
## **bruteDetectFor**
Return an object of the follow structure:
```
{
	"jpeg":{
		"dir":"some/path/fileName.jpeg"
	}
	"webp":{
		"dir":"some/path/fileName.webp"
	}
}
```
Takes two parameters.
```
await im.detectFor(fileName, root);
```
- fileName. That is the name of the image we are been looking for. Type String.
- root. That is the path were we are been looking for the avalibe extensions. By default is setted to ***"."***. Type String.

***Note:***This method check every file in the root folder

## **getFirstExtFor**
Return a string that contains the extension file.
Ex. "png"

Takes three parameters:
```
await im.getFirstExtFor(fileName, list, root);
```
- fileName. That is the name of the image we are been looking for. Type String.
- list. Order in which the extension is preferred. Type Array.
- root. That is the path were we are been looking for the avalibe extensions. By default is setted to ***"."***. Type String.
## Orders
### lightExtSort
Its an array of extensions sorted by optimal compresion for the web.
```
const lightExtSort = ["webp","jpg","jpeg","png","gif","esp","bmp","tif","tiff","raw"]
```