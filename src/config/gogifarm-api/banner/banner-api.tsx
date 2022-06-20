import GogifarmInstance from "../gogifarm-axios-config";

export const getBanners = () => {
  return GogifarmInstance.get<undefined, Array<BannerDto>>(
    '/v1/banners'
  );
}

export interface BannerDto {

}