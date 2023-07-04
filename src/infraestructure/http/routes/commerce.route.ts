import express from "express";
import { commerceController } from "../../dependencies/commerce.dependency";

const commerceRoute = express.Router();

commerceRoute
  .post("/commerce", commerceController.createCommerce.bind(commerceController))
  .post(
    "/commerce/branch",
    commerceController.createBranch.bind(commerceController)
  )
  .post(
    "/commerce/branch/campaing",
    commerceController.createCampaing.bind(commerceController)
  )
  .get("/commerce", commerceController.getAllCommerces.bind(commerceController))
  .get(
    "/commerce/:id",
    commerceController.findCommerce.bind(commerceController)
  );

export { commerceRoute };
