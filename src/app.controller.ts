import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/get")
  getRootRoute() {
    return "Hi there!";
  }

  @Get("/bye")
  getByeThere() {
    return "Bye there!";
  }
}
