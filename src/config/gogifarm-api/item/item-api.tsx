import GogifarmInstance from "../gogifarm-axios-config";
import { WebFile } from "../util";

export const getItems = () => {
  return GogifarmInstance.get<undefined, Array<ItemDto>>(
    '/v1/items'
  );
}

export interface ItemImageDto{
  id: string,
  image: WebFile
}

export interface ItemDto {
  id: number,
  name: string,
  description: string,
  price: number,
  stockQuantity: number,
  category: string,
  sellerName: string,
  images: Array<ItemImageDto>,
  sumNailIndex: number,
  infoImage: WebFile,
  createdAt: Date,
  updatedAt: Date | undefined
}