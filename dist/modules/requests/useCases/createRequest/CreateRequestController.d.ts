import { Request, Response } from "express";
export declare class CreateRequestController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
