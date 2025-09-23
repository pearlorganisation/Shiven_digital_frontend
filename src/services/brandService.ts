import instance from "../lib/apiClient";

// import {
//   EmptyApiResponseSchema,
//   type EmptyApiResponse,
// } from "@/schemas/common/schema";

import {
  GetBrandApiResponseSchema,
  AllBrandApiResponseSchema,
  type GetBrandApiResponseType,
  type AllBrandApiResponseType,
} from "@/schemas/brand/brandSchema";

import {
  CreateBrandPayloadSchema,
  UpdateBrandPayloadSchema,
  CreateBrandApiResponseSchema,
  UpdateBrandApiResponseSchema,
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


  async getBrandById(id: string): Promise<AllBrandApiResponseType> {
    try {
      const { data } = await instance.get(`/brands/${id}`); 
      return AllBrandApiResponseSchema.parse(data);
    } catch (error) {
      console.error(`Fetching brand ${id} failed`, error);
      throw error;
    }
  }

  async createBrand(payload: CreateBrandPayloadType) {
    try {
      const parsedPayload = CreateBrandPayloadSchema.parse(payload);
      const { data } = await instance.post("/brands", parsedPayload);
      return CreateBrandApiResponseSchema.parse(data);
    } catch (error) {
      console.error("Creating brand failed", error);
      throw error;
    }
  }

  async updateBrand(id: string, payload: UpdateBrandPayloadType) {
    try {
      const parsedPayload = UpdateBrandPayloadSchema.parse(payload);
      const { data } = await instance.put(`/brands/${id}`, parsedPayload);
      return UpdateBrandApiResponseSchema.parse(data);
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
