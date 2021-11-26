import { Comment } from "./comment.model";
export class Post {
    id?: any;
    title?: string;
    description?: string;
    published?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    user_id?: number;
    comments?: Comment[];
  }