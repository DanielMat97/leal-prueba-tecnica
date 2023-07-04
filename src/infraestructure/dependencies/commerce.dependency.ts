import { CommerceModel } from "../database/models/commerce.model";
import { CommerceApplication } from "../../application/commerce.application";
import { CommerceController } from "../http/controllers/commerce.controller";

const commerceApplication = new CommerceApplication(CommerceModel);
const commerceController = new CommerceController(commerceApplication);

export { commerceController, commerceApplication };
