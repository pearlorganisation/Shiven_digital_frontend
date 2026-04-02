import instance from "../../lib/apiClient";

class userProfile {
  // Get Company Profile
  async getCompanyProfile(): Promise<any> {
    try {
      const { data } = await instance.get("/company/profile");
      return data;
    } catch (error) {
      console.error("Fetching company profile failed", error);
      throw error;
    }
  }

  // Create / Update Company Profile
  async saveCompanyProfile(payload: any): Promise<any> {
    try {
      const { data } = await instance.post("/company/profile", payload);
      return data;
    } catch (error) {
      console.error("Saving company profile failed", error);
      throw error;
    }
  }
}

const userProfileData = new userProfile();
export default userProfileData;