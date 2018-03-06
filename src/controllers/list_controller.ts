import { list } from "../db/list";
import { Request, Response } from "express";

/**
 * Getting list of apart
 * @param req {Request} The request object.
 * @param res {Response} The response object.
 */
export const list_get = (req: Request, res: Response) => {
  const params: Object = {
    "Content-Type": "application/json; charset=utf-8"
  };
  res.set(params);
  res.send(list);
};
