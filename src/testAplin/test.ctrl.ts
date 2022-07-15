import { Request, Response } from "express";
import handler from "../handlers/request.handler";
import service from "./test.service";

class testCtrl {
  public async dataFilteringCtrl( req: Request, res: Response ):Promise<unknown> {
    try {
      const response = await service.dataFilteringService(req.body);
      handler(res, response[0], response[1]);
    } catch (err) {
      return handler(res, 404, [{ message: "BAD_REQUEST", error: err }]);
    }
  }

  public async getStringCtrl( req: Request, res: Response ): Promise<unknown> {
    try {
      const string_old = String(req.query.string_old);
      const response = await service.getStringCtrl(string_old);
      handler(res, response[0], response[1]);
    } catch (err) {
      return handler(res, 404, [{ message: "BAD_REQUEST", error: err }]);
    }
  }
}

export default new testCtrl();
