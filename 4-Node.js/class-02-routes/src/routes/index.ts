import { Router } from "express";

export const router = Router();

router.get("/", (_request, response) => {
  response.json({ name: "Class Routes" });
});

router.get("/user", (_req, res) => {
  res.json([
    { name: "Ash", age: 10 },
    { name: "Mestre Came", age: 300 },
    { name: "Alucard", age: 500 },
  ]);
});
