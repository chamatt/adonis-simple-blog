"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("home");

// Route.get("/test", () => "<h1>Hello world</h1>");

// Route.get("/test/:id", ({ params }) => `This is the id: ${params.id}`);

Route.get("/posts", "PostController.index");

Route.post("/posts", "PostController.store");

Route.put("/posts/:id", "PostController.update");

Route.get("/posts/add", "PostController.add");

Route.get("/posts/edit/:id", "PostController.edit");

Route.delete("/posts/:id", "PostController.destroy");

Route.get("/posts/:id", "PostController.details");
