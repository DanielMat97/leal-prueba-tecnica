import express from "express";
import { commerceController } from "../../dependencies/commerce.dependency";

const commerceRoute = express.Router();

commerceRoute
  .post("/commerce", commerceController.createCommerce.bind(commerceController))
  .post(
    "/commerce/branch",
    commerceController.createBranch.bind(commerceController)
  )
  .get("/commerce", commerceController.getAllCommerces.bind(commerceController))
  .get(
    "/commerce/:id",
    commerceController.findCommerce.bind(commerceController)
  )
  .get(
    "/commerce/branch/:id",
    commerceController.findBranchOffice.bind(commerceController)
  );

export { commerceRoute };
