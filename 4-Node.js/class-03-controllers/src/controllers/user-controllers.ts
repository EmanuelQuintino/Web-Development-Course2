import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app-error";
import { z } from "zod";

// zod
const UserSchema = z.object({
  name: z.string({ message: "Nome é obrigatório!" }).min(3, "Mínimo de 3 caracteres!"),
  series: z.string().max(255, "Mínimo de 255 caracteres!"),
  age: z.number(),
  email: z.string().email(),
});

export const userControllers = {
  create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, series, age, email } = UserSchema.parse(req.body);

      if (!name || !series) {
        throw new AppError(500, "Todos os dados são obrigatórios!");
      }

      console.log({ name, series, age, email });

      res.status(201).json({ message: "user created" });
    } catch (error) {
      next(error);
    }
  },

  read(req: Request, res: Response) {
    const { id } = req.params;
    res.status(200).json({ message: `user ${id} read` });
  },

  update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, series } = req.body;

    console.log({ id, name, series });

    res.status(200).json({ message: "user updated" });
  },

  delete(req: Request, res: Response) {
    const { id } = req.params;
    res.status(200).json({ message: `user ${id} deleted` });
  },
};
