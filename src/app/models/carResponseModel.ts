import { CarDetails } from "./carDetails";
import { ResponseModel } from "./responseModel";

export interface CarResponseModel extends ResponseModel
{
    data:CarDetails[];
}