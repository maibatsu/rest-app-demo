import { amenities } from "../db/amenities";
import { Request, Response } from "express";

export const amenities_get = (req: Request, res: Response) => {
  const params: Object = {
    "Content-Type": "application/json; charset=utf-8"
  };
  res.set(params);
  res.send(amenities);
};
