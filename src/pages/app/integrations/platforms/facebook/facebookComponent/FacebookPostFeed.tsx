import React from "react";
import { Loader2, MessageSquare, ThumbsUp, Share2, CalendarClock } from "lucide-react";

interface Props {
  posts: any[];
  isFetching: boolean;
}

const FacebookPostFeed: React.FC<Props> = ({ posts, isFetching }) => {
  if (isFetching && posts.length === 0) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="animate-spin text-blue-600" size={36} />
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <MessageSquare size={48} className="mx-auto mb-4 text-gray-300" strokeWidth={1.5} />
        <h3 className="text-lg font-medium text-gray-900">No Posts Yet</h3>
      </div>
    );
  }

  return (
    <div className="space-y-6 pt-6"> {/* Added padding top */}
      {posts.map((post, idx) => (
        <article key={post.id || idx} className="p-6 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium mb-4">
            <CalendarClock size={14} />
            {new Date(post.created_time).toLocaleString()}
          </div>

          {post.message && <p className="text-gray-800 text-[15px] mb-5 whitespace-pre-wrap">{post.message}</p>}

          {post.full_picture && (
            <div className="w-full bg-gray-50 rounded-xl border border-gray-100 flex justify-center items-center overflow-hidden mb-5 p-2">
              <img src={post.full_picture} className="max-h-[320px] max-w-full object-contain rounded-lg" />
            </div>
          )}

          <div className="flex items-center gap-8 pt-4 border-t border-gray-100 text-gray-500 font-medium">
            <div className="flex items-center gap-2 text-sm"><ThumbsUp size={18} /> {post.likes?.summary?.total_count || 0}</div>
            <div className="flex items-center gap-2 text-sm"><MessageSquare size={18} /> {post.comments?.summary?.total_count || 0}</div>
            <div className="flex items-center gap-2 text-sm"><Share2 size={18} /> {post.shares?.count || 0}</div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default FacebookPostFeed;