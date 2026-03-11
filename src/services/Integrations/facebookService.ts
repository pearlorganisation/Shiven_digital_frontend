import instance from "../../lib/apiClient"
class FacebookService {

 
   connectFacebook() {
    const API = import.meta.env.VITE_API_URL;

    window.location.href = `${API}/integration/facebook/connect`;
  }

  async getPages() {
    try {

      const { data } = await instance.get(
        "/integration/facebook/pages"
      );

      return data;

    } catch (error) {

      console.error("Fetch facebook pages failed:", error);
      throw error;

    }
  }
  //done taks 

  async getPagePosts(pageId: string) {
    try {
      // Assuming your backend route starts with /integration/facebook
      const { data } = await instance.get(`/integration/facebook/pages/${pageId}/posts`);
      return data;
    } catch (error) {
      console.error("Fetch page posts failed:", error);
      throw error;
    }
  }

  // 4. Create a new post (Required for the new UI component)
  async createPost(postData: { pageId: string; message: string; imageUrl?: string }) {
    try {
      // Assuming your backend route is set up to handle this
      const { data } = await instance.post("/integration/facebook/post", postData);
      return data;
    } catch (error) {
      console.error("Create post failed:", error);
      throw error;
    }
  }


  

}

const facebookService = new FacebookService();
export default facebookService;