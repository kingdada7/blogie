import { CheckCheck, Trash2 } from "lucide-react";
import React from "react";

const CommentTableItem = ({ comment, fetchComments }) => {
  const { blog, createdAt, _id } = comment;
  const BlogDate = new Date(createdAt);

  return (
    <tr className="order-y" border-gray-300>
      <td className="px-6 py-4">
        <b className="font-medium text-gray-300">Blog</b>:{blog.title}
        <br />
        <br />
        <b className="font-medium text-gray-300">Name</b>:{comment.name}
        <br />
        <b className="font-medium text-gray-300">Comment</b> : {comment.content}
      </td>
      <td className="px-6 py-4 max-sm:hidden">
        {BlogDate.toLocaleDateString()}
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-2">
          {!comment.isApproved ? (
            <CheckCheck className="w-5 hover:scale-110 hover:text-green-400 transition-all cursor-pointer" />
          ) : (
            <p className="text-xs border border-green-600 bg-green-100 text-green-600  rounded-full px-3 py-1">
              Approved
            </p>
          )}
          <Trash2 className="w-5 hover:text-red-500 hover:scale-110 transition-all cursor-pointer" />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
