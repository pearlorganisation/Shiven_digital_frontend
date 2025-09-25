import instance from "../lib/apiClient";



import {
  GetBrandApiResponseSchema,
  AllBrandApiResponseSchema,
  type GetBrandApiResponseType,
  type AllBrandApiResponseType,
} from "@/schemas/brand/brandSchema";

import {
  type CreateBrandPayloadType,
  type UpdateBrandPayloadType,
} from "@/schemas/brand/payloadBrandSchema";

class BrandService {
  async getBrand(): Promise<GetBrandApiResponseType> {
    try {
      const { data } = await instance.get(`/brands`);
      return GetBrandApiResponseSchema.parse(data);
    } catch (error) {
      console.error("Fetch Brand failed", error);
      throw error;
    }
  }

  async createBrand(payload: CreateBrandPayloadType):Promise<AllBrandApiResponseType> {
    try {
      const { data } = await instance.post("/brands", payload);
      return AllBrandApiResponseSchema.parse(data);
    } catch (error) {
      console.error("Creating brand failed", error);
      throw error;
    }
  }

  async updateBrand(id: string, payload: UpdateBrandPayloadType):Promise<AllBrandApiResponseType> {
    try {
      const { data } = await instance.put(`/brands/${id}`, payload);
      return AllBrandApiResponseSchema.parse(data);
    } catch (error) {
      console.error(`Updating brand ${id} failed`, error);
      throw error;
    }
  }

  async deleteBrand(id: string): Promise<AllBrandApiResponseType> {
    try {
      const { data } = await instance.delete(`/brands/${id}`);
      return AllBrandApiResponseSchema.parse(data);
    } catch (error) {
      console.error(`Deleting brand ${id} failed`, error);
      throw error;
    }
  }
}

const brandService = new BrandService();
export default brandService;
