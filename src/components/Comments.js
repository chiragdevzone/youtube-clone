import React from "react";

const commentsData = [
  {
    name: "chirag sankhla",
    text: "this is a dummy comment",
    reply: [],
  },
  {
    name: "chirag sankhla",
    text: "this is a dummy comment",
    reply: [
      {
        name: "chetan saini",
        text: "this is a dummy reply",
        reply: [],
      },
    ],
  },
  {
    name: "chirag sankhla",
    text: "this is a dummy comment",
    reply: [],
  },
  {
    name: "chirag sankhla",
    text: "this is a dummy comment",
    reply: [
      {
        name: "chetan saini",
        text: "this is a dummy reply",
        reply: [],
      },
    ],
  },
  {
    name: "chirag sankhla",
    text: "this is a dummy comment",
    reply: [],
  },
  {
    name: "chirag sankhla",
    text: "this is a dummy comment",
    reply: [
      {
        name: "chetan saini",
        text: "this is a dummy reply",
        reply: [
          {
            name: "shyam saini",
            text: "this is reply of reply",
            reply: [],
          },
        ],
      },
    ],
  },
  {
    name: "chirag sankhla",
    text: "this is a dummy comment",
    reply: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex items-center m-2 p-2">
      <img
        className="w=8 h-8"
        alt="user"
        src="https://static.vecteezy.com/system/resources/thumbnails/019/879/198/small_2x/user-icon-on-transparent-background-free-png.png"
      />

      <ul className="leading-none">
        <li className="font-bold">{name}</li>
        <li className="text-sm">{text}</li>
      </ul>
    </div>
  );
};

const CommentList = ({ data }) => {
  return data?.map((c, index) => (
    <div key={index}>
      <Comment data={c} />

      {c?.reply?.length > 0 && Array.isArray(c?.reply) && c?.reply && (
        <div className="ml-8  border-l-2 border-black">
          <CommentList data={c?.reply} />
        </div>
      )}
    </div>
  ));
};

const Comments = () => {
  return (
    <div className="p-4">
      <CommentList data={commentsData} />
    </div>
  );
};

export default Comments;
