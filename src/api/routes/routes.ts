import express from "express";
import { CardController } from "../controller/card.controller";
import { LearningController } from "../controller/learning.controller";
import { cardRoutes } from "./card.route";
import { container } from "../../inversify.config"; 

export const routes = (app: express.Express) => {
  const BASE_URL = "/api/v1/";
  
  const cardController = container.get<CardController>(CardController);
  const learningController = container.get<LearningController>(LearningController);

  app.use(BASE_URL + "cards", cardRoutes(cardController, learningController));

};
