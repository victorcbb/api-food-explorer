import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"
import { authConfig } from "../configs/auth"

import { AppError } from "../utils/AppError"

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization

  if (!authToken) {
    throw new AppError("Token não informado", 401)
  }

  const [, token] = authToken.split(" ")

  try {
    verify(token, authConfig.jwt.secret)
  
    return next()
  } catch (error) {
    throw new AppError("Token inválido", 401)
  }
}
