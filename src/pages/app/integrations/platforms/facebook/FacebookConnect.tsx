import  {  useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Facebook, Plus } from "lucide-react";

import facebookService from "@/services/Integrations/facebookService";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setPages, setLoading } from "@/store/slice/integration/facebookSlice";

import FacebookConnect from "./facebookComponent/FacebookConnect";
import FacebookPageList from "./facebookComponent/FacebookPageList";
import FacebookCreatePost from "./facebookComponent/FacebookCreatePost";
import FacebookPostFeed from "./facebookComponent/FacebookPostFeed";

const SocialIntegrations = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { pages } = useAppSelector((state) => state.integration.facebook);

  const[selectedPageId, setSelectedPageId] = useState<string>("");
  const [pagePosts, setPagePosts] = useState<any[]>([]);
  const [isFetchingPosts, setIsFetchingPosts] = useState(false);
  const [showAddPost, setShowAddPost] = useState(false);
  const[isPosting, setIsPosting] = useState(false);

  const connectFacebook = () => facebookService.connectFacebook();

  const fetchPages = async () => {
    try {
      dispatch(setLoading(true));
      const res = await facebookService.getPages();
      dispatch(setPages(res.data));
      if (res.data && res.data.length > 0) setSelectedPageId(res.data[0].pageId);
    } catch (error) {
      toast.error("Failed to fetch Facebook pages.");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("facebook") === "connected") {
      toast.success("Facebook connected successfully!");
      fetchPages();
      params.delete("facebook");
      navigate({ search: params.toString() }, { replace: true });
    } else {
      if (pages.length === 0) fetchPages();
      else if (!selectedPageId) setSelectedPageId(pages[0].pageId);
    }
  }, [location]);

  const fetchPagePosts = async () => {
    if (!selectedPageId) return;
    setIsFetchingPosts(true);
    try {
      const res = await facebookService.getPagePosts(selectedPageId);
      setPagePosts(res.data);
    } catch (error) {
      toast.error("Failed to fetch page posts.");
    } finally {
      setIsFetchingPosts(false);
    }
  };

  useEffect(() => {
    if (selectedPageId) {
      fetchPagePosts();
    }
  },[selectedPageId]);

  const handleCreatePost = async (message: string, imageUrl: string) => {
    if (!selectedPageId) return toast.error("Please select a page first.");
    setIsPosting(true);
    const loadingToast = toast.loading("Publishing post to Facebook...");

    try {
      await facebookService.createPost({ pageId: selectedPageId, message, imageUrl });
      toast.success("Post published successfully!", { id: loadingToast });
      setShowAddPost(false); // Close Modal on success
      fetchPagePosts(); 
    } catch (error) {
      toast.error("Failed to publish post.", { id: loadingToast });
    } finally {
      setIsPosting(false);
    }
  };

  const selectedPageName = pages.find((p: any) => p.pageId === selectedPageId)?.pageName || "Facebook Page";

  return (
    <div className="max-w-[1400px] mx-auto p-6 h-[calc(100vh-4rem)] flex flex-col">
      
      {/* GLOBAL MODAL RENDER */}
      {showAddPost && (
        <FacebookCreatePost 
          isPosting={isPosting} 
          onSubmit={handleCreatePost} 
          onClose={() => setShowAddPost(false)}
        />
      )}

      {/* HEADER */}
      <div className="flex-shrink-0 mb-2">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Social Integrations</h2>
        <p className="text-gray-500 mt-0">Manage and publish to your connected social pages.</p>
      </div>

      <div className="flex-1 flex gap-8 overflow-hidden min-h-0">
        
        {/* ======================================= */}
        {/* LEFT COLUMN: Feed                       */}
        {/* ======================================= */}
       <div className="flex-1 flex flex-col min-h-0 bg-gray-50/50 rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
  
  {/* FIXED HEADER: Now outside the scrollable area */}
  <div className="flex-shrink-0 flex items-center gap-4 bg-white p-5 border-b border-gray-100 z-20">
    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
      <Facebook size={24} />
    </div>
    <div>
      <p className="text-[10px] font-bold text-blue-600 tracking-widest uppercase">Currently Viewing</p>
      <h3 className="text-xl font-bold text-gray-900">{selectedPageName}</h3>
    </div>
  </div>

  {/* FLOATING ACTION BUTTON (Top Right) */}
  {pages.length > 0 && (
    <button
      onClick={() => setShowAddPost(true)}
      className="absolute top-5 right-6 z-30 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all font-medium"
    >
      <Plus size={18} />
      Create Post
    </button>
  )}

  {/* SCROLLABLE FEED AREA */}
  <div className="flex-1 overflow-y-auto p-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
    <div className="w-full max-w-4xl mx-auto">
      <FacebookPostFeed 
        posts={pagePosts} 
        isFetching={isFetchingPosts} 
      />
    </div>
  </div>
</div>

        {/* ======================================= */}
        {/* RIGHT COLUMN: Connect & Pages           */}
        {/* ======================================= */}
        <div className="w-[340px] flex-shrink-0 flex flex-col gap-6 h-full overflow-hidden">
          <div className="flex-shrink-0">
            <FacebookConnect 
              isConnected={pages.length > 0} 
              onConnect={connectFacebook} 
            />
          </div>
          <div className="flex-1 min-h-0 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full">
            <FacebookPageList 
              pages={pages} 
              selectedPageId={selectedPageId} 
              onSelectPage={setSelectedPageId} 
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default SocialIntegrations;