import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: [
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      null,
    ],
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    firstName: "Adarsh",
    lastName: "Raj",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        firstName: "shashi",
        lastName: "Maurya",
        username: "shashi1",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        firstName: `Anupam`,
        lastName: `Mittal`,
        username: `AnupamMittal`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654092599/anupam_mittal_owirks.jpg`,
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: [
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      null,
    ],
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    firstName: "Subhas",
    lastName: "Moni",
    comments: [
      {
        _id: uuid(),
        firstName: `Bhavish`,
        lastName: ` Aggarwal`,
        username: `bhash`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        text: "superb!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        firstName: `Kunal`,
        lastName: `Shah`,
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
        text: "Amazing 😎",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
