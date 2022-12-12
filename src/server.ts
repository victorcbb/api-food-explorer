import express, { NextFunction, Request, Response } from "express"
import "express-async-errors"
import { UPLOADS_FOLDER } from "./configs/upload"

import { routes } from "./routes"
import { AppError } from "./utils/AppError"

const app = express()
app.use(express.json())

app.use("/files", express.static(UPLOADS_FOLDER))

app.use(routes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message
    })
  }

  console.error(err)

  return res.status(500).json({
    status: "error",
    message: "internal server error"
  })
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))